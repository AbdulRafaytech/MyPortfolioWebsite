import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');

  const skillCategories = [
    {
      category: 'Languages',
      accent: 'border-cyan-500/30 text-cyan-300',
      skills: ['JavaScript (ES6+)', 'Java', 'Python', 'C++', 'SQL'],
    },
    {
      category: 'Frontend & UI',
      accent: 'border-sky-500/30 text-sky-300',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Design', 'React'],
    },
    {
      category: 'Backend & Database',
      accent: 'border-indigo-500/30 text-indigo-300',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'SQLite'],
    },
    {
      category: 'Cloud, Tools & Concepts',
      accent: 'border-emerald-500/30 text-emerald-300',
      skills: ['Vercel Deployment', 'Git/GitHub', 'OOP', 'DSA', 'IntelliJ IDEA', 'Maven'],
    },
  ];

  return (
    <section id="skills" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Clean Bold */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <h2 className="section-title font-['Montserrat',sans-serif]">
              Technical Skills
            </h2>
            <p className="text-sm font-mono text-zinc-400 mt-1">
              Programming languages, frameworks, databases, and deployment platforms.
            </p>
          </div>

          {/* Quick Filter */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-['Inter',sans-serif]"
              />
            </div>
          </div>
        </div>

        {/* Clean Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {skillCategories.map((group, idx) => {
            const filteredSkills = group.skills.filter((s) =>
              s.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-950/90 border border-zinc-800/80 hover:border-zinc-600 transition-all flex flex-col shadow-sm"
              >
                <h3 className="text-xs font-bold text-zinc-200 font-mono uppercase tracking-wider pb-3 border-b border-zinc-900 mb-4 flex items-center justify-between">
                  <span>{group.category}</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((skill, sIdx) => {
                    const isVercel = skill.includes('Vercel');
                    return (
                      <span
                        key={sIdx}
                        className={`text-xs font-mono px-2.5 py-1 rounded transition-colors ${
                          isVercel
                            ? 'bg-white text-black font-bold border border-white'
                            : 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
