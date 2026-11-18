-- ====================================================================
-- FINORA AI: Database Schema & Row Level Security (RLS) Migration
-- Target: Supabase / PostgreSQL
-- ====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES TABLE (Linked with Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT DEFAULT 'Security Analyst',
    preferred_language TEXT DEFAULT 'en',
    alert_notifications BOOLEAN DEFAULT true,
    risk_threshold TEXT DEFAULT 'medium',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SCAN HISTORY TABLE
CREATE TABLE IF NOT EXISTS public.scan_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    scan_type TEXT NOT NULL CHECK (scan_type IN ('message', 'url', 'screenshot', 'transaction')),
    risk_score INTEGER NOT NULL CHECK (risk_score >= 0 AND risk_score <= 100),
    risk_level TEXT NOT NULL CHECK (risk_level IN ('Low', 'Medium', 'High', 'Critical')),
    scam_category TEXT NOT NULL,
    summary TEXT NOT NULL,
    raw_input_preview TEXT,
    indicators JSONB DEFAULT '[]'::jsonb,
    evidence JSONB DEFAULT '[]'::jsonb,
    recommendations JSONB DEFAULT '[]'::jsonb,
    metadata JSONB DEFAULT '{}'::jsonb,
    uncertainty_note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. FAMILY SAFETY PROFILES
CREATE TABLE IF NOT EXISTS public.family_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    member_name TEXT NOT NULL,
    relationship TEXT NOT NULL, -- e.g. Parent, Grandparent, Spouse, Teen, Shopkeeper
    preferred_language TEXT DEFAULT 'en', -- en or hi
    phone_hint TEXT,
    avatar_color TEXT DEFAULT '#3B82F6',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. FAMILY SHARED REPORTS (Explicit authorization to share a scan)
CREATE TABLE IF NOT EXISTS public.family_shared_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    scan_id UUID NOT NULL REFERENCES public.scan_history(id) ON DELETE CASCADE,
    shared_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    shared_with_family_id UUID NOT NULL REFERENCES public.family_profiles(id) ON DELETE CASCADE,
    safety_note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. AWARENESS QUIZ RESULTS
CREATE TABLE IF NOT EXISTS public.awareness_quiz_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    quiz_category TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. ASSISTANT CONVERSATIONS
CREATE TABLE IF NOT EXISTS public.assistant_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT DEFAULT 'Financial Security Advice',
    messages JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_scan_history_user_id ON public.scan_history(user_id);
CREATE INDEX IF NOT EXISTS idx_scan_history_created_at ON public.scan_history(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_scan_history_type_level ON public.scan_history(scan_type, risk_level);
CREATE INDEX IF NOT EXISTS idx_family_profiles_owner ON public.family_profiles(owner_user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_user ON public.awareness_quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_assistant_conv_user ON public.assistant_conversations(user_id);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scan_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.family_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.family_shared_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.awareness_quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assistant_conversations ENABLE ROW LEVEL SECURITY;

-- 1. Profiles: users can select and update only their own profile
CREATE POLICY "Users can view own profile" 
    ON public.profiles FOR SELECT 
    USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
    ON public.profiles FOR UPDATE 
    USING (auth.uid() = id);

-- 2. Scan History: users can only view, insert and delete their own scans
CREATE POLICY "Users can view own scans" 
    ON public.scan_history FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own scans" 
    ON public.scan_history FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own scans" 
    ON public.scan_history FOR DELETE 
    USING (auth.uid() = user_id);

-- 3. Family Profiles: users manage only their created family profiles
CREATE POLICY "Users manage own family members" 
    ON public.family_profiles FOR ALL 
    USING (auth.uid() = owner_user_id);

-- 4. Family Shared Reports: owner who shared can view/manage
CREATE POLICY "Users manage shared reports" 
    ON public.family_shared_reports FOR ALL 
    USING (auth.uid() = shared_by);

-- 5. Quiz Results: users view and insert own quiz scores
CREATE POLICY "Users manage own quiz results" 
    ON public.awareness_quiz_results FOR ALL 
    USING (auth.uid() = user_id);

-- 6. Assistant Conversations: users manage their own conversations
CREATE POLICY "Users manage own assistant conversations" 
    ON public.assistant_conversations FOR ALL 
    USING (auth.uid() = user_id);
