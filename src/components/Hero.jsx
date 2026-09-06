import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, MapPin, Clock, Code2, Sparkles } from 'lucide-react';
import { Github } from './Icons';

export default function Hero({ onOpenTerminal }) {
  const [time, setTime] = useState('');
  const [activePhoto, setActivePhoto] = useState('front'); // 'front' | 'side'
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  // Smooth Auto-Angle Transition (Every 5 seconds)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev === 'front' ? 'side' : 'front'));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const currentPhotoSrc = isHovered 
    ? (activePhoto === 'front' ? '/profile-side.jpg' : '/profile-front.jpg')
    : (activePhoto === 'front' ? '/profile-front.jpg' : '/profile-side.jpg');

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Bold Text & Information */}
          <div className="w-full lg:w-3/5 text-left flex flex-col items-start">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono font-medium text-zinc-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="uppercase tracking-wider">Available for Internships &amp; Projects</span>
            </div>

            {/* Main Headline - Sharp Geometric Font */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.08] font-['Montserrat',sans-serif]">
              CS Student · Aspiring Full-Stack Developer
            </h1>

            {/* Subtitle - Exact: Backend & AI Assisted Workflows */}
            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-indigo-300 font-mono tracking-tight">
              Backend &amp; AI Assisted Workflows
            </h2>

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
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-white/10 cursor-pointer font-['Inter',sans-serif]"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold text-sm transition-all cursor-pointer font-['Inter',sans-serif]"
              >
                <span>Connect</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
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
                <span className="text-xs font-bold text-indigo-300 font-mono mt-1 block truncate">Backend &amp; AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Studio Portrait with Smooth Dual-Angle Transition */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end">
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActivePhoto((prev) => (prev === 'front' ? 'side' : 'front'))}
              style={{
                perspective: '1000px',
              }}
              title="Click or hover to switch studio perspective"
            >
              {/* Soft Ambient Glowing Aura */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-cyan-400/40 opacity-70 blur-2xl group-hover:opacity-100 transition duration-700 animate-pulse"></div>

              {/* 3D Tilted Outer Rotating Gradient Ring */}
              <div
                className="relative p-[3px] rounded-full bg-gradient-to-tr from-zinc-700 via-indigo-500/70 to-zinc-600 shadow-2xl transition-transform duration-300 ease-out"
                style={{
                  transform: `rotateY(${mousePos.x * 16}deg) rotateX(${-mousePos.y * 16}deg)`,
                }}
              >
                {/* Clean Circular Frame with Studio Photo */}
                <div className="w-60 h-60 sm:w-68 sm:h-68 md:w-76 md:h-76 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-zinc-950 shadow-2xl relative">
                  <img
                    src={currentPhotoSrc}
                    alt="Abdul Rafay"
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Tech Micro-Badges */}
              <div className="absolute -bottom-2 -left-2 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-mono text-zinc-200 pointer-events-none">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Backend // AI</span>
              </div>

              <div className="absolute -top-1 -right-1 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-mono text-emerald-400 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active Coder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
