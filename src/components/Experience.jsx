import React from 'react';
import { Calendar, MapPin, Cpu, Rocket, Sparkles, Check, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'FlyRank AI',
      role: 'Backend AI Engineering Intern',
      period: 'Aug 2026 – Sep 2026',
      location: 'Remote',
      tag: 'Backend & AI Systems',
      icon: Cpu,
      iconBg: 'bg-cyan-950/70 text-cyan-400 border-cyan-800/70',
      glowColor: 'hover:border-cyan-500/80 hover:shadow-cyan-500/10',
      borderColor: 'border-cyan-900/40',
      bgGradient: 'bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-[#050b14]',
      tagStyle: 'text-cyan-300 bg-cyan-950/80 border-cyan-800/80',
      topLine: 'bg-gradient-to-r from-cyan-500 via-sky-400 to-transparent',
      description:
        'Engineered backend systems and automated AI development workflows. Integrated Python automation scripts, implemented server-side logic, and supported real-time system performance and API optimization.',
      highlights: [
        'Automated backend pipelines with Python scripts to accelerate development turnaround.',
        'Engineered robust server-side workflows handling complex data processing tasks.',
        'Collaborated on system architecture, code reviews, and structured API endpoints.',
      ],
      skills: ['Python Automation', 'AI Workflows', 'Backend Systems', 'API Integration', 'Data Processing'],
    },
    {
      company: 'InternGrow',
      role: 'Frontend Developer Intern',
      period: 'Aug 2026 – Oct 2026',
      location: 'Remote',
      tag: 'SaaS Client Architecture',
      icon: Rocket,
      iconBg: 'bg-emerald-950/70 text-emerald-400 border-emerald-800/70',
      glowColor: 'hover:border-emerald-500/80 hover:shadow-emerald-500/10',
      borderColor: 'border-emerald-900/40',
      bgGradient: 'bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-[#040e09]',
      tagStyle: 'text-emerald-300 bg-emerald-950/80 border-emerald-800/80',
      topLine: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent',
      description:
        'Developed production-grade user interfaces for SaaS web applications using React. Implemented complete authentication systems, state management, responsive UI components, and real-time dashboard analytics.',
      highlights: [
        'Architected RTech SaaS Authentication system with OTP verification and protected routing.',
        'Built dynamic RTech HR management dashboard with interactive analytics and metrics.',
        'Ensured seamless cross-browser responsiveness and deployed live builds on Vercel.',
      ],
      skills: ['React 19', 'JavaScript (ES6+)', 'SaaS UI Architecture', 'State Management', 'Vercel Deployment'],
    },
  ];

  return (
    <section id="experience" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Industry Experience
            </span>
          </div>
          <h2 className="section-title font-['Montserrat',sans-serif]">
            Work Experience &amp; Internships
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Hands-on software engineering internships, production contributions, and system deliveries.
          </p>
        </div>

        {/* Executive 2-Card Grid Layout (No generic dotted bullets) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl ${exp.bgGradient} border ${exp.borderColor} ${exp.glowColor} transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group p-6 sm:p-8`}
              >
                {/* Top Glowing Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${exp.topLine} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-zinc-900/90">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-xl border ${exp.iconBg} shadow-inner flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white font-['Montserrat',sans-serif]">
                            {exp.role}
                          </h3>
                        </div>
                        <span className="text-sm font-semibold text-zinc-300 font-['Inter',sans-serif] block mt-0.5">
                          @ {exp.company}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-full border ${exp.tagStyle} font-semibold whitespace-nowrap self-start`}>
                      {exp.tag}
                    </span>
                  </div>

                  {/* Period & Location Telemetry Bar */}
                  <div className="py-3 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 border-b border-zinc-900/60">
                    <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" /> {exp.location}
                    </span>
                  </div>

                  {/* Narrative Summary */}
                  <p className="text-sm text-zinc-300 leading-relaxed mt-4 font-['Inter',sans-serif]">
                    {exp.description}
                  </p>

                  {/* Modern Deliverable Highlight Cards (Replacing generic dotted bullets) */}
                  <div className="mt-5 space-y-2.5">
                    {exp.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 group-hover:border-zinc-700/80 transition-colors flex items-start gap-2.5"
                      >
                        <div className="p-1 rounded-md bg-zinc-800 text-cyan-400 flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <p className="text-xs text-zinc-300 font-['Inter',sans-serif] leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Skills Chips */}
                <div className="mt-6 pt-4 border-t border-zinc-900/80 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800/90 hover:border-zinc-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
