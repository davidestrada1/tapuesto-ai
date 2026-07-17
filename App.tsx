import React, { Component, ReactNode } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CreateMarketPage from './pages/CreateMarketPage';
import ChallengePage from './pages/ChallengePage';
import DashboardPage from './pages/DashboardPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ShareMarketPage from './pages/ShareMarketPage';
import InviteLandingPage from './pages/InviteLandingPage';
import SettleBetPage from './pages/SettleBetPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import PortfolioPage from './pages/PortfolioPage';

interface ErrorBoundaryProps { children: ReactNode; }
interface ErrorBoundaryState { hasError: boolean; error: Error | null; }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-background-dark flex items-center justify-center p-8">
                    <div className="max-w-lg text-center">
                        <div className="text-6xl mb-6">⚠️</div>
                        <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
                        <p className="text-slate-400 mb-6">The app encountered an error. Please try refreshing the page.</p>
                        <pre className="text-xs text-left text-red-400 bg-slate-900 p-4 rounded-lg overflow-auto max-h-40 mb-6">{this.state.error?.message}</pre>
                        <button
                            onClick={() => window.location.reload()}
                            className="h-12 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-all"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

const App = () => {
    return (
        <ErrorBoundary>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/create" element={<CreateMarketPage />} />
                    <Route path="/challenge" element={<ChallengePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/leaderboard" element={<LeaderboardPage />} />
                    <Route path="/share/:id" element={<ShareMarketPage />} />
                    <Route path="/invite/:id" element={<InviteLandingPage />} />
                    <Route path="/settle/:id" element={<SettleBetPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                </Routes>
            </HashRouter>
        </ErrorBoundary>
    );
};

export default App;
