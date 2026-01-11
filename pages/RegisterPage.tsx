import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen w-full overflow-hidden">
            <div className="relative hidden lg:flex w-1/2 flex-col justify-between bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent z-10"></div>
                    <div className="h-full w-full bg-cover bg-center opacity-50 mix-blend-overlay" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAskeqNMu4pBebh8D-_Rw_6Z6606rCh38yqckZ0aFrHhE3K2Xq2jj3qX56aQDkzgTNeWwGkoPr1ZvYgXbEdQoekzBRb-XeGsjCQKRmfKbXU_hjaVautpcM2WDdaMpVVLojvROS9i2uMdkbp3ou1l1gYo6-sDOF24gDZiJ49t3EmqiK_u37wsPU85ySgxQE9hAUV_IPflKkq6FnU012hTbsGxzUCSLPGeqBykds1zNmE9_kRyW97qYzCSEO9I1gQvY7ImrXCzqmWrng")' }}></div>
                </div>
                <div className="relative z-20 px-12 py-10 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="flex items-center gap-3 text-white">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined">analytics</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">tapuesto.ai</span>
                    </div>
                </div>
                <div className="relative z-20 px-12 py-16">
                    <div className="max-w-xl space-y-6">
                        <h1 className="text-5xl font-black leading-tight tracking-[-0.02em] text-white">Únete a la Inteligencia Colectiva</h1>
                        <p className="text-lg text-slate-300 font-medium leading-relaxed">Predice resultados, combate la desinformación y gana reputación en el mercado de predicciones líder en Perú.</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full lg:w-1/2 flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
                <div className="flex items-center justify-between px-6 py-6 lg:px-12">
                    <Link to="/" className="flex lg:hidden items-center gap-2 text-slate-900 dark:text-white">
                        <div className="size-6 text-primary"><span className="material-symbols-outlined">analytics</span></div>
                        <span className="text-lg font-bold">tapuesto.ai</span>
                    </Link>
                    <div className="flex w-full justify-end gap-2 text-sm font-medium">
                        <span className="text-slate-500 dark:text-slate-400">¿Ya eres miembro?</span>
                        <Link to="/dashboard" className="text-primary hover:text-primary/80 transition-colors">Iniciar sesión</Link>
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-center px-6 py-4 lg:px-20 xl:px-32">
                    <div className="mx-auto w-full max-w-md space-y-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Crear una cuenta</h2>
                            <p className="text-slate-500 dark:text-slate-400">Ingresa tus datos para empezar a predecir hoy.</p>
                        </div>
                        <form onSubmit={(e) => { e.preventDefault(); navigate('/profile'); }} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-white mb-2" htmlFor="nickname">Apodo</label>
                                <div className="relative rounded-lg shadow-sm">
                                    <input className="block w-full rounded-lg border-0 py-3.5 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-input-dark-bg dark:text-white dark:ring-input-dark-border dark:focus:ring-primary" id="nickname" type="text" placeholder="predictor_unico" />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex w-full justify-center rounded-lg bg-primary px-4 py-3.5 text-sm font-bold leading-6 text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200" type="submit">
                                Crear Cuenta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;