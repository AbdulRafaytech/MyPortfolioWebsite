import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Compass, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Work Experience', href: '#experience' },
    { name: 'Key Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Technical Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Get in Touch', href: '#contact' },
  ];

  return (
    <footer className="relative z-20 bg-[#030305] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-300 font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Professional Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/60 text-left">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block group">
              <span className="text-2xl font-black tracking-tight text-white uppercase font-mono group-hover:text-emerald-400 transition-colors">
                Abdul Rafay
              </span>
            </a>
            <p className="text-xs text-zinc-400 font-['Inter',sans-serif] leading-relaxed">
              Computer Science undergraduate at NUML Lahore. Passionate about building robust backend architectures, scalable REST APIs, and AI-accelerated engineering workflows.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Internships &amp; Roles
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-['Inter',sans-serif]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200"
                  >
                    <span className="text-zinc-600 mr-2 font-mono">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-zinc-300">
              <li>
                <a
                  href="mailto:rafaydev7@gmail.com"
                  className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                  <span>rafaydev7@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923075468990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                  <span>+92 307 5468990</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons & Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4 flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/AbdulRafaytech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500 hover:text-cyan-400 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 text-zinc-300 transition-all duration-300 cursor-pointer"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/abdulrafaytech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500 hover:text-indigo-400 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20 text-zinc-300 transition-all duration-300 cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/923075468990"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 text-zinc-300 transition-all duration-300 cursor-pointer"
                title="WhatsApp Message"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="mailto:rafaydev7@gmail.com"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500 hover:text-indigo-400 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20 text-zinc-300 transition-all duration-300 cursor-pointer"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>© 2026 Abdul Rafay. All Rights Reserved.</span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-400 transition-all cursor-pointer font-medium"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
