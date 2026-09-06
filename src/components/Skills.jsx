import React, { useState } from 'react';
import { Search, Code2, Server, Layout, Cloud, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const skillsData = [
    { name: 'JavaScript (ES6+)', level: 85, category: 'languages', color: 'from-amber-400 to-amber-500' },
    { name: 'Java (OOP & Patterns)', level: 85, category: 'languages', color: 'from-orange-500 to-red-500' },
    { name: 'Python Automation', level: 80, category: 'languages', color: 'from-sky-400 to-blue-500' },
    { name: 'SQL & Database Design', level: 78, category: 'backend', color: 'from-emerald-400 to-teal-500' },
    { name: 'Node.js & Express APIs', level: 82, category: 'backend', color: 'from-emerald-500 to-green-600' },
    { name: 'React & Modern Frontend', level: 80, category: 'frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'HTML5 & CSS3 Responsive', level: 90, category: 'frontend', color: 'from-blue-400 to-indigo-500' },
    { name: 'MongoDB & SQLite', level: 75, category: 'backend', color: 'from-green-500 to-emerald-600' },
    { name: 'Git & GitHub Collaboration', level: 88, category: 'tools', color: 'from-purple-400 to-indigo-500' },
    { name: 'Vercel & Cloud CI/CD', level: 85, category: 'tools', color: 'from-indigo-400 to-cyan-400' },
    { name: 'Data Structures & Algorithms', level: 78, category: 'tools', color: 'from-violet-500 to-purple-600' },
    { name: 'AI & LLM Workflows', level: 82, category: 'tools', color: 'from-pink-500 to-rose-500' },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <section id="skills" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <h2 className="section-title font-['Montserrat',sans-serif]">
              Technical Skills &amp; Proficiency
            </h2>
            <p className="text-sm font-mono text-zinc-400 mt-1">
              Interactive proficiency visualizations, core languages, backend architecture, and cloud tooling.
            </p>
          </div>

          {/* Search & Tabs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex gap-1.5 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
              {[
                { id: 'all', label: 'All' },
                { id: 'languages', label: 'Languages' },
                { id: 'backend', label: 'Backend' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'tools', label: 'Cloud & Tools' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Proficiency Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4.5 rounded-xl bg-zinc-950/90 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 shadow-md group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white font-['Montserrat',sans-serif] group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-indigo-400 font-bold">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden p-0.5 border border-zinc-800/80">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
