import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { analyzeMarketTopic } from '../services/geminiService';
import { AIAnalysisResult, CreateMarketForm } from '../types';
import LanguageToggle from '../components/LanguageToggle';

const CreateMarketPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysis, setAnalysis] = useState<AIAnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Form State
    const [form, setForm] = useState<CreateMarketForm>({
        betType: '1v1',
        topic: '',
        stakeType: 'money',
        stakeAmount: '',
        downPayment: '',
        currency: 'PEN',
        deadline: '',
        proofType: 'link',
        dataSourceUrl: ''
    });

    const handleAnalyze = async () => {
        if (!form.topic.trim()) return;
        setIsAnalyzing(true);
        setError(null);
        setAnalysis(null);
        
        try {
            const result = await analyzeMarketTopic(form.topic);
            setAnalysis(result);
            // Auto-fill the topic if the AI suggests a better phrasing
            if(result.suggestion) {
                setForm(prev => ({ ...prev, topic: result.suggestion }));
            }
        } catch (err) {
            setError(t('createMarket.errorMsg'));
            console.error(err);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleSubmit = () => {
        // Validation logic would go here
        // Simulating ID generation and redirect
        const marketId = Math.random().toString(36).substr(2, 9);
        navigate(`/share/${marketId}`);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col pb-20">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-[#233c48] bg-white dark:bg-[#111c22] px-6 py-4">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/dashboard')}>
                    <span className="material-symbols-outlined text-primary">arrow_back</span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('createMarket.title')}</h2>
                </div>
                <div className="flex items-center gap-4">
                    <LanguageToggle />
                    <div className="text-sm font-bold text-primary">{t('createMarket.step1of2')}</div>
                </div>
            </header>

            <div className="max-w-3xl mx-auto w-full px-4 pt-6 space-y-8">
                
                {/* 1. Bet Type Selection */}
                <section>
                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">{t('createMarket.step1Title')}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div 
                            onClick={() => setForm({...form, betType: '1v1'})}
                            className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-3 transition-all ${form.betType === '1v1' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}
                        >
                            <div className={`p-3 rounded-full ${form.betType === '1v1' ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                                <span className="material-symbols-outlined text-2xl">swords</span>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-slate-900 dark:text-white">{t('createMarket.duel')}</p>
                                <p className="text-xs text-slate-500">{t('createMarket.duelDesc')}</p>
                            </div>
                        </div>
                        <div 
                            onClick={() => setForm({...form, betType: 'poll'})}
                            className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-3 transition-all ${form.betType === 'poll' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}
                        >
                            <div className={`p-3 rounded-full ${form.betType === 'poll' ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                                <span className="material-symbols-outlined text-2xl">groups</span>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-slate-900 dark:text-white">{t('createMarket.group')}</p>
                                <p className="text-xs text-slate-500">{t('createMarket.groupDesc')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. What is being bet? */}
                <section>
                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">{t('createMarket.step2Title')}</h3>
                    <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 p-1 overflow-hidden flex mb-4">
                        <button 
                            onClick={() => setForm({...form, stakeType: 'money'})}
                            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${form.stakeType === 'money' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                        >
                            {t('createMarket.money')}
                        </button>
                        <button 
                            onClick={() => setForm({...form, stakeType: 'custom'})}
                            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${form.stakeType === 'custom' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                        >
                            {t('createMarket.other')}
                        </button>
                    </div>

                    <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                        {form.stakeType === 'money' ? (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('createMarket.totalAmount')}</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">S/</span>
                                        <input 
                                            type="number" 
                                            value={form.stakeAmount}
                                            onChange={(e) => setForm({...form, stakeAmount: e.target.value})}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-input-dark-bg border border-slate-300 dark:border-input-dark-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 dark:text-white font-bold text-lg" 
                                            placeholder="100.00"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        {t('createMarket.downPayment')}
                                        <span className="ml-2 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t('createMarket.required')}</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-2">{t('createMarket.downPaymentDesc')}</p>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">S/</span>
                                        <input 
                                            type="number" 
                                            value={form.downPayment}
                                            onChange={(e) => setForm({...form, downPayment: e.target.value})}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-input-dark-bg border border-slate-300 dark:border-input-dark-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 dark:text-white font-bold" 
                                            placeholder="20.00"
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('createMarket.describeBet')}</label>
                                <textarea 
                                    value={form.stakeAmount}
                                    onChange={(e) => setForm({...form, stakeAmount: e.target.value})}
                                    className="w-full p-3 bg-slate-50 dark:bg-input-dark-bg border border-slate-300 dark:border-input-dark-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 dark:text-white"
                                    placeholder={t('createMarket.describeBetPlaceholder')}
                                    rows={3}
                                ></textarea>
                            </div>
                        )}
                    </div>
                </section>

                {/* 3. The Prediction (Gemini) */}
                <section>
                    <div className="flex justify-between items-end mb-4">
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t('createMarket.step3Title')}</h3>
                        <button 
                            onClick={handleAnalyze} 
                            disabled={isAnalyzing || !form.topic.trim()}
                            className="text-primary text-xs font-bold flex items-center gap-1 hover:underline disabled:opacity-50"
                        >
                            <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                            {isAnalyzing ? t('createMarket.analyzing') : t('createMarket.improveAI')}
                        </button>
                    </div>
                    
                    <div className="relative">
                        <textarea 
                            value={form.topic}
                            onChange={(e) => setForm({...form, topic: e.target.value})}
                            className="w-full p-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary text-lg font-bold text-slate-900 dark:text-white shadow-sm resize-none"
                            placeholder={t('createMarket.eventPlaceholder')}
                            rows={3}
                        ></textarea>
                        {analysis && (
                            <div className="mt-2 p-3 bg-primary/10 rounded-lg border border-primary/20 animate-fade-in">
                                <p className="text-xs text-primary font-bold mb-1">{t('createMarket.aiSuggestion')}</p>
                                <p className="text-sm text-slate-700 dark:text-white">{analysis.reasoning}</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* 4. Resolution Rules */}
                <section>
                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">{t('createMarket.step4Title')}</h3>
                    <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 p-6 space-y-6">
                        
                        {/* Deadline */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                {t('createMarket.deadline')}
                            </label>
                            <input 
                                type="datetime-local" 
                                value={form.deadline}
                                onChange={(e) => setForm({...form, deadline: e.target.value})}
                                className="w-full p-3 bg-slate-50 dark:bg-input-dark-bg border border-slate-300 dark:border-input-dark-border rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white"
                            />
                            <p className="text-xs text-slate-500 mt-1">{t('createMarket.deadlineDesc')}</p>
                        </div>

                        {/* Evidence Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                {t('createMarket.proofQuestion')}
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    {id: 'photo', label: t('createMarket.photo'), icon: 'image'},
                                    {id: 'video', label: t('createMarket.video'), icon: 'videocam'},
                                    {id: 'voucher', label: t('createMarket.voucher'), icon: 'receipt_long'},
                                    {id: 'link', label: t('createMarket.webLink'), icon: 'link'},
                                ].map((type) => (
                                    <div 
                                        key={type.id}
                                        onClick={() => setForm({...form, proofType: type.id as any})}
                                        className={`cursor-pointer rounded-lg border p-2 flex flex-col items-center gap-1 transition-all ${form.proofType === type.id ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-500'}`}
                                    >
                                        <span className="material-symbols-outlined">{type.icon}</span>
                                        <span className="text-xs font-bold">{type.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Source Optional */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                {t('createMarket.dataSource')}
                            </label>
                            <input 
                                type="url" 
                                placeholder="https://..."
                                value={form.dataSourceUrl}
                                onChange={(e) => setForm({...form, dataSourceUrl: e.target.value})}
                                className="w-full p-3 bg-slate-50 dark:bg-input-dark-bg border border-slate-300 dark:border-input-dark-border rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white text-sm"
                            />
                        </div>

                    </div>
                </section>

                <div className="pt-4">
                    <button 
                        onClick={handleSubmit}
                        className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all transform active:scale-[0.98]"
                    >
                        {t('createMarket.submit')}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                        {t('createMarket.termsPrefix')} <Link to="/terms" className="text-primary hover:underline">{t('createMarket.terms')}</Link> {t('createMarket.and')} <Link to="/privacy" className="text-primary hover:underline">{t('createMarket.privacy')}</Link>.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default CreateMarketPage;