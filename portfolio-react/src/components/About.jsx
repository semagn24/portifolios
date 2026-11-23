const features = [
    { icon: '🎯', title: 'R & D', sub: 'Research & Development' },
    { icon: '🎨', title: 'Design', sub: 'UI/UX Design' },
    { icon: '💻', title: 'Development', sub: 'Full-Stack Dev' },
    { icon: '✅', title: 'Quality', sub: 'Testing & QA' },
    { icon: '🔧', title: 'Maintain', sub: 'Support & Updates' },
];

export default function About({ darkMode }) {
    return (
        <section id="about" className={`section-fade py-24 px-6 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-gray-50 text-gray-800'}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-500 mb-2">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Full Stack Web Developer</h3>
                        <p className={`leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                            I am Semagn Legese Mildega, from Ethiopia Sidama Region. I am a university student studying Software Engineering and a passionate Full Stack Web Developer.
                        </p>
                        <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                            I'm incredibly committed to my work and focused on modern web technologies that bring real value to users. I have experience with React, Node.js, and full-stack development, enabling me to build complete web solutions from database to user interface.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {features.map(f => (
                            <div
                                key={f.title}
                                className={`rounded-2xl p-5 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}
                            >
                                <span className="text-4xl block mb-2">{f.icon}</span>
                                <h4 className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{f.title}</h4>
                                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{f.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
