# tapuesto.ai — The Prediction Market for People

> **tapuesto.ai** is an AI-powered prediction market platform where friends bet on future outcomes, earn reputation (ELO), and discover how their prediction skills compare against peers and the world.

---

## 🧭 For Non-Technical Readers (HR / Recruiters / Stakeholders)

### What Is This? (The Story)

Imagine a group of friends arguing about who's the better "predictor" — who can foresee whether Peru's GDP will grow, which team wins the clasico, or who'll lose the most weight by summer. Someone says *"put your money where your mouth is"*.

**tapuesto.ai was built to settle that argument forever.**

It's a social prediction game where:
- You create bets on **any topic** (sports, politics, your diet bet)
- Friends wager real or fun stakes (cash, a bottle of Blue Label, washing dishes)
- An **AI assistant** (Google Gemini) helps turn vague ideas into clear Yes/No questions
- Your **ELO rating** (like chess) tracks who's the smartest predictor
- A **leaderboard** shows who's Grandmaster vs. Bronze tier
- A **"payer score"** proves you're reliable even when you lose

### Key Features

| Feature | What It Does |
|---------|-------------|
| **Create Bets** | 1-on-1 duels or group polls on any topic |
| **AI Market Assistant** | Google Gemini AI researches & formulates clear bet questions |
| **ELO Rankings** | Earn/lose rating points with every prediction |
| **Leaderboard** | Bronze → Silver → Grandmaster tiers |
| **Win Rate** | Track your prediction accuracy percentage |
| **Payer Score** | Reliability metric — shows you pay up when wrong |
| **Portfolio Page** | Built-in system architecture showcase |
| **Bilingual** | Full English & Spanish support (Spanish default) |
| **Proof System** | Settle bets with photos, videos, vouchers, or web links |
| **Share** | WhatsApp, Twitter, Facebook — challenge anyone |

### The Build Journey

```
┌──────────────┐     ┌──────────┐     ┌────────────────┐     ┌──────────┐     ┌─────────────┐
│  Google AI   │ ──► │  Replit  │ ──► │   Google       │ ──► │  GitHub  │ ──► │  GitHub     │
│  Studio      │     │ (rapid   │     │   Antigravity  │     │  (repo)  │     │  Pages      │
│  (prototype) │     │  coding) │     │   IDE          │     │          │     │  (hosting)  │
└──────────────┘     └──────────┘     └────────────────┘     └──────────┘     └─────────────┘
```

**The prototype was built in Google AI Studio**, iterated rapidly in **Replit**, refined locally in **Google Antigravity IDE**, version-controlled on **GitHub**, and deployed on **GitHub Pages** for zero-cost hosting.

### Live Demo

- **GitHub Repo:** https://github.com/davidestrada1/tapuesto-ai
- **AI Studio Prototype:** https://ai.studio/apps/drive/1CjGhZ5Wpgd65W2Y1OYyjKppIhtPYtm3r
- **GitHub Pages (live):** https://davidestrada1.github.io/tapuesto-ai/

---

## 👨‍💻 For Developers

### Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    React Client (Vite)                   │
│  ┌─────────┐ ┌──────────┐ ┌───────────┐ ┌────────────┐ │
│  │ Landing │ │Dashboard │ │  Create   │ │ Leaderboard│ │
│  │  Page   │ │  Page    │ │Market Page│ │   Page     │ │
│  └─────────┘ └──────────┘ └───────────┘ └────────────┘ │
│  ┌─────────┐ ┌──────────┐ ┌───────────┐ ┌────────────┐ │
│  │ Profile │ │Portfolio │ │  Settle   │ │  Shared/   │ │
│  │  Page   │ │  Page    │ │  Bet Page │ │  Invite    │ │
│  └─────────┘ └──────────┘ └───────────┘ └────────────┘ │
└──────────────────────┬──────────────────────────────────┘
                       │
              ┌────────▼────────┐
              │   Gemini API    │
              │ (gemini-3-flash │
              │  + Google       │
              │  Search Ground) │
              └────────┬────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│               State & Backend Layer                      │
│  ┌─────────────────────┐  ┌──────────────────────────┐  │
│  │  In-Memory State    │  │  Supabase (Planned)       │  │
│  │  (current — wallet  │  │  - User auth             │  │
│  │   sim, no backend)  │  │  - Database              │  │
│  └─────────────────────┘  │  - Storage for proofs    │  │
│                           └──────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Vite 6 |
| **Routing** | React Router v7 (HashRouter — GitHub Pages compatible) |
| **Styling** | Tailwind CSS (CDN) + Custom dark theme |
| **AI/ML** | Google Gemini API (`gemini-3-flash-preview`) via `@google/genai` |
| **Icons** | Material Symbols (Google Fonts) |
| **i18n** | i18next + react-i18next (English / Spanish) |
| **State** | In-memory client-side (wallet simulation) |
| **Planned Backend** | Supabase (Auth, PostgreSQL, Storage) |
| **Hosting** | GitHub Pages (free static hosting) |

### Project Structure

```
tapuesto-ai/
├── App.tsx                   # Root with HashRouter
├── index.tsx                 # Entry point
├── i18n.ts                   # i18next config
├── types.ts                  # TypeScript interfaces
│
├── components/
│   ├── LanguageToggle.tsx    # ES/EN toggle button
│   └── MarketCard.tsx        # Market preview card
│
├── pages/
│   ├── LandingPage.tsx       # Hero, stats, trending markets
│   ├── RegisterPage.tsx      # Nickname registration
│   ├── DashboardPage.tsx     # Balance, active bets, activity
│   ├── CreateMarketPage.tsx  # AI-assisted bet creation wizard
│   ├── ChallengePage.tsx     # Accept 1v1 challenges
│   ├── LeaderboardPage.tsx   # ELO rankings (3 tiers)
│   ├── ProfilePage.tsx       # User stats & bet history
│   ├── PortfolioPage.tsx     # Architecture showcase (meta-page)
│   ├── ShareMarketPage.tsx   # Post-creation share links
│   ├── InviteLandingPage.tsx # Landing for invited users
│   ├── SettleBetPage.tsx     # Upload proof to settle bets
│   ├── PrivacyPage.tsx       # Privacy policy
│   └── TermsPage.tsx         # Terms & conditions
│
├── services/
│   └── geminiService.ts      # Google GenAI integration
│
├── locales/
│   ├── en.json               # English translations
│   └── es.json               # Spanish translations
│
├── slides/
│   ├── slides.md             # Markdown slide deck
│   └── index.html            # Reveal.js interactive presentation
│
├── .github/workflows/
│   └── deploy.yml            # GitHub Pages auto-deploy
│
├── vite.config.ts
├── tsconfig.json
├── package.json
├── index.html
└── README.md
```

### Key Feature: AI-Powered Market Creation

The app's standout feature is the **Gemini-assisted bet creation flow** in `CreateMarketPage.tsx`:

```
User types a rough idea
  → "¿Bajará la inflación este año?"
  → Gemini API searches the web (Google Search Grounding)
  → Reformats into a precise Yes/No question
  → "Will Peru's inflation drop below 3% by December 2024?"
  → Provides reasoning + source citations
  → User approves, sets stake/deadline/proof
  → Market created & shareable
```

**`geminiService.ts`** uses `gemini-3-flash-preview` with Google Search tool enabled:
```typescript
const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analiza el tema para un mercado de predicciones...`,
    config: {
        tools: [{ googleSearch: {} }],
    },
});
```

### Planned Backend: Supabase Integration

The current version uses **in-memory state** (wallet simulation, no persistence). **Supabase** was planned as the backend to provide:

| Service | Purpose | Status |
|---------|---------|--------|
| **Auth** | User registration & login | 📝 Planned |
| **PostgreSQL** | Markets, bets, users, ELO history | 📝 Planned |
| **Storage** | Proof uploads (photos, vouchers) | 📝 Planned |
| **Realtime** | Live bet updates & notifications | 📝 Planned |

The codebase was designed with Supabase in mind — all pages have form states ready to connect to a backend. The `CreateMarketForm` type in `types.ts` maps cleanly to a Supabase schema, and the `SettleBetPage` already has file upload UI ready for Supabase Storage.

### Quick Start

```bash
# Prerequisites: Node.js 18+
npm install

# Set your Gemini API key
# Create .env.local with:
#   GEMINI_API_KEY=your_key_here

npm run dev
# → http://localhost:3000
```

### Build & Deploy

```bash
npm run build    # Outputs to /dist
npm run preview  # Preview production build
```

Pushes to `main` auto-deploy to GitHub Pages via GitHub Actions.

---

## 🧪 Project Status & Roadmap

### Completed ✅
- ✅ AI-powered market creation with Gemini + Google Search Grounding
- ✅ 1v1 duels & group poll creation flow
- ✅ ELO leaderboard with Bronze/Silver/Grandmaster tiers
- ✅ User profiles with win rate, balance, bet history
- ✅ Bilingual UI (English & Spanish)
- ✅ Bet settlement with proof upload (photo, video, voucher, link)
- ✅ Share via WhatsApp, Twitter, Facebook
- ✅ Full dark-mode UI with Tailwind CSS
- ✅ Portfolio/Architecture showcase page
- ✅ Privacy & Terms pages
- ✅ Presentation slides (markdown + HTML Reveal.js)
- ✅ GitHub Pages deployment with CI/CD

### In Progress 🔄
- 🔄 Supabase integration (auth, database, storage)
- 🔄 Real payment processing (PEN / crypto)

### Planned 📝
- 📝 Backend server with user accounts & persistence
- 📝 Smart contract integration for trustless settlement
- 📝 Mobile app (React Native)
- 📝 Social features (friend lists, notifications, streaks)
- 📝 Enterprise prediction tournaments

---

## 📄 License

MIT

---

## 🙌 Built With

| Tool | How It Was Used |
|------|----------------|
| **Google AI Studio** | Initial prototyping & AI prompt engineering |
| **Replit** | Rapid online iteration of the React app |
| **Google Antigravity IDE** | Local development & refinement |
| **GitHub** | Version control & collaboration |
| **GitHub Pages** | Free static hosting with auto-deploy |
| **Gemini API** | AI-powered market creation with web grounding |
| **Supabase (planned)** | Backend — auth, database, storage |

---

## 🔗 Links

- **GitHub:** https://github.com/davidestrada1/tapuesto-ai
- **AI Studio Prototype:** https://ai.studio/apps/drive/1CjGhZ5Wpgd65W2Y1OYyjKppIhtPYtm3r
- **Live Demo:** https://davidestrada1.github.io/tapuesto-ai/
- **Slides (Markdown):** `slides/slides.md`
- **Slides (Interactive):** `slides/index.html` (open in browser or deploy)
