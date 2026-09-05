import React from 'react';
import { ArrowUp, Mail, Phone, Heart, Sparkles, ExternalLink } from 'lucide-react';
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
    <footer className="bg-[#050508] border-t border-zinc-800 pt-16 pb-12 text-zinc-300 font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Column Rich Footer Content with Bright, High-Contrast Legibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800 text-left">
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white uppercase font-mono">
                Abdul Rafay
              </span>
            </a>
            <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
              Computer Science undergraduate dedicated to building robust server-side systems, scalable database architectures, and intelligent AI-assisted developer workflows.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/AbdulRafaytech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-100 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/abdulrafaytech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-100 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/923075468990"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-emerald-900/60 border border-emerald-700/80 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="mailto:rafaydev7@gmail.com"
                className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-100 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase text-white tracking-wider font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-white hover:underline transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Status (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase text-white tracking-wider font-bold mb-4">
              Direct Coordinates
            </h4>

            <div className="space-y-2.5 text-sm font-mono">
              <div>
                <span className="text-xs text-zinc-400 block font-semibold">Email:</span>
                <a href="mailto:rafaydev7@gmail.com" className="text-zinc-100 hover:text-indigo-300 transition-colors font-medium">
                  rafaydev7@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs text-zinc-400 block font-semibold">Phone / WhatsApp:</span>
                <a href="https://wa.me/923075468990" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
                  +92 307 5468990
                </a>
              </div>

              <div>
                <span className="text-xs text-zinc-400 block font-semibold">Status:</span>
                <span className="text-emerald-400 font-bold">● Available for Internships</span>
              </div>

              <div>
                <span className="text-xs text-zinc-400 block font-semibold">Location:</span>
                <span className="text-zinc-200">Lahore, Pakistan (Remote Worldwide)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with High Contrast */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-zinc-200 font-semibold">
            © 2026 Abdul Rafay. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400 hidden md:inline">
              React 19 · Vite · Tailwind CSS · Vercel
            </span>

            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer text-zinc-300 hover:bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-700 font-bold"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
