# FINORA AI — Financial Security & Fraud Prevention Platform

> **"Intelligence That Protects Your Money."**

FINORA AI is a full-stack, enterprise-grade financial cybersecurity and anti-fraud platform designed for individuals, families, small merchants, and students. Developed for the **AI for Finance Hackathon**, Finora AI acts as an intelligent financial safety companion that **Detects**, **Analyzes**, and **Protects** against modern digital payment scams, phishing links, counterfeit payment receipts, and anomalous transactions.

---

## 🛡️ Core Highlights & Architecture

- **Multi-Stage Hybrid AI Engine**: Combines Google Gemini LLM contextual reasoning with high-performance deterministic threat intelligence rules.
- **Explainable Fraud Telemetry**: Every assessment outputs a transparent 0–100 risk score, risk level (Low, Medium, High, Critical), identified indicators, quoted evidence, actionable countermeasures, and model limitations.
- **Indian Cybercrime Escalation (Golden Hour 1930)**: Direct built-in guidance to freeze funds within the critical 2-hour window via the National Cybercrime Helpline **1930** and **cybercrime.gov.in**.
- **Native Bilingual Support**: Evaluates and explains threats in both **English** and **हिन्दी (Hindi)**.
- **Strict Zero-Credential Architecture**: Never solicits, records, or stores UPI PINs, passwords, OTPs, or CVV numbers.
- **Production-Ready Persistence**: Built for Supabase PostgreSQL with complete Row Level Security (RLS) migrations and a resilient offline-ready local store fallback.

---

## 🎨 Design System & Palette

- **Primary Background**: `#080F1D`
- **Secondary Background**: `#101B2D`
- **Card Background**: `#142238`
- **Elevated Card**: `#1A2B43`
- **Primary Blue**: `#3B82F6`
- **Electric Blue**: `#60A5FA`
- **Teal Accent**: `#2DD4BF`
- **Primary Text**: `#F8FAFC`
- **Secondary Text**: `#94A3B8`
- **Success / Warning / Danger**: `#22C55E` / `#F59E0B` / `#EF4444`
- **Typography**: Inter & Manrope

---

## 📱 12 Comprehensive Application Pages

1. **Marketing Landing Page**: High-converting fintech SaaS showcase with cyber shield visual, problem statement, 6 core pillars, and workflow.
2. **Authentication System**: Email/password signup, login, session persistence with Supabase Auth or instant demo analyst mode.
3. **Command Dashboard**: Live telemetry calculated from actual user scans, 7-day activity area chart, risk severity pie chart, recent audit logs, and smart insights.
4. **Module 1: AI Scam Message Scanner**: Evaluates bank impersonations, fake KYC expiry threats, electricity bill scams, and remote app requests with Hindi/English support.
5. **Module 2: Phishing URL Detector**: Zero-click static domain forensics inspecting typosquatting, homoglyphs, subdomain stacking, and Safe Browsing threat matching.
6. **Module 3: Payment Screenshot Analyzer**: Gemini Vision forensic receipt audit, OCR parameter extraction, tampering checks, and non-negotiable settlement warnings.
7. **Module 4: Financial Transaction Risk Analyzer**: Statistical Z-Score outlier detection, nocturnal timing flags (1–5 AM), rapid velocity burst checks, and live sample simulation datasets.
8. **Module 5: AI Financial Safety Assistant**: Specialized 24/7 financial cybersecurity conversational AI equipped with official Indian reporting procedures.
9. **Module 6: Family Protection Mode**: High-legibility senior citizen interface, Hindi safety rules, and selective scan warning sharing.
10. **Module 7: Financial Awareness Centre**: Interactive scenario quizzes ("Does this message look trustworthy?"), answer explanations, and dynamic literacy scores.
11. **Module 8: Scan History**: Multi-channel filter, severity filter, search, date sorting, detailed modal view, JSON export, and record deletion.
12. **Settings & Telemetry**: Analyst profile preferences, notification triggers, sensitivity thresholds, and live backend engine diagnostics.

---

## 📁 Repository Structure

```
finora-ai/
├── backend/
│   ├── src/
│   │   ├── config/env.js            # Environment configurations
│   │   ├── controllers/            # Modular route controllers
│   │   │   ├── scanController.js
│   │   │   ├── assistantController.js
│   │   │   ├── dashboardController.js
│   │   │   ├── historyController.js
│   │   │   ├── familyController.js
│   │   │   └── quizController.js
│   │   ├── services/               # Core business & AI logic
│   │   │   ├── geminiService.js     # Hybrid Gemini 1.5/2.0 Flash engine
│   │   │   ├── ruleEngineService.js # Deterministic weighted threat rules
│   │   │   ├── urlThreatService.js  # Zero-click URL forensics
│   │   │   ├── screenshotService.js # Forensic receipt OCR & analysis
│   │   │   ├── transactionRiskService.js # Statistical Z-Score engine
│   │   │   └── dbService.js         # Supabase & resilient JSON store
│   │   ├── middleware/             # Auth, multer, rate-limiting, errors
│   │   ├── prompts/                # System prompts with JSON schema enforcement
│   │   └── routes/apiRoutes.js     # Unified Express API endpoints
│   ├── server.js                   # Express application entrypoint
│   ├── test-suite.js               # Automated 8-point verification test
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/             # Reusable UI primitives
│   │   │   ├── RiskMeter.jsx       # 0–100 radial SVG risk gauge
│   │   │   ├── RiskBadge.jsx       # Severity pill badges
│   │   │   ├── LoadingSkeleton.jsx # Cybernetic shimmer loaders
│   │   │   ├── TopNav.jsx          # Live shield status & header
│   │   │   ├── Sidebar.jsx         # Persistent 10-item navigation
│   │   │   └── EmptyState.jsx      # Onboarding empty view
│   │   ├── pages/                  # 12 functional full-stack pages
│   │   ├── contexts/               # AuthContext & ToastContext
│   │   ├── services/api.js         # Backend fetch client
│   │   ├── layouts/                # DashboardLayout
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
├── supabase/
│   └── migrations/
│       └── 20261119_finora_init.sql # Complete PostgreSQL schema & RLS policies
└── README.md
```

---

## ⚡ Quick Start & Installation

### 1. Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 2. Backend Setup
```bash
cd backend
npm install

# Copy environment configuration
cp .env.example .env

# (Optional) Add your Google Gemini API Key or Supabase keys in backend/.env
# If GEMINI_API_KEY is left blank, Finora AI automatically runs on its rich,
# deterministic rule-based threat engine without breaking!
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
cp .env.example .env
```

### 4. Running the Application
Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd backend
npm start
# Server listens on http://localhost:5000
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
# Vite runs on http://localhost:5173
```

Visit **`http://localhost:5173`** in your browser.

---

## 🧪 Automated Verification Suite
To execute the automated end-to-end verification test suite:
```bash
cd backend
node test-suite.js
```
Expected output:
```
🧪 Starting Finora AI Comprehensive Automated Verification Suite...
✅ AI Scam Message Detection PASSED
✅ Phishing URL Detection PASSED
✅ Transaction Risk Analyzer PASSED
✅ AI Safety Assistant PASSED
✅ Dashboard Stats Calculation PASSED
✅ Scan History Retrieval PASSED
✅ Family Protection Profiles PASSED
✅ Awareness Centre Quizzes PASSED
🎉 ALL 8 VERIFICATION TEST MODULES PASSED WITH 100% SUCCESS!
```

---

## 🔑 Environment Variables

### Backend (`backend/.env`)
| Variable | Description | Default |
|---|---|---|
| `PORT` | Backend HTTP listening port | `5000` |
| `FRONTEND_URL` | Allowed CORS frontend origin | `http://localhost:5173` |
| `GEMINI_API_KEY` | Google Gemini API key | Optional (uses rule fallback if blank) |
| `SUPABASE_URL` | Supabase Project URL | Optional (uses local store if blank) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Service Role Key | Optional |
| `GOOGLE_SAFE_BROWSING_API_KEY` | Google Safe Browsing API Key | Optional |

### Frontend (`frontend/.env`)
| Variable | Description | Default |
|---|---|---|
| `VITE_API_BASE_URL` | URL of Finora Backend API | `http://localhost:5000/api` |
| `VITE_SUPABASE_URL` | Supabase public URL | Optional |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | Optional |

---

## 💾 Database Schema & Supabase Setup

To initialize the database in Supabase:
1. Open the Supabase dashboard for your project.
2. Navigate to the **SQL Editor**.
3. Copy the contents of [`supabase/migrations/20261119_finora_init.sql`](supabase/migrations/20261119_finora_init.sql).
4. Run the query. It creates all tables (`profiles`, `scan_history`, `family_profiles`, `family_shared_reports`, `awareness_quiz_results`, `assistant_conversations`) along with indexes and strict Row Level Security (RLS) policies.

---

## 🏆 Hackathon Demonstration Highlights

- **Live Test Samples**: Every scanning module includes one-click pre-fill sample buttons to immediately demonstrate high-risk bank impersonations, Hindi utility threats, altered receipts, and unusual midnight payments to hackathon judges.
- **Explainable Scoring**: Clearly breaks down how the score was calculated (heuristics + contextual parsing) rather than delivering an opaque "safe" or "unsafe" classification.
- **Impact-Oriented**: Addresses the real-world epidemic of UPI collect traps and fake payment screenshots in India with official 1930 helpline routing.

---

*FINORA AI — Intelligence That Protects Your Money.*
