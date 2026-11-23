export default function Hero() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="home" className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 py-24 px-6 text-white overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-purple-400/20 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
                {/* Profile Image */}
                <div className="flex-shrink-0 animate-fadeInUp">
                    <div className="relative">
                        <img
                            src="/profile.jpg"
                            alt="Semagn Legese Mildega"
                            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover object-top border-[6px] border-white/30 shadow-2xl hover:scale-105 transition-transform duration-500 animate-float"
                        />
                        <div className="absolute inset-0 rounded-full animate-pulse-ring" />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 animate-fadeInUp">
                        Semagn Legese Mildega
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold opacity-90 mb-5 animate-fadeInUp-d2">
                        Full Stack Web Developer
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed opacity-95 max-w-xl mb-8 animate-fadeInUp-d3">
                        Hi, I'm Semagn Legese. A passionate Full Stack Web Developer and Software Engineering student who enjoys solving real-world problems and building practical web applications.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeInUp-d4">
                        <button
                            onClick={() => scrollTo('contact')}
                            className="px-7 py-3.5 rounded-lg bg-white text-indigo-600 font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                        >
                            Get In Touch
                        </button>
                        <button
                            onClick={() => scrollTo('portfolio')}
                            className="px-7 py-3.5 rounded-lg border-2 border-white text-white font-bold hover:bg-white hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300"
                        >
                            View My Projects
                        </button>
                        <a
                            href="/cv.html"
                            className="px-7 py-3.5 rounded-lg border-2 border-white/60 text-white font-bold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                        >
                            View CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Wave bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
                <svg viewBox="0 0 1440 60" className="w-full fill-white dark:fill-slate-900 opacity-10">
                    <path d="M0,40 C360,0 1080,80 1440,40 L1440,60 L0,60 Z" />
                </svg>
            </div>
        </section>
    );
}
