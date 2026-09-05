import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-20 bg-[#040407] border-t border-zinc-800/80 py-12 text-zinc-300 font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Clean Row: Brand & Minimalist Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          <div className="text-center md:text-left">
            <a href="#hero" className="inline-block">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-mono">
                Abdul Rafay
              </span>
            </a>
            <p className="text-xs text-zinc-400 mt-1 font-mono">
              CS Student · Aspiring Full-Stack Developer | Backend &amp; AI Workflows
            </p>
          </div>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Clean Row: Social Coordinates, Copyright & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Direct Social & Contact Pills */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AbdulRafaytech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/abdulrafaytech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/923075468990"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 hover:text-white hover:bg-emerald-900 transition-colors text-xs font-mono font-medium"
              title="WhatsApp: +92 307 5468990"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+92 307 5468990</span>
            </a>

            <a
              href="mailto:rafaydev7@gmail.com"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-colors text-xs font-mono font-medium"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>rafaydev7@gmail.com</span>
            </a>
          </div>

          {/* Strict Copyright & Scroll Top */}
          <div className="flex items-center gap-6 text-xs font-mono text-zinc-400">
            <span>© 2026 Abdul Rafay. All Rights Reserved.</span>

            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer text-zinc-300 hover:bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-800 font-medium"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
