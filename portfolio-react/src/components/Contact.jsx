import { useState } from 'react';

const socials = [
    { label: 'Email', href: 'mailto:semagnlegese@gmail.com' },
    { label: 'Facebook', href: 'https://www.facebook.com/search/top?q=semagn%20legese' },
    { label: 'Instagram', href: 'https://instagram.com/semu.4423' },
    { label: 'Telegram', href: 'https://t.me/Semu_je' },
    { label: 'TikTok', href: 'https://tiktok.com/@semagn_22' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/semagn' },
    { label: 'GitHub', href: 'https://github.com/semagn24' },
    { label: 'YouTube', href: 'https://youtube.com/@semagnlegesemldaga376' },
];

const contactInfo = [
    { icon: '📍', title: 'Location', value: 'Sidama Region, Ethiopia' },
    { icon: '📧', title: 'Email', value: 'semagnlegese@gmail.com' },
    { icon: '💼', title: 'Availability', value: 'Open to opportunities' },
];

export default function Contact({ darkMode }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Try backend API first
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                throw new Error('API failed');
            }
        } catch {
            // Fallback: open email client
            const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
            const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
            window.location.href = `mailto:semagnlegese@gmail.com?subject=${subject}&body=${body}`;
            setStatus('idle');
            setForm({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id="contact" className={`section-fade py-24 px-6 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-500 mb-2">Feel Free to Contact Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 rounded-full" />
                <p className={`text-center mb-12 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>If any assistance is needed, I'm here to help</p>

                {/* Info cards */}
                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                    {contactInfo.map(c => (
                        <div key={c.title} className={`rounded-2xl p-6 text-center shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
                            <div className="text-4xl mb-3">{c.icon}</div>
                            <h4 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{c.title}</h4>
                            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{c.value}</p>
                        </div>
                    ))}
                </div>

                {/* Social links */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {socials.map(s => (
                        <a
                            key={s.label}
                            href={s.href}
                            target={s.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            className={`px-5 py-2.5 rounded-full font-semibold text-sm border-2 border-transparent hover:border-indigo-500 hover:text-indigo-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-900 text-slate-200' : 'bg-gray-50 text-gray-700 shadow-sm'}`}
                        >
                            {s.label}
                        </a>
                    ))}
                </div>

                {/* Contact form */}
                <div className={`max-w-2xl mx-auto rounded-2xl p-8 shadow-xl ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="text-6xl mb-4">✅</div>
                            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Message Sent!</h3>
                            <p className={darkMode ? 'text-slate-400' : 'text-gray-500'}>Thank you for reaching out. I'll get back to you soon.</p>
                            <button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2.5 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition-colors">Send Another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                {[{ id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                                { id: 'email', label: 'Email', type: 'email', placeholder: 'Your Email' }].map(f => (
                                    <div key={f.id}>
                                        <label htmlFor={f.id} className={`block font-semibold mb-1.5 text-sm ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>{f.label}</label>
                                        <input
                                            id={f.id} name={f.id} type={f.type} required placeholder={f.placeholder}
                                            value={form[f.id]} onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 text-sm font-medium outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${darkMode ? 'border-slate-700 bg-slate-800 text-white placeholder-slate-500' : 'border-gray-200 bg-white text-gray-800 placeholder-gray-400'}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <label htmlFor="message" className={`block font-semibold mb-1.5 text-sm ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>Message</label>
                                <textarea
                                    id="message" name="message" rows={5} required placeholder="Your Message"
                                    value={form.message} onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 text-sm font-medium outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-none ${darkMode ? 'border-slate-700 bg-slate-800 text-white placeholder-slate-500' : 'border-gray-200 bg-white text-gray-800 placeholder-gray-400'}`}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-base hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? '⏳ Sending...' : '✉️ Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
