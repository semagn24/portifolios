const testimonials = [
    {
        quote: '"Semagn delivered an outstanding employee management system. His attention to detail and technical expertise made the entire process smooth and efficient."',
        author: 'Project Manager',
        company: 'Tech Solutions Ltd',
    },
    {
        quote: '"The quality of work is exceptional. Very responsive to feedback and delivers exactly what is needed. Highly recommended for web development projects!"',
        author: 'Education Coordinator',
        company: 'Online Learning Institute',
    },
    {
        quote: '"Working with Semagn was a great experience. Professional, skilled, and committed to delivering high-quality solutions on time."',
        author: 'Business Owner',
        company: 'Digital Media Agency',
    },
];

export default function Testimonials({ darkMode }) {
    return (
        <section id="testimonials" className={`section-fade py-24 px-6 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-500 mb-2">Client Testimonials</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl p-7 border-l-4 border-indigo-500 shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}
                        >
                            <div className="text-4xl mb-4 opacity-70">💬</div>
                            <p className={`italic leading-relaxed mb-5 text-sm ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>{t.quote}</p>
                            <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.author}</h4>
                            <p className="text-indigo-500 text-sm font-medium">{t.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
