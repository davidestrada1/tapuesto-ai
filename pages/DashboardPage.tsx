import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../components/LanguageToggle';

const DashboardPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233c48] bg-[#111c22]/95 backdrop-blur-md px-10 py-3">
                <div className="flex items-center gap-8 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="flex items-center gap-4 text-white">
                        <div className="size-6 text-primary"><span className="material-symbols-outlined">analytics</span></div>
                        <h2 className="text-white text-lg font-bold">tapuesto.ai</h2>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-8 items-center">
                    <div className="hidden lg:flex items-center gap-9">
                        <Link to="/dashboard" className="text-white hover:text-primary transition-colors text-sm font-medium">{t('dashboard.panel')}</Link>
                        <Link to="/leaderboard" className="text-[#92b7c9] hover:text-white transition-colors text-sm font-medium">{t('dashboard.leaders')}</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <LanguageToggle />
                        <div className="hidden md:flex flex-col items-end mr-2">
                            <span className="text-xs text-[#92b7c9]">{t('dashboard.balance')}</span>
                            <span className="text-sm font-bold text-white">S/ 1,240.50</span>
                        </div>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#233c48] cursor-pointer" onClick={() => navigate('/profile')} style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBId-L4vJ-o2ldU5VGdA9-u3LX5Y30qZUoMAx6ZIULjyGwJQ4V_TA4BCBRJCsX80SxQt_geUydz9KgEJVzHYRY0oaWzfVRC6S5g9qK1z7TegkbIoAZh-yf7kWukLConhgDLFjljVvjswOC-FzZ6iaopiSbp4fldcsCkyNcJOW9RM2OgHgpIxKrKUoxp_wCYYgNrN_lvUwrP4jJHZAlDgDYCFlvWpsLWMFumvm68pyERNgDFGqwjrdLbjSJek48MAWJEzWNzJAWh1Ws")' }}></div>
                    </div>
                </div>
            </header>
            <div className="flex-1 px-4 py-8 md:px-10 lg:px-20 xl:px-40 flex justify-center">
                <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 gap-8">
                    <h1 className="text-white text-[28px] md:text-[32px] font-bold leading-tight text-left">{t('dashboard.welcome')}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col gap-2 rounded-lg p-6 bg-[#233c48] border border-white/5 shadow-lg">
                            <div className="flex justify-between items-start">
                                <p className="text-[#92b7c9] text-sm font-medium">{t('dashboard.totalBalance')}</p>
                                <span className="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
                            </div>
                            <p className="text-white text-2xl font-bold">S/ 1,240.50</p>
                            <p className="text-[#0bda57] text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">trending_up</span> +2.5%</p>
                        </div>
                        <div className="flex flex-col gap-2 rounded-lg p-6 bg-[#233c48] border border-white/5 shadow-lg">
                            <div className="flex justify-between items-start">
                                <p className="text-[#92b7c9] text-sm font-medium">{t('dashboard.hitRate')}</p>
                                <span className="material-symbols-outlined text-primary text-[20px]">trophy</span>
                            </div>
                            <p className="text-white text-2xl font-bold">68%</p>
                            <p className="text-[#0bda57] text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">arrow_upward</span> +1.2%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-white text-[22px] font-bold">{t('dashboard.myActiveBets')}</h2>
                            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg text-sm" onClick={() => navigate('/create')}>
                                {t('dashboard.newPrediction')}
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-lg border border-[#2d4a58] bg-[#233c48] shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-white">
                                    <thead className="bg-[#1e343f] text-[#92b7c9] text-xs uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">{t('dashboard.market')}</th>
                                            <th className="px-6 py-4 font-semibold text-center">{t('dashboard.result')}</th>
                                            <th className="px-6 py-4 font-semibold text-right">{t('dashboard.wagered')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#2d4a58]">
                                        <tr className="hover:bg-[#2d4a58]/50 transition-colors">
                                            <td className="px-6 py-4"><p className="font-bold text-white">{t('dashboard.gdpGrowth')}</p></td>
                                            <td className="px-6 py-4 text-center"><span className="inline-flex items-center rounded-full bg-green-400/10 px-2.5 py-0.5 text-xs font-medium text-green-400">{t('marketCard.yes')}</span></td>
                                            <td className="px-6 py-4 text-right font-medium">S/ 50.00</td>
                                        </tr>
                                        <tr className="hover:bg-[#2d4a58]/50 transition-colors">
                                            <td className="px-6 py-4"><p className="font-bold text-white">{t('dashboard.winnerPeruBrazil')}</p></td>
                                            <td className="px-6 py-4 text-center"><span className="inline-flex items-center rounded-full bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-400">{t('dashboard.draw')}</span></td>
                                            <td className="px-6 py-4 text-right font-medium">S/ 200.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-4">
                        <h3 className="text-white text-[18px] font-bold">{t('dashboard.recentActivity')}</h3>
                        <div className="rounded-xl bg-[#233c48] p-4 border border-white/5">
                            <div className="relative pl-4 border-l border-[#2d4a58] space-y-6">
                                <div className="relative">
                                    <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-[#233c48]"></div>
                                    <p className="text-sm text-[#92b7c9]"><span className="font-bold text-white">{t('dashboard.betResolved')}</span> {t('dashboard.missPeruEnded')}</p>
                                    <p className="text-xs text-success font-bold mt-1">+ S/ 120.50 {t('dashboard.profit')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;