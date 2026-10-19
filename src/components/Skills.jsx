import React, { useState } from 'react';
import { Code2, Server, Database, Layout, Terminal, Cpu, Layers } from 'lucide-react';

export default function Skills() {
  const [activeDomain, setActiveDomain] = useState('all');

  const domains = [
    {
      id: 'languages',
      title: 'Languages & Core Systems',
      subtitle: 'Core programming languages, paradigms, and design patterns',
      icon: Code2,
      accentText: 'text-amber-400',
      accentBg: 'bg-amber-950/60 border-amber-800/70',
      accentBorder: 'hover:border-amber-500/60',
      accentTop: 'bg-gradient-to-r from-amber-500 via-orange-400 to-transparent',
      dotColor: 'bg-amber-400',
      badge: 'Core Foundations',
      badgeStyle: 'text-amber-300 bg-amber-950/70 border-amber-800/80',
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
      title: 'Server-Side & API Architecture',
      subtitle: 'Robust backend pipelines, RESTful routing, and authentication',
      icon: Server,
      accentText: 'text-emerald-400',
      accentBg: 'bg-emerald-950/60 border-emerald-800/70',
      accentBorder: 'hover:border-emerald-500/60',
      accentTop: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent',
      dotColor: 'bg-emerald-400',
      badge: 'Production APIs',
      badgeStyle: 'text-emerald-300 bg-emerald-950/70 border-emerald-800/80',
      skills: [
        { name: 'Node.js & Express', level: 'Production', tag: 'Microservices' },
        { name: 'RESTful API Design', level: 'Standard', tag: 'Endpoints' },
        { name: 'JWT & Session Auth', level: 'Security', tag: 'Access Control' },
        { name: 'Middleware Architecture', level: 'Modular', tag: 'Validation' },
        { name: 'Flask / Python APIs', level: 'Applied', tag: 'Services' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Data Modeling',
      subtitle: 'Structured data schemas, indexing, and persistent storage',
      icon: Database,
      accentText: 'text-indigo-400',
      accentBg: 'bg-indigo-950/60 border-indigo-800/70',
      accentBorder: 'hover:border-indigo-500/60',
      accentTop: 'bg-gradient-to-r from-indigo-500 via-purple-400 to-transparent',
      dotColor: 'bg-indigo-400',
      badge: 'Data Integrity',
      badgeStyle: 'text-indigo-300 bg-indigo-950/70 border-indigo-800/80',
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
      title: 'Client Architecture & Cloud DevOps',
      subtitle: 'Reactive client interfaces, CI/CD, and developer tooling',
      icon: Layout,
      accentText: 'text-teal-400',
      accentBg: 'bg-teal-950/60 border-teal-800/70',
      accentBorder: 'hover:border-teal-500/60',
      accentTop: 'bg-gradient-to-r from-teal-500 via-sky-400 to-transparent',
      dotColor: 'bg-teal-400',
      badge: 'Cloud & Systems',
      badgeStyle: 'text-teal-300 bg-teal-950/70 border-teal-800/80',
      skills: [
        { name: 'React 19 & Hooks', level: 'Modern', tag: 'State & UI' },
        { name: 'Tailwind CSS v4', level: 'Responsive', tag: 'Design System' },
        { name: 'Vercel Deployment', level: 'Cloud CI/CD', tag: 'Production' },
        { name: 'Git & GitHub Workflows', level: 'Collaboration', tag: 'Version Control' },
        { name: 'System Design Logic', level: 'Clean Code', tag: 'Engineering' },
      ],
    },
  ];

  const filteredDomains =
    activeDomain === 'all'
      ? domains
      : domains.filter((d) => d.id === activeDomain);

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-widest font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Technical Expertise
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
              { id: 'all', label: 'All Domains' },
              { id: 'languages', label: 'Languages' },
              { id: 'backend', label: 'Backend APIs' },
              { id: 'databases', label: 'Databases' },
              { id: 'frontend-tools', label: 'Frontend & Cloud' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDomain(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeDomain === tab.id
                    ? 'bg-zinc-850 text-white border border-zinc-650 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Domain Modern Architectural Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {filteredDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className={`relative p-5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-zinc-850 ${domain.accentBorder} transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden hover:-translate-y-1`}
              >
                {/* Top Subtle Gradient Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${domain.accentTop} opacity-70 group-hover:opacity-100 transition-opacity`}></div>

                <div>
                  {/* Domain Header */}
                  <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-zinc-900">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border ${domain.accentBg} ${domain.accentText} shadow-inner`}>
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

                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${domain.badgeStyle} font-semibold whitespace-nowrap hidden sm:inline-block`}>
                      {domain.badge}
                    </span>
                  </div>

                  {/* Skills Capsules Grid - Modern & Interactive */}
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {domain.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${domain.dotColor}`}></span>
                          <span className="text-xs font-semibold text-zinc-100 font-['Montserrat',sans-serif]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Telemetry */}
                <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>STACK // {domain.id.toUpperCase()}</span>
                  <span className={`${domain.accentText} font-medium`}>● Production Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
