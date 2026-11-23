const skills = [
    'HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js',
    'Python', 'Java', 'PHP', 'MongoDB', 'SQL', 'Git & GitHub',
    'Express.js', 'Tailwind CSS', 'REST APIs', 'MySQL',
];

export default function Skills({ darkMode }) {
    return (
        <section id="skills" className={`section-fade py-24 px-6 ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-500 mb-2">Technical Skills</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, i) => (
                        <span
                            key={skill}
                            style={{ animationDelay: `${i * 0.05}s` }}
                            className={`px-6 py-3 rounded-full font-semibold border-2 border-transparent hover:border-indigo-500 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 animate-fadeInUp cursor-default text-sm ${darkMode ? 'bg-slate-800 text-slate-100' : 'bg-white text-gray-700 shadow-sm'
                                }`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
