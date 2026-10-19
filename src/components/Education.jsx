import React from 'react';
import { Calendar, Award, MapPin, BookOpen, Binary, Database, Cpu, Globe2, School } from 'lucide-react';

export default function Education() {
  const coreDomains = [
    {
      title: 'Algorithms & Data Structures',
      icon: Binary,
      color: 'text-amber-400',
      bg: 'bg-amber-950/40 border-amber-800/40',
      topics: ['Data Structures', 'Big-O Analysis', 'Graph Traversals'],
    },
    {
      title: 'Object-Oriented Architecture',
      icon: Cpu,
      color: 'text-indigo-400',
      bg: 'bg-indigo-950/40 border-indigo-800/40',
      topics: ['Java OOP', 'Design Patterns', 'SOLID Principles'],
    },
    {
      title: 'Database Management Systems',
      icon: Database,
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/40 border-emerald-800/40',
      topics: ['Relational SQL', 'Indexing', 'Schema Optimization'],
    },
    {
      title: 'Web Engineering & Networks',
      icon: Globe2,
      color: 'text-teal-400',
      bg: 'bg-teal-950/40 border-teal-800/40',
      topics: ['RESTful APIs', 'OS Concurrency', 'TCP/IP Protocols'],
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-widest font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> University Credentials
            </span>
          </div>
          <h2 className="section-title font-['Montserrat',sans-serif]">
            Education &amp; Academics
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Formal computer science degree, rigorous engineering curriculum, and technical foundations.
          </p>
        </div>

        {/* Compact, Modern Academic Showcase Card */}
        <div className="relative rounded-2xl bg-zinc-950/90 border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 shadow-xl p-5 sm:p-7 text-left group overflow-hidden">
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-emerald-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>

          {/* Primary Degree Banner with NUML Logo */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-zinc-900">
            <div className="flex items-center gap-4">
              {/* NUML Official Seal in Pristine Circular Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-indigo-500/30 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo-numl.png"
                  alt="NUML University Official Seal"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-indigo-400 font-semibold tracking-wider">
                    Undergraduate Degree
                  </span>
                  <span className="text-zinc-600 text-xs">•</span>
                  <span className="text-xs font-mono text-emerald-400 font-medium">In Progress</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat',sans-serif] mt-0.5">
                  BS Computer Science
                </h3>
                <p className="text-sm text-zinc-300 font-['Inter',sans-serif]">
                  National University of Modern Languages (NUML), Lahore
                </p>
              </div>
            </div>

            {/* Academic Standing & Timeline Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="px-3.5 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-800/70 flex items-center gap-2 text-xs font-mono text-emerald-300 font-bold shadow-sm">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>CGPA: 3.38 / 4.00</span>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>2024 – 2028</span>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Lahore, PK</span>
              </div>
            </div>
          </div>

          {/* Compact 4-Domain Grid */}
          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-4 flex items-center gap-2 font-semibold">
              <School className="w-3.5 h-3.5 text-zinc-400" />
              <span>Core Academic Curriculum &amp; Specializations</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {coreDomains.map((dom, idx) => {
                const IconComponent = dom.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/90 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className={`p-1.5 rounded-lg border ${dom.bg} ${dom.color}`}>
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <h5 className="text-xs font-bold text-white font-['Montserrat',sans-serif] leading-tight">
                          {dom.title}
                        </h5>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {dom.topics.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
