import { useState, useEffect } from 'react';

const navItems = ['home', 'about', 'services', 'skills', 'portfolio', 'testimonials', 'contact'];

export default function Navbar({ darkMode, toggleDarkMode }) {
    const [active, setActive] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
            let current = 'home';
            navItems.forEach(id => {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - el.clientHeight / 3) current = id;
            });
            setActive(current);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false);
    };

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''} ${darkMode ? 'bg-slate-950' : 'bg-slate-900'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
                    SL
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map(item => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className={`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-300 relative group text-sm ${active === item ? 'text-indigo-400' : 'text-white hover:text-indigo-300'
                                }`}
                        >
                            {item}
                            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-indigo-400 rounded transition-all duration-300 ${active === item ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`} />
                        </button>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleDarkMode}
                        className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center text-lg transition-all duration-300 hover:bg-indigo-500 hover:border-indigo-500 hover:rotate-12"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                    <button
                        className="md:hidden text-white p-1"
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle Menu"
                    >
                        <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="2" fill="none">
                            {menuOpen
                                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className={`md:hidden absolute w-full border-t ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-700'} py-3 px-6 flex flex-col gap-1 animate-fadeInDown z-40`}>
                    {navItems.map(item => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className={`text-left px-4 py-3 rounded-lg font-medium capitalize transition-all duration-300 ${active === item ? 'text-indigo-400 bg-indigo-500/10' : 'text-white hover:bg-white/5'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
