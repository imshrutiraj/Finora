# FINORA AI — Financial Security & Fraud Prevention Platform

Intelligence That Protects Your Money:
Finora AI is an AI-powered financial cybersecurity platform designed to help individuals identify, understand, and protect themselves against digital financial fraud. By combining intelligent threat analysis, financial risk assessment, and cybersecurity awareness, Finora aims to make digital payments safer for everyone.
🚨The Problem:
With the rapid growth of digital payments, financial scams are becoming increasingly sophisticated. People are targeted through:
Fake banking and KYC verification messages.
Phishing links impersonating trusted financial institutions.
Counterfeit UPI payment screenshots.
Suspicious payment requests and fraudulent transactions.
Social engineering and remote-access application scams.
Many individuals, particularly students, senior citizens, and everyday digital payment users, struggle to identify these threats before financial losses occur.
Most people lack an accessible platform that helps them identify suspicious activity, understand why it is dangerous, and know what action to take.
💡 Our Solution
Finora AI brings multiple financial cybersecurity capabilities into one unified platform.
Instead of relying on users to recognize scams themselves, Finora provides tools to analyse suspicious messages, inspect URLs, examine payment screenshots, assess transaction risks, and access personalized cybersecurity guidance.
Our goal is to move beyond simply detecting threats and help users make safer, more informed financial decisions.
🎯 Who Is Finora AI For?
Students and young digital payment users.
Individuals who regularly use UPI and online banking.
Senior citizens who may be more vulnerable to social engineering.
Families who want to improve their digital safety.
Anyone who wants to verify suspicious messages, links, or payment-related activity.
✨ Key Features
1. Security Command Centre
A unified dashboard providing an overview of security activity and identified threats.
Total security scans.
High and critical threat counts.
Medium-risk flags and safe results.
Weekly security activity visualization.
Threat severity profile.
Quick access to security modules.
2. AI Scam Message Scanner
Analyses suspicious SMS messages, WhatsApp messages, and banking alerts.
Detects potential banking impersonation.
Identifies urgency-based manipulation and suspicious language.
Evaluates potential social engineering patterns.
Uses Gemini contextual AI with deterministic threat-detection rules.
Supports English and Hindi.
3. AI Phishing URL Detector
Helps identify suspicious and potentially malicious URLs.
Static URL inspection without visiting the target website.
Domain spoofing checks.
Homoglyph detection.
Typosquatting analysis.
Suspicious domain structure inspection.
4. Payment Screenshot Analyzer
Examines uploaded payment screenshots and receipts for potential inconsistencies.
OCR-assisted text and metadata extraction.
Visual tampering inspection.
Receipt examination.
Financial safety warnings regarding payment verification.
> A screenshot alone is not proof of a successful payment. Always verify actual credit through your bank account or merchant records.
5. Financial Transaction Risk Analyzer
Evaluates transaction parameters to identify unusual financial behaviour.
Transfer amount analysis.
Transaction timing.
Recipient or beneficiary history.
Payment frequency and transaction velocity.
First-time recipient checks.
Historical transaction baseline comparison.
6. Finora AI Safety Assistant
An AI-powered assistant dedicated to financial cybersecurity guidance.
Answers queries related to UPI fraud and online banking scams.
Provides guidance for fake KYC and phishing incidents.
Helps users understand steps to take after encountering suspicious activity.
Supports English and Hindi.
Provides guidance about India's 1930 cybercrime helpline.
7. Family Protection Mode
Extends digital financial safety to family members.
Protected family profiles.
Selective sharing of security scan reports.
Explicit-consent-based report sharing.
Simplified safety guidelines for senior citizens.
Family-oriented fraud awareness and protection.
8. Financial Cybersecurity Awareness Centre
An interactive learning centre that educates users about common digital financial scams through scenarios and questions.
Topics include:
UPI and QR-code payment scams.
Fake KYC and electricity bill scams.
Fake payment screenshots.
Remote-access application scams.
9. Scan History
Provides a consolidated view of previous security scans.
Searchable scan records.
Scan channel and threat category.
Risk severity and score.
Input summary.
Review of previously identified threats.
---
🧠 How AI Is Used
Finora AI combines contextual AI analysis with rule-based threat detection and specialized risk-analysis techniques.
Google Gemini AI
Used for contextual analysis of suspicious financial messages and AI-powered cybersecurity assistance.
Deterministic Threat Detection
Security rules complement AI analysis to identify suspicious patterns, indicators, and threat characteristics.
Specialized Analysis
Different security modules use techniques suited to their input:
Message contextual analysis.
Static URL and domain inspection.
OCR-assisted payment screenshot analysis.
Transaction anomaly and risk evaluation.
The combination aims to provide more informative security assessments than simple keyword matching alone.
---
⚙️ How It Works
User Input: The user submits a suspicious message, URL, payment screenshot, transaction details, or question.
Analysis: Finora processes the input using the relevant AI model, security rules, or analysis techniques.
Risk Evaluation: Suspicious patterns and risk indicators are evaluated.
Results: The platform displays the analysis and relevant security insights.
Action & Awareness: Users can learn about the threat and follow recommended precautions.

🛠️ Tech Stack:
Technology	Purpose
HTML, CSS, JavaScript-	Frontend and user interface
Node.js-	Backend runtime
Express.js-	Backend API framework
Google Gemini API-	AI contextual analysis and assistance
Supabase -	Database and backend services, where integrated.
Netlify	- Frontend deployment, where configured.

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
