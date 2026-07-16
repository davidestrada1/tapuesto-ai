# tapuesto.ai — The Prediction Market for People

**Where social betting meets AI-powered reputation**

---

## The Problem

People love:
- 🏆 Showing off their expertise
- 💰 Making friendly bets with stakes
- 📊 Comparing their knowledge vs. peers

**Problem**: No fun, gamified way to track prediction track records, build reputation, and compare with friends.

---

## The Solution

**tapuesto.ai** — a social prediction market where you:

- Create bets on anything (*"Who will lose the most weight?"*)
- Wager money, drinks, or bragging rights
- Earn **ELO rating** like a chess grandmaster
- Build a **prediction credit score**
- Compare your accuracy vs. friends and strangers
- Become known as "the expert" in any topic

---

## Key Features

| Feature | Benefit |
|---------|---------|
| 🎯 1v1 Duels | Head-to-head predictions |
| 👥 Group Polls | Multiple participants |
| 🤖 AI Assistant | Gemini Google Search turns ideas into bets |
| ⭐ ELO Rankings | Prove you're the best predictor |
| 📈 Hit Rate | Track your accuracy % |
| 💳 Credit Score | Show you're a reliable bettor |
| 🌐 Bilingual | English + Spanish |
| 📸 Proof System | Settle with photo/video/link |

---

## How It Works

```
1. User has an idea ──────────────┐
                                  ▼
2. Gemini AI analyzes topic ──── Google Search grounding
                                  ▼
3. AI suggests a clear bet ───── "Will X happen by Y date?"
                                  ▼
4. User sets stake & deadline ──── S/50, due Jul 31
                                  ▼
5. Challenge friends / go public ─ Share link
                                  ▼
6. Outcome happens ────────────── Upload proof
                                  ▼
7. Winner takes it ────────────── ELO updated
```

---

## Gamification & Reputation

- **ELO Rating** — start at 1200, climb as you predict correctly
- **Leaderboard** — 3 tiers: Bronze, Silver, Grandmaster
- **Win Rate** — percentage of correct predictions
- **Active Streaks** — consistent predictors get visibility
- **"Payer Score"** — reliability when you lose (do you pay up?)

---

## Business Model

| Revenue Stream | Description |
|----------------|-------------|
| 🏪 Marketplace Fee | Small % on cash bets |
| ⭐ Premium Profiles | Analytics & badge cosmetics |
| 🏢 Enterprise | Company prediction tournaments for team building |
| 📊 Data Insights | Aggregated prediction trends (anonymized) |

---

## Target Users

- **Friends & social groups** — fun bets with stakes
- **Subject matter experts** — build reputation, charge for picks
- **Companies** — internal prediction markets for forecasting
- **Communities** — sports, politics, finance, crypto

---

## Technical Architecture

```
┌──────────────────────────────┐
│      React Client (Vite)     │
│  ┌────┐ ┌─────┐ ┌────────┐  │
│  │Land│ │Dash │ │Create  │  │
│  │ing │ │board│ │Market  │  │
│  └────┘ └─────┘ └────────┘  │
│  ┌────┐ ┌─────┐ ┌────────┐  │
│  │Lead│ │Prof │ │Portfolio│  │
│  │erbd│ │ile  │ │        │  │
│  └────┘ └─────┘ └────────┘  │
└──────────┬───────────────────┘
           │
    Gemini API (gemini-3-flash)
    + Google Search Grounding
           │
┌──────────▼───────────────────┐
│   App State / Local Wallet   │
└──────────────────────────────┘
```

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| **UI** | React 19, TypeScript |
| **Build** | Vite 6 |
| **Styling** | Tailwind CSS (dark mode) |
| **AI** | Google Gemini Flash + Search Grounding |
| **Routing** | React Router v7 (HashRouter) |
| **i18n** | i18next (ES/EN) |
| **Icons** | Material Symbols |
| **Hosting** | GitHub Pages (free) |

---

## Build Pipeline

```
┌──────────────┐     ┌──────────────┐     ┌──────────┐     ┌────────────────┐     ┌──────────┐     ┌─────────────┐
│  Google      │ ──► │  Google AI   │ ──► │  Replit  │ ──► │   Google       │ ──► │  GitHub  │ ──► │  GitHub     │
│  Stitch      │     │  Studio      │     │ (rapid   │     │   Antigravity  │     │  (repo)  │     │  Pages      │
│  (UI design) │     │  (prototype) │     │  coding) │     │   IDE          │     │          │     │  (hosting)  │
└──────────────┘     └──────────────┘     └──────────┘     └────────────────┘     └──────────┘     └─────────────┘
                                                                                      │
                                                                             ┌────────▼────────┐
                                                                             │  Supabase       │
                                                                             │  (planned —     │
                                                                             │   auth, DB,     │
                                                                             │   storage)      │
                                                                             └─────────────────┘
```

---

## AI Integration Deep-Dive

**`gemini-3-flash-preview`** with Google Search Grounding:

```
INPUT: "Bajará la inflación este año?"
  │
  ▼
AI searches the web for recent economic news
  │
  ▼
OUTPUT: "Will Peru's inflation drop below 3% by Dec 2024?"
         + Reasoning + Source citations
```

---

## What Makes This Unique

1. **AI-first bet creation** — no other prediction market uses Gemini + Google Search to validate and format bets
2. **Dual-language from day one** — English & Spanish
3. **Reputation as a feature** — ELO leaderboards make prediction skill visible
4. **Flexible stakes** — cash, drinks, chores, anything
5. **Proof-based settlement** — photo/video/link evidence

---

## Roadmap

- [x] AI-powered market creation
- [x] 1v1 duels & group polls
- [x] ELO leaderboard
- [x] Bilingual UI
- [ ] Backend + user accounts
- [ ] Smart contract settlement
- [ ] Real payment processing
- [ ] Mobile app
- [ ] Social features (friends, notifications)

---

## Try It Yourself

**GitHub:** https://github.com/davidestrada1/tapuesto-ai

**Run locally:**
```bash
git clone https://github.com/davidestrada1/tapuesto-ai.git
cd tapuesto-ai
npm install
npm run dev
```

---

## Thank You

**tapuesto.ai** — turn predictions into reputation.

> "The best way to predict the future is to create it."
> — Peter Drucker
