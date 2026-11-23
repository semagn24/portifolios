const services = [
    { icon: '⚛️', title: 'React Development', desc: 'Building dynamic, responsive user interfaces with React.js and modern JavaScript.' },
    { icon: '🌐', title: 'Full Stack Development', desc: 'Complete web solutions from database design to frontend implementation.' },
    { icon: '🗄️', title: 'Database Design', desc: 'Efficient database architecture with SQL and MongoDB.' },
    { icon: '📱', title: 'Responsive Design', desc: 'Mobile-first, responsive websites that work on all devices.' },
    { icon: '🔄', title: 'API Development', desc: 'RESTful APIs and backend services with Node.js and Express.' },
    { icon: '🚀', title: 'Performance', desc: 'Optimized, fast-loading web applications with best practices.' },
];

export default function Services({ darkMode }) {
    return (
        <section id="services" className={`section-fade py-24 px-6 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-500 mb-2">I Offer Full-Cycle Web Development Services</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 rounded-full" />
                <p className={`text-center mb-12 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    Delivering modern web solutions with cutting-edge technologies and best practices
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(s => (
                        <div
                            key={s.title}
                            className={`rounded-2xl p-7 border-2 border-transparent hover:border-indigo-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}
                        >
                            <div className="text-5xl mb-4">{s.icon}</div>
                            <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{s.title}</h3>
                            <p className={`leading-relaxed text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
