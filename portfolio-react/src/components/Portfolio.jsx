const projects = [
    {
        title: 'Food Ordering System',
        img: '/images/food-ordering.png',
        desc: 'A comprehensive food delivery platform featuring menu management, real-time order tracking, and secure payment integration.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        demo: 'projects/food-ordering.html',
        source: 'https://github.com/semagn24/portfolio',
        gradient: 'from-orange-400 to-red-500',
        emoji: '🍔',
    },
    {
        title: 'Hawassa Transport Tracking',
        img: '/images/transport-tracking.png',
        desc: 'Digital Public Transport Tracking & ETA System for Hawassa City. Features live bus locations, a Dynamic Fare Calculator, and a passenger complaint system.',
        tags: ['Node.js', 'Express', 'Mongoose', 'Real-time'],
        demo: 'projects/transport-tracking.html',
        source: 'https://github.com/semagn24/portfolio',
        gradient: 'from-blue-400 to-cyan-500',
        emoji: '🚌',
    },
    {
        title: 'Employee Management System',
        img: '/images/employee-management.png',
        desc: 'A comprehensive system to manage employees, including adding, updating, deleting, and viewing employee records. Built with efficiency and usability in mind.',
        tags: ['React', 'Node.js', 'MongoDB'],
        demo: 'projects/employee-management.html',
        source: 'https://github.com/semagn24/portfolio',
        gradient: 'from-green-400 to-emerald-500',
        emoji: '👥',
    },
    {
        title: 'Online Course Registration',
        img: '/images/course-registration.png',
        desc: 'A web-based university portal. Includes a Transcript & GPA Calculator for students, and an internal Admin dashboard for dynamically authoring new courses.',
        tags: ['PHP', 'MySQL', 'JavaScript'],
        demo: 'projects/course-registration.html',
        source: 'https://github.com/semagn24/portfolio',
        gradient: 'from-violet-400 to-purple-500',
        emoji: '🎓',
    },
    {
        title: 'Movie Streaming Platform',
        img: '/images/movie-streaming.png',
        desc: 'A fully-featured cinematic platform. Users can browse titles, manage watchlists, and subscribe to a Premium Membership to unlock exclusive videos.',
        tags: ['React', 'API', 'CSS3'],
        demo: 'projects/movie-streaming.html',
        source: 'https://github.com/semagn24/portfolio',
        gradient: 'from-pink-400 to-rose-500',
        emoji: '🎬',
    },
];

export default function Portfolio({ darkMode }) {
    return (
        <section id="portfolio" className={`section-fade py-24 px-6 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-500 mb-2">Each Project is a Unique Piece of Development</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(p => (
                        <div
                            key={p.title}
                            className={`rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}
                        >
                            {/* Image */}
                            <div className="h-52 overflow-hidden relative">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    onError={e => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className={`hidden absolute inset-0 bg-gradient-to-br ${p.gradient} items-center justify-center text-7xl`}>
                                    {p.emoji}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{p.title}</h3>
                                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{p.desc}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {p.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-indigo-500 text-white rounded-full text-xs font-semibold">{tag}</span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                                    >
                                        🚀 Live Demo
                                    </a>
                                    <a
                                        href={p.source}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex-1 text-center py-2 rounded-full border-2 border-indigo-500 text-indigo-500 text-sm font-bold hover:bg-indigo-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300`}
                                    >
                                        🔗 Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
