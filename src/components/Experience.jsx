import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'FlyRank AI',
      role: 'Backend AI Engineering Intern',
      period: 'Aug 2026 – Sep 2026',
      location: 'Remote',
      tag: 'Backend & AI',
      glowColor: 'hover:border-cyan-400/80 hover:shadow-cyan-500/10',
      borderColor: 'border-cyan-900/40',
      bgGradient: 'bg-gradient-to-r from-cyan-950/15 via-zinc-950 to-zinc-950',
      tagStyle: 'text-cyan-300 bg-cyan-950/60 border-cyan-800/60',
      topLine: 'bg-cyan-400',
      description: 'Working around backend and AI engineering workflows, integrating Python automation, and supporting practical backend-oriented system development.',
      skills: ['Backend/AI Engineering', 'AI Workflows', 'Python', 'System Development'],
    },
    {
      company: 'CodeAlpha',
      role: 'Back End Developer Intern',
      period: 'Aug 2026 – Sep 2026',
      location: 'Remote',
      tag: 'Server-Side & APIs',
      glowColor: 'hover:border-indigo-400/80 hover:shadow-indigo-500/10',
      borderColor: 'border-indigo-900/40',
      bgGradient: 'bg-gradient-to-r from-indigo-950/15 via-zinc-950 to-zinc-950',
      tagStyle: 'text-indigo-300 bg-indigo-950/60 border-indigo-800/60',
      topLine: 'bg-indigo-400',
      description: 'Selected for a hands-on Backend Development Internship focused on server-side development, RESTful APIs, backend frameworks, databases, and practical project development using technologies such as Node.js, Express.js, Flask, and Django.',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Flask', 'Django', 'Databases'],
    },
    {
      company: 'CodeAlpha',
      role: 'Frontend Developer Intern',
      period: 'Aug 2026 – Sep 2026',
      location: 'Remote',
      tag: 'UI & Interactivity',
      glowColor: 'hover:border-sky-400/80 hover:shadow-sky-500/10',
      borderColor: 'border-sky-900/40',
      bgGradient: 'bg-gradient-to-r from-sky-950/15 via-zinc-950 to-zinc-950',
      tagStyle: 'text-sky-300 bg-sky-950/60 border-sky-800/60',
      topLine: 'bg-sky-400',
      description: 'Working on frontend development tasks involving HTML, CSS, JavaScript, responsive user interfaces, Git/GitHub, and practical project implementation.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Git/GitHub'],
    },
    {
      company: 'InternGrow',
      role: 'Frontend Developer Intern',
      period: 'Aug 2026 – Oct 2026',
      location: 'Remote',
      tag: 'SaaS UI & State',
      glowColor: 'hover:border-emerald-400/80 hover:shadow-emerald-500/10',
      borderColor: 'border-emerald-900/40',
      bgGradient: 'bg-gradient-to-r from-emerald-950/15 via-zinc-950 to-zinc-950',
      tagStyle: 'text-emerald-300 bg-emerald-950/60 border-emerald-800/60',
      topLine: 'bg-emerald-400',
      description: 'Practical frontend development involving HTML, CSS, JavaScript, responsive UI development, DOM manipulation, and Git/GitHub.',
      skills: ['React', 'JavaScript', 'DOM Manipulation', 'UI Components', 'Git'],
    },
    {
      company: 'HexSoftwares',
      role: 'Web Development Intern',
      period: 'Aug 2026 – Sep 2026',
      location: 'Remote',
      tag: 'Web Development',
      glowColor: 'hover:border-purple-400/80 hover:shadow-purple-500/10',
      borderColor: 'border-purple-900/40',
      bgGradient: 'bg-gradient-to-r from-purple-950/15 via-zinc-950 to-zinc-950',
      tagStyle: 'text-purple-300 bg-purple-950/60 border-purple-800/60',
      topLine: 'bg-purple-400',
      description: 'Professional internship focusing on practical web development, responsive interfaces, HTML/CSS/JavaScript, project-based development, and practical feature implementation.',
      skills: ['Web Development', 'Responsive Design', 'JavaScript', 'HTML/CSS'],
    },
  ];

  return (
    <section id="experience" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Clean Bold */}
        <div className="text-left mb-12">
          <h2 className="section-title font-['Montserrat',sans-serif]">
            Work Experience
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Hands-on technical internships and practical software engineering roles.
          </p>
        </div>

        {/* Distinct Experience Cards with Enlightened Borders on Hover */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-7 rounded-xl ${exp.bgGradient} border ${exp.borderColor} ${exp.glowColor} transition-all duration-300 group shadow-lg hover:shadow-2xl text-left overflow-hidden`}
            >
              {/* Illuminated Accent Top Bar on Hover */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${exp.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md`}></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-900">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Montserrat',sans-serif] group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-zinc-300 font-['Inter',sans-serif]">
                    @ {exp.company}
                  </span>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${exp.tagStyle} font-semibold`}>
                    {exp.tag}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mt-4 font-['Inter',sans-serif]">
                {exp.description}
              </p>

              {/* Skills Row */}
              <div className="mt-5 flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
