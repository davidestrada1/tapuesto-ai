import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../components/LanguageToggle';

const PrivacyPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen p-8 md:p-12 font-display text-slate-900 dark:text-white">
            <div className="flex justify-between items-center mb-8">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-primary font-bold">
                    <span className="material-symbols-outlined">arrow_back</span> {t('privacy.back')}
                </button>
                <LanguageToggle />
            </div>
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
                <h1 className="text-4xl font-black mb-8">{t('privacy.title')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{t('privacy.lastUpdated')}</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.section1Title')}</h2>
                <p>{t('privacy.section1Desc')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.section2Title')}</h2>
                <p>{t('privacy.section2Desc')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.section3Title')}</h2>
                <p>{t('privacy.section3Desc')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.section4Title')}</h2>
                <p>{t('privacy.section4Desc')}</p>
            </div>
        </div>
    );
};

export default PrivacyPage;