import React from 'react';
import { Calendar, Award, CheckCircle2, GraduationCap, BookOpen, Layers, Sparkles } from 'lucide-react';

export default function Education() {
  const courses = [
    { title: 'Object-Oriented Programming', detail: 'Java, C++, Design Patterns, Polymorphism' },
    { title: 'Data Structures & Algorithms', detail: 'Complexity, Graphs, Trees, Dynamic Programming' },
    { title: 'Database Management Systems', detail: 'Relational SQL, Indexing, Schema Optimization' },
    { title: 'Web Engineering', detail: 'RESTful APIs, Client-Server Architecture, Full-Stack' },
    { title: 'Operating Systems & Networks', detail: 'Concurrency, Threading, TCP/IP, Protocols' },
    { title: 'AI & Computational Theory', detail: 'Foundational AI, Machine Learning, Automation' },
  ];

  return (
    <section id="education" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Clean Bold */}
        <div className="text-left mb-10">
          <h2 className="section-title font-['Montserrat',sans-serif]">
            Education &amp; Academics
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Formal computer science degree, university credentials, and core engineering curriculum.
          </p>
        </div>

        {/* Impressive Modern Education Box */}
        <div className="relative p-6 sm:p-9 rounded-2xl bg-gradient-to-b from-zinc-950/90 to-black border border-zinc-800/80 hover:border-zinc-600 transition-all text-left shadow-2xl overflow-hidden group">
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 border-b border-zinc-900">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-950/70 border border-indigo-800/60 text-indigo-400 shadow-inner flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-indigo-400 font-semibold tracking-wider block mb-1">
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
              <div className="px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>2024 – 2028 (In Progress)</span>
              </div>

              <div className="px-4 py-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/80 flex items-center gap-2 text-xs font-mono text-emerald-300 font-bold shadow-sm">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>CGPA: 3.38 / 4.00</span>
              </div>
            </div>
          </div>

          {/* Academic Timeline Progress Bar */}
          <div className="py-6 border-b border-zinc-900/80">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Degree Progress
              </span>
              <span className="text-indigo-400 font-bold">Freshman → Sophomore (Active)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden p-0.5 border border-zinc-800">
              <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-[35%] transition-all duration-1000"></div>
            </div>
          </div>

          {/* Coursework & Engineering Focus Grid */}
          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              Core Academic Coursework &amp; Theoretical Foundations:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-['Montserrat',sans-serif]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{course.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-['Inter',sans-serif] mt-1 pl-6">
                    {course.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
