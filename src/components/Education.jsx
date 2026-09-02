import React from 'react';
import { Calendar, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Clean Bold */}
        <div className="text-left mb-10">
          <h2 className="section-title font-sans">
            Education
          </h2>
          <p className="text-sm font-mono text-zinc-500 mt-1">
            Academic degree, university, and core computer science curriculum.
          </p>
        </div>

        {/* Clean Education Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-zinc-950 border border-zinc-900 text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-zinc-900">
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 font-semibold tracking-wider block mb-1">
                Undergraduate Degree
              </span>
              <h3 className="text-2xl font-bold text-white font-sans">
                BS Computer Science
              </h3>
              <p className="text-base text-zinc-300 mt-0.5 font-sans">
                National University of Modern Languages (NUML), Lahore
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Calendar className="w-3.5 h-3.5" /> 2024 – 2028
              </span>
              <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-emerald-400 font-bold">
                CGPA: 3.38 / 4.00
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-3">
              Core Coursework &amp; Academic Focus:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span>Object-Oriented Programming (Java / C++)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span>Data Structures &amp; Algorithms (DSA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span>Database Management Systems &amp; SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span>Web Engineering &amp; Software Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
