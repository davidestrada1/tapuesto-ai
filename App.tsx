import React from 'react';
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

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create" element={<CreateMarketPage />} />
                <Route path="/challenge" element={<ChallengePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                
                {/* New Routes */}
                <Route path="/share/:id" element={<ShareMarketPage />} />
                <Route path="/invite/:id" element={<InviteLandingPage />} />
                <Route path="/settle/:id" element={<SettleBetPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;