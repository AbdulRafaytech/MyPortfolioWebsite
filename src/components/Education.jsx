import React from 'react';
import { Calendar, Award, GraduationCap, BookOpen, CheckCircle2, MapPin } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'National University of Modern Languages (NUML)',
      location: 'Lahore, Pakistan',
      period: '2024 – 2028 (In Progress)',
      status: 'Current Standing: Sophomore',
      grade: 'CGPA: 3.38 / 4.00',
      description:
        'Rigorous 4-year undergraduate curriculum focusing on software engineering principles, algorithm design, distributed computing, database management, and AI systems.',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java)',
        'Database Management Systems (SQL)',
        'Web Engineering & REST APIs',
        'Operating Systems & Concurrency',
        'Theory of Automata & Computation',
      ],
      badgeStyle: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/70',
      accentGlow: 'hover:border-cyan-500/80 hover:shadow-cyan-500/10',
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab Group of Colleges / Higher Secondary Board',
      location: 'Lahore, Pakistan',
      period: '2022 – 2024',
      status: 'Completed with Distinction',
      grade: 'Grade A+ (Pre-Engineering & CS)',
      description:
        'Foundational academic track emphasizing mathematics, computer science principles, introductory programming in C++, and analytical problem solving.',
      coursework: [
        'Computer Science Foundations',
        'Advanced Mathematics & Calculus',
        'Physics & Electronics',
        'Procedural Programming (C++)',
      ],
      badgeStyle: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/70',
      accentGlow: 'hover:border-indigo-500/80 hover:shadow-indigo-500/10',
    },
  ];

  return (
    <section id="education" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-12">
          <h2 className="section-title font-['Montserrat',sans-serif]">
            Education &amp; Academic Timeline
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Formal computer science degree, academic standing, university credentials, and theoretical foundations.
          </p>
        </div>

        {/* Clean Professional Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-10 text-left border-l-2 border-zinc-800/80 ml-2 sm:ml-4">
          {educationItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Milestone Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-zinc-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-cyan-400/30"></div>

              {/* Education Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-950 to-zinc-900/50 border border-zinc-800/80 ${item.accentGlow} transition-all duration-300 shadow-xl`}
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-zinc-900">
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 shadow-inner flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat',sans-serif]">
                          {item.degree}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-zinc-300 font-['Inter',sans-serif] mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights & Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>

                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>

                    <span className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold shadow-sm ${item.badgeStyle}`}>
                      <Award className="w-3.5 h-3.5 inline mr-1" />
                      {item.grade}
                    </span>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-sm text-zinc-300 font-['Inter',sans-serif] leading-relaxed mt-4">
                  {item.description}
                </p>

                {/* Coursework & Modules Grid */}
                <div className="mt-5 pt-4 border-t border-zinc-900">
                  <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    Core Coursework &amp; Key Subjects:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {item.coursework.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/70 text-xs text-zinc-300 font-['Inter',sans-serif]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
