'use client';

import { useState } from 'react';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import PreviewModal from '../components/PreviewModal';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    demoUrl: '',
    title: '',
  });

  const handleOpenPreview = (demoUrl, title) => {
    setModalState({
      isOpen: true,
      demoUrl,
      title,
    });
  };

  const handleClosePreview = () => {
    setModalState({
      isOpen: false,
      demoUrl: '',
      title: '',
    });
  };

  return (
    <>
      <ScrollProgress />

      {/* Ambient Depth Lights */}
      <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-2" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-3" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects onOpenPreview={handleOpenPreview} />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <PreviewModal
        isOpen={modalState.isOpen}
        onClose={handleClosePreview}
        demoUrl={modalState.demoUrl}
        title={modalState.title}
      />
    </>
  );
}
