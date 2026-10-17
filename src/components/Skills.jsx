import React, { useState } from 'react';
import { Code2, Server, Database, Layout, Sparkles, Terminal, Cpu, Cloud, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [activeDomain, setActiveDomain] = useState('all');

  const domains = [
    {
      id: 'languages',
      title: 'Languages & Architecture',
      subtitle: 'Core programming languages, paradigms, and design patterns',
      icon: Code2,
      accent: 'text-amber-400',
      badge: 'Core Foundations',
      borderColor: 'hover:border-amber-500/60',
      skills: [
        { name: 'JavaScript (ES6+)', level: 'Advanced', tag: 'Full-Stack' },
        { name: 'Java (OOP & Patterns)', level: 'Enterprise', tag: 'Backend' },
        { name: 'Python Automation', level: 'Practical', tag: 'AI & Scripting' },
        { name: 'SQL Querying', level: 'Relational', tag: 'Databases' },
        { name: 'C++ Foundations', level: 'Academic', tag: 'Algorithms' },
      ],
    },
    {
      id: 'backend',
      title: 'Server-Side & APIs',
      subtitle: 'Robust backend pipelines, RESTful routing, and authentication',
      icon: Server,
      accent: 'text-cyan-400',
      badge: 'Production APIs',
      borderColor: 'hover:border-cyan-500/60',
      skills: [
        { name: 'Node.js & Express', level: 'Production', tag: 'Microservices' },
        { name: 'RESTful API Design', level: 'Standard', tag: 'Endpoints' },
        { name: 'JWT & Session Auth', level: 'Security', tag: 'Access Control' },
        { name: 'Middleware Architecture', level: 'Modular', tag: 'Validation' },
        { name: 'Flask / Django Basics', level: 'Applied', tag: 'Python APIs' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Modeling',
      subtitle: 'Structured data schemas, indexing, and persistent storage',
      icon: Database,
      accent: 'text-emerald-400',
      badge: 'Data Integrity',
      borderColor: 'hover:border-emerald-500/60',
      skills: [
        { name: 'MySQL Relational', level: 'Architectural', tag: 'ACID' },
        { name: 'MongoDB NoSQL', level: 'Document', tag: 'Collections' },
        { name: 'SQLite Storage', level: 'Embedded', tag: 'Local Data' },
        { name: 'Schema Normalization', level: 'Optimized', tag: 'Performance' },
        { name: 'Indexing & Queries', level: 'Relational', tag: 'Optimization' },
      ],
    },
    {
      id: 'frontend-tools',
      title: 'Frontend & Cloud DevOps',
      subtitle: 'Reactive client interfaces, CI/CD, and AI-accelerated tooling',
      icon: Layout,
      accent: 'text-sky-400',
      badge: 'Cloud & AI',
      borderColor: 'hover:border-sky-500/60',
      skills: [
        { name: 'React 19 & Hooks', level: 'Modern', tag: 'State & UI' },
        { name: 'Tailwind CSS v4', level: 'Responsive', tag: 'Design System' },
        { name: 'Vercel Deployment', level: 'Cloud CI/CD', tag: 'Production' },
        { name: 'Git & GitHub Workflows', level: 'Collaboration', tag: 'Version Control' },
        { name: 'AI & LLM Workflows', level: 'Accelerated', tag: 'Code Intelligence' },
      ],
    },
  ];

  const filteredDomains =
    activeDomain === 'all'
      ? domains
      : domains.filter((d) => d.id === activeDomain);

  return (
    <section id="skills" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Technical Expertise
              </span>
            </div>
            <h2 className="section-title font-['Montserrat',sans-serif]">
              Technical Skills &amp; Stack Architecture
            </h2>
            <p className="text-sm font-mono text-zinc-400 mt-1">
              Engineering capabilities, system design domains, and production toolchain.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800/90 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'languages', label: 'Languages' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'databases', label: 'Databases' },
              { id: 'frontend-tools', label: 'Frontend & Cloud' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDomain(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeDomain === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Domain Modern Capability Matrix (Replacing percentage progress bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {filteredDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-zinc-950 via-zinc-950 to-[#040811] border border-zinc-800/80 ${domain.borderColor} transition-all duration-300 shadow-xl flex flex-col justify-between group`}
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-zinc-900">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 ${domain.accent} shadow-inner`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white font-['Montserrat',sans-serif]">
                          {domain.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-['Inter',sans-serif]">
                          {domain.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium whitespace-nowrap hidden sm:inline-block">
                      {domain.badge}
                    </span>
                  </div>

                  {/* Skills Chip Grid with Capability Indicators */}
                  <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {domain.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span className="text-xs font-semibold text-white font-['Montserrat',sans-serif]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Telemetry */}
                <div className="mt-5 pt-3 border-t border-zinc-900/70 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>DOMAIN // {domain.id.toUpperCase()}</span>
                  <span className="text-cyan-400/80 font-medium">● Verified in Production</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
