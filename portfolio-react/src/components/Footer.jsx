export default function Footer({ darkMode }) {
    return (
        <footer className={`${darkMode ? 'bg-slate-950' : 'bg-slate-900'} text-white text-center py-7 px-6`}>
            <p className="opacity-80 text-sm">
                &copy; {new Date().getFullYear()} Semagn Legese Mildega | All Rights Reserved
            </p>
            <p className="opacity-40 text-xs mt-1">Built with React.js · Tailwind CSS · Node.js</p>
        </footer>
    );
}
