import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, MapPin, Clock, Code2, Terminal } from 'lucide-react';
import { Github } from './Icons';

export default function Hero({ onOpenTerminal }) {
  const [time, setTime] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Typewriter Animation
  const typePhrases = [
    "CS Student · Aspiring Full-Stack Developer",
    "Backend & AI Assisted Workflows",
    "Java OOP · Node.js · Python · React",
    "Scalable APIs & Modern Database Systems",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typePhrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        if (typedText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typePhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex]);

  // Live Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll-Driven Parallax Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Scroll-driven scale factor (subtle zoom out as user scrolls down)
  const scrollScale = Math.max(0.92, 1 - scrollY * 0.0003);
  const scrollRotate = Math.min(10, scrollY * 0.015);

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Bold Text & Information */}
          <div className="w-full lg:w-3/5 text-left flex flex-col items-start animate-fade-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono font-medium text-zinc-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="uppercase tracking-wider">Available for Internships &amp; Projects</span>
            </div>

            {/* Main Headline with Typewriter Animation */}
            <div className="min-h-[110px] sm:min-h-[130px] flex items-center">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] font-['Montserrat',sans-serif]">
                {typedText}
                <span className="typewriter-cursor"></span>
              </h1>
            </div>

            {/* Redesigned Attractive Heading (No AI Sparkles) */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5 font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Engineer
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="text-white">Abdul Rafay</span>
                <span className="text-zinc-600 font-normal">/</span>
                <span className="text-zinc-300 text-base sm:text-lg font-medium">Computer Science Undergraduate</span>
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-['Inter',sans-serif]">
              Computer Science undergraduate building modern server-side APIs, database systems, and intelligent development workflows with seamless deployment on Vercel and cloud platforms.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/AbdulRafaytech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-cyan-500/10 cursor-pointer font-['Inter',sans-serif]"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold text-sm transition-all cursor-pointer font-['Inter',sans-serif]"
              >
                <span>Connect</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-sm transition-all cursor-pointer font-['Inter',sans-serif]"
              >
                <span>Explore Work</span>
              </a>
            </div>

            {/* Sharp Geometric Telemetry HUD */}
            <div className="mt-10 pt-6 border-t border-zinc-900/90 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 shadow-md">
                <span className="text-[11px] font-mono uppercase text-zinc-400 block tracking-wider font-semibold">STATUS</span>
                <span className="text-xs font-bold text-emerald-400 font-mono mt-1 block">● Open to Work</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 shadow-md">
                <span className="text-[11px] font-mono uppercase text-zinc-400 block tracking-wider font-semibold">LOCAL TIME</span>
                <span className="text-xs font-bold text-zinc-100 font-mono mt-1 block">{time || '12:45 AM PKT'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 shadow-md">
                <span className="text-[11px] font-mono uppercase text-zinc-400 block tracking-wider font-semibold">LOCATION</span>
                <span className="text-xs font-bold text-zinc-100 font-mono mt-1 block truncate">Lahore, PK (Remote)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 shadow-md">
                <span className="text-[11px] font-mono uppercase text-zinc-400 block tracking-wider font-semibold">PRIMARY FOCUS</span>
                <span className="text-xs font-bold text-cyan-300 font-mono mt-1 block truncate">Backend &amp; AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simple, Attractive & Modern Studio Portrait */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end animate-fade-up">
            <div
              className="relative group cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: '1000px' }}
            >
              {/* Subtle Ambient Backglow */}
              <div className="absolute -inset-2 rounded-3xl bg-zinc-800/40 blur-xl pointer-events-none group-hover:bg-zinc-700/50 transition-all duration-500"></div>

              {/* Clean, Simple & Modern Studio Frame (No tacky circles or spinning gimmicks) */}
              <div
                className="relative rounded-3xl p-2 bg-zinc-950/90 border border-zinc-800/90 group-hover:border-zinc-700 shadow-2xl transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${scrollScale}) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
                }}
              >
                <div className="w-60 h-68 sm:w-68 sm:h-76 md:w-72 md:h-80 lg:w-76 lg:h-84 rounded-2xl overflow-hidden bg-black relative">
                  <img
                    src="/profile-side.jpg"
                    alt="Abdul Rafay"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                    loading="eager"
                  />
                  {/* Subtle inner shadow for studio depth */}
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none"></div>
                </div>
              </div>

              {/* Clean Minimalist Status Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-zinc-950/95 border border-zinc-800 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-mono text-zinc-300 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="tracking-wide">CS Undergrad · Active Coder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
