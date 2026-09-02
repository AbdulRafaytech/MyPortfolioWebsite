import React, { useState, useEffect } from 'react';
import BackgroundFX from './components/BackgroundFX';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CertificateModal from './components/CertificateModal';
import Skills from './components/Skills';
import Education from './components/Education';
import InteractiveTerminal from './components/InteractiveTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Background Canvas */}
      <BackgroundFX />

      {/* Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Certifications onSelectCertificate={(cert) => setSelectedCert(cert)} />
        <Skills />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal for Certificate High-Res Inspection */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* Interactive Cyber CLI Terminal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-500/50 text-cyan-300 px-4 py-2.5 rounded-xl font-mono text-xs shadow-2xl shadow-cyan-950/60 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
