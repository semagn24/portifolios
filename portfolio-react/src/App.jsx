import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setDarkMode(d => {
      const next = !d;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.section-fade').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
