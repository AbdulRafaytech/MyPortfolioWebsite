import React from 'react';
import { Calendar, Award, GraduationCap, BookOpen, MapPin, Sparkles, Binary, Database, Cpu, Globe2 } from 'lucide-react';

export default function Education() {
  const specializations = [
    {
      title: 'Algorithms & Theoretical CS',
      desc: 'Mastery of abstract data types, asymptotic complexity analysis, graph traversals, dynamic programming, and computational logic.',
      icon: Binary,
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/70',
      bg: 'bg-cyan-950/20',
      skills: ['Data Structures', 'Big-O Analysis', 'Graph Theory', 'Automata Theory'],
    },
    {
      title: 'Object-Oriented Architecture',
      desc: 'Enterprise software modeling using Java, applying SOLID design principles, clean modular abstractions, and design patterns.',
      icon: Cpu,
      color: 'text-indigo-400',
      border: 'hover:border-indigo-500/70',
      bg: 'bg-indigo-950/20',
      skills: ['Java OOP', 'Design Patterns', 'Polymorphism', 'Clean Architecture'],
    },
    {
      title: 'Database Management Systems',
      desc: 'Relational data modeling, schema normalization, complex SQL querying, indexing mechanisms, and transaction integrity.',
      icon: Database,
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/70',
      bg: 'bg-emerald-950/20',
      skills: ['Relational SQL', 'Indexing', 'Schema Optimization', 'Transactions'],
    },
    {
      title: 'Web Engineering & Networks',
      desc: 'Building client-server architectures, RESTful API design, HTTP/TCP protocols, operating systems concurrency, and multithreading.',
      icon: Globe2,
      color: 'text-sky-400',
      border: 'hover:border-sky-500/70',
      bg: 'bg-sky-950/20',
      skills: ['RESTful APIs', 'Client-Server', 'OS Concurrency', 'TCP/IP Protocols'],
    },
  ];

  return (
    <section id="education" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> University Credentials
            </span>
          </div>
          <h2 className="section-title font-['Montserrat',sans-serif]">
            Education &amp; Academics
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Formal computer science degree, rigorous engineering curriculum, and theoretical foundations.
          </p>
        </div>

        {/* Executive Undergraduate Degree Showcase Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-[#060b13] border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl p-6 sm:p-9 text-left group overflow-hidden">
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 border-b border-zinc-900">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 shadow-inner flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider block mb-1">
                  Bachelor of Science (Undergraduate)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat',sans-serif]">
                  BS Computer Science
                </h3>
                <p className="text-base text-zinc-300 mt-1 font-['Inter',sans-serif]">
                  National University of Modern Languages (NUML), Lahore
                </p>
              </div>
            </div>

            {/* Academic Standing & Timeline Badges */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>2024 – 2028 (In Progress)</span>
              </div>

              <div className="px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-800/80 flex items-center gap-2 text-xs font-mono text-emerald-300 font-bold shadow-sm">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>CGPA: 3.38 / 4.00</span>
              </div>

              <div className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Lahore, PK</span>
              </div>
            </div>
          </div>

          {/* Academic Specialization Matrix (Replacing generic dotted bullets with modern cards) */}
          <div className="pt-8">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              Core Academic Domains &amp; Theoretical Focus:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specializations.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 ${spec.border} transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${spec.bg} ${spec.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h5 className="text-sm font-bold text-white font-['Montserrat',sans-serif]">
                        {spec.title}
                      </h5>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed font-['Inter',sans-serif] mb-3 pl-1">
                      {spec.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pl-1">
                      {spec.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {s}
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
