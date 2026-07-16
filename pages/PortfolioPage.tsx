import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../components/LanguageToggle';

const PortfolioPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-sans text-slate-900 dark:text-white pb-20">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-[#233c48] bg-white/80 dark:bg-[#111c22]/80 backdrop-blur-md px-6 py-4">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                    <span className="material-symbols-outlined text-primary">arrow_back</span>
                    <h2 className="text-lg font-bold">{t('portfolio.backToHome')}</h2>
                </div>
                <div className="flex items-center gap-6">
                    <LanguageToggle />
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">analytics</span>
                        </div>
                        <span className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            tapuesto.ai Architecture
                        </span>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto w-full px-6 pt-12 space-y-24">
                
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
                        <span className="text-xs font-bold text-primary uppercase tracking-wide">{t('portfolio.devPortfolio')}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        {t('portfolio.heroTitle')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{t('portfolio.heroHighlight')}</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t('portfolio.heroDesc')}
                    </p>
                </section>

                {/* Architecture Overview */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">{t('portfolio.systemArch')}</h2>
                        <p className="text-slate-500 dark:text-slate-400">{t('portfolio.systemArchDesc')}</p>
                    </div>

                    <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                        {/* Background Gradients */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none"></div>
                        
                        <div className="grid md:grid-cols-3 gap-8 relative z-10 items-center">
                            
                            {/* Client Block */}
                            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-500">
                                    <span className="material-symbols-outlined text-4xl">devices</span>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-lg">{t('portfolio.reactClient')}</h3>
                                    <p className="text-xs text-slate-500 mt-2">Vite, React Router, Tailwind CSS</p>
                                </div>
                            </div>

                            {/* Center Arrow */}
                            <div className="hidden md:flex justify-center text-slate-300 dark:text-slate-600">
                                <span className="material-symbols-outlined text-4xl">sync_alt</span>
                            </div>

                            {/* Services Layer */}
                            <div className="flex flex-col gap-4">
                                {/* Gemini Block */}
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 border border-primary/20 shadow-sm transform hover:-translate-y-1 transition-transform">
                                    <div className="p-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                                        <span className="material-symbols-outlined">smart_toy</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{t('portfolio.geminiApi')}</h3>
                                        <p className="text-xs text-slate-500">{t('portfolio.validationSearch')}</p>
                                    </div>
                                </div>
                                {/* Database/State Block */}
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 shadow-sm transform hover:-translate-y-1 transition-transform">
                                    <div className="p-3 rounded-xl bg-purple-500 text-white shadow-lg shadow-purple-500/30">
                                        <span className="material-symbols-outlined">database</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{t('portfolio.marketState')}</h3>
                                        <p className="text-xs text-slate-500">{t('portfolio.appState')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Integration Details */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">{t('portfolio.aiIntegration')}</h2>
                        <p className="text-slate-500 dark:text-slate-400">{t('portfolio.aiIntegrationDesc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-lg">
                                <div className="flex items-center gap-3 mb-4 text-primary">
                                    <span className="material-symbols-outlined">bolt</span>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('portfolio.fastObjective')}</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {t('portfolio.fastObjectiveDesc')}
                                </p>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-2 items-start">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                        <span><strong>{t('portfolio.contextualAnalysis')}</strong> {t('portfolio.contextualAnalysisDesc')}</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                        <span><strong>{t('portfolio.googleSearch')}</strong> {t('portfolio.googleSearchDesc')}</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                        <span><strong>{t('portfolio.structuredOutput')}</strong> {t('portfolio.structuredOutputDesc')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Code Snippet Vis */}
                        <div className="rounded-2xl bg-[#0d1117] border border-slate-800 overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-slate-800">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="ml-2 text-xs text-slate-400 font-mono">geminiService.ts</span>
                            </div>
                            <div className="p-6 overflow-x-auto text-sm font-mono text-slate-300">
                                <pre className="!bg-transparent !p-0 !m-0">
                                    <code>
{`const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: \`Analiza el tema: "\${topic}".
    1. Busca información reciente.
    2. Proponer PREGUNTA binaria clara.
    3. Dar razonamiento.\`,
  config: {
    tools: [{ googleSearch: {} }],
  },
});`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Flow Visualizer */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">{t('portfolio.userFlow')}</h2>
                    </div>
                    
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>
                        
                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                                <div className="md:w-1/2 flex justify-end text-right">
                                    <div className="max-w-sm p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md group-hover:border-primary/50 transition-colors">
                                        <h4 className="font-bold text-lg mb-2">{t('portfolio.step1Title')}</h4>
                                        <p className="text-sm text-slate-500">{t('portfolio.step1Desc')}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-background-dark text-slate-500 font-bold z-10 group-hover:bg-primary group-hover:text-white transition-colors">1</div>
                                <div className="md:w-1/2"></div>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                                <div className="md:w-1/2"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-background-dark text-slate-500 font-bold z-10 group-hover:bg-primary group-hover:text-white transition-colors">2</div>
                                <div className="md:w-1/2 flex justify-start text-left">
                                    <div className="max-w-sm p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md group-hover:border-primary/50 transition-colors">
                                        <h4 className="font-bold text-lg mb-2">{t('portfolio.step2Title')}</h4>
                                        <p className="text-sm text-slate-500">{t('portfolio.step2Desc')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                                <div className="md:w-1/2 flex justify-end text-right">
                                    <div className="max-w-sm p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md group-hover:border-primary/50 transition-colors">
                                        <h4 className="font-bold text-lg mb-2">{t('portfolio.step3Title')}</h4>
                                        <p className="text-sm text-slate-500">{t('portfolio.step3Desc')}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-background-dark text-slate-500 font-bold z-10 group-hover:bg-primary group-hover:text-white transition-colors">3</div>
                                <div className="md:w-1/2"></div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                                <div className="md:w-1/2"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border-4 border-white dark:border-background-dark shadow-lg shadow-primary/30 z-10">
                                    <span className="material-symbols-outlined text-[20px]">check</span>
                                </div>
                                <div className="md:w-1/2 flex justify-start text-left">
                                    <div className="max-w-sm p-6 rounded-2xl bg-primary border border-primary/50 text-white shadow-xl shadow-primary/20">
                                        <h4 className="font-bold text-lg mb-2">{t('portfolio.step4Title')}</h4>
                                        <p className="text-sm text-primary-100">{t('portfolio.step4Desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PortfolioPage;
