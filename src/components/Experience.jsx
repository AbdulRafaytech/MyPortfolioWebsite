import React from 'react';
import { Calendar, MapPin, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'FlyRank AI',
      role: 'Backend AI Engineering Intern',
      period: 'Aug 2026 – Sep 2026',
      location: 'Remote',
      tag: 'Backend & AI Systems',
      logo: '/logo-flyrank.png',
      logoAlt: 'FlyRank AI Logo',
      logoBg: 'bg-[#090b0e] border border-zinc-800 p-1',
      tagStyle: 'text-cyan-300 bg-cyan-950/70 border-cyan-800/80',
      accentGlow: 'hover:border-cyan-500/60 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.25)]',
      accentBar: 'bg-gradient-to-r from-cyan-500 via-sky-400 to-transparent',
      bulletColor: 'text-cyan-400',
      summary:
        'Engineered high-performance backend pipelines and automated AI development workflows. Integrated Python scripts, optimized server-side logic, and supported real-time system APIs.',
      contributions: [
        'Automated backend pipelines with Python to accelerate model deployment turnaround.',
        'Engineered server-side workflows handling complex data processing tasks efficiently.',
        'Collaborated on system architecture, code reviews, and structured REST API endpoints.',
      ],
      skills: ['Python Automation', 'AI Workflows', 'Backend Systems', 'API Integration', 'Data Processing'],
    },
    {
      company: 'InternGrow',
      role: 'Frontend Developer Intern',
      period: 'Aug 2026 – Oct 2026',
      location: 'Remote',
      tag: 'SaaS Client Architecture',
      logo: '/logo-interngrow.png',
      logoAlt: 'InternGrow Logo',
      logoBg: 'bg-white border border-zinc-200 p-1.5 shadow-md',
      tagStyle: 'text-emerald-300 bg-emerald-950/70 border-emerald-800/80',
      accentGlow: 'hover:border-emerald-500/60 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.25)]',
      accentBar: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent',
      bulletColor: 'text-emerald-400',
      summary:
        'Developed production-grade user interfaces for SaaS web applications using React. Implemented complete authentication systems, state management, and real-time dashboard analytics.',
      contributions: [
        'Architected RTech SaaS Authentication system with OTP verification and protected routing.',
        'Built dynamic RTech HR management dashboard with interactive analytics and metrics.',
        'Ensured seamless cross-browser responsiveness and deployed live builds on Vercel.',
      ],
      skills: ['React 19', 'JavaScript (ES6+)', 'SaaS UI Architecture', 'State Management', 'Vercel Deployment'],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Industry Experience
            </span>
          </div>
          <h2 className="section-title font-['Montserrat',sans-serif]">
            Work Experience &amp; Internships
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Production contributions, real-world deliveries, and software engineering internships.
          </p>
        </div>

        {/* Compact, Modern, Animated 2-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-zinc-950/90 border border-zinc-850 ${exp.accentGlow} transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group p-5 sm:p-6 shadow-xl`}
            >
              {/* Top Animated Gradient Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] ${exp.accentBar} opacity-70 group-hover:opacity-100 transition-opacity`}
              ></div>

              <div>
                {/* Header Row: Company Logo, Role & Period */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-zinc-900">
                  <div className="flex items-center gap-3.5">
                    {/* Brand Logo Container */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden ${exp.logoBg}`}
                    >
                      <img
                        src={exp.logo}
                        alt={exp.logoAlt}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-['Montserrat',sans-serif]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-semibold text-zinc-300 font-mono">
                          {exp.company}
                        </span>
                        <span className="text-zinc-600 text-xs">•</span>
                        <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-zinc-500" /> {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${exp.tagStyle} font-semibold whitespace-nowrap hidden sm:inline-block`}
                  >
                    {exp.tag}
                  </span>
                </div>

                {/* Period Badge */}
                <div className="py-2.5 flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-zinc-300 font-medium">{exp.period}</span>
                </div>

                {/* Concise Summary */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-['Inter',sans-serif]">
                  {exp.summary}
                </p>

                {/* Modern Streamlined Contributions */}
                <div className="mt-4 space-y-2">
                  {exp.contributions.map((item, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-2.5 text-xs text-zinc-300/90 leading-relaxed font-['Inter',sans-serif]"
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${exp.bulletColor} flex-shrink-0 mt-0.5`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact Tech Stack Pills */}
              <div className="mt-5 pt-3.5 border-t border-zinc-900 flex flex-wrap gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
