import React from 'react';
import { Server, Cpu, Database, Cloud, Code2, Terminal, CheckCircle2, Award } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Server-Side & APIs',
      desc: 'Architecting robust REST endpoints, request validation, authentication pipelines, and modular backend logic with Node.js, Express, Java, and Python.',
      icon: Server,
      accent: 'text-indigo-400',
    },
    {
      title: 'AI-Assisted Workflows',
      desc: 'Integrating modern LLM frameworks, automated code intelligence, prompt engineering patterns, and AI-accelerated development lifecycles.',
      icon: Cpu,
      accent: 'text-cyan-400',
    },
    {
      title: 'Scalable Databases & Architecture',
      desc: 'Applying Object-Oriented principles, relational schema design, indexing, and structured data handling across MySQL, MongoDB, and SQLite.',
      icon: Database,
      accent: 'text-emerald-400',
    },
    {
      title: 'Cloud & Vercel Deployment',
      desc: 'Automating continuous deployment pipelines (CI/CD), environment management, and production cloud hosting on Vercel and serverless architectures.',
      icon: Cloud,
      accent: 'text-purple-400',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Clean Bold */}
        <div className="text-left mb-10">
          <h2 className="section-title font-['Montserrat',sans-serif]">
            About Me
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Software engineering philosophy, technical positioning, and core competencies.
          </p>
        </div>

        {/* Clean, high-impact editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 text-left space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-['Inter',sans-serif]">
            <p>
              I am a <strong className="text-white font-bold">Computer Science undergraduate</strong> with a strong focus on backend systems, clean architecture, and modern full-stack development. My technical journey spans hands-on experience in <strong className="text-white font-bold">Java OOP</strong>, <strong className="text-white font-bold">Python automation</strong>, <strong className="text-white font-bold">Node.js / Express backend services</strong>, and modern client interfaces built with React.
            </p>
            <p>
              I actively implement <strong className="text-white font-bold">AI-assisted development workflows</strong> to accelerate system design, automate repetitive pipelines, and maintain rigorous code quality. With multiple hands-on internships completed and live projects deployed on <strong className="text-white font-bold">Vercel</strong>, my objective is building reliable, scalable software solutions that solve real-world problems.
            </p>

            {/* Engineering Metric Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 border-l-4 border-l-indigo-500">
                <span className="text-2xl font-black text-white block">5+</span>
                <span className="text-xs text-zinc-400">Internships</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 border-l-4 border-l-cyan-500">
                <span className="text-2xl font-black text-white block">7</span>
                <span className="text-xs text-zinc-400">Certifications</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 border-l-4 border-l-purple-500">
                <span className="text-2xl font-black text-white block">5</span>
                <span className="text-xs text-zinc-400">Key Projects</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 border-l-4 border-l-emerald-500">
                <span className="text-2xl font-black text-white block">3.38</span>
                <span className="text-xs text-zinc-400">NUML CGPA</span>
              </div>
            </div>
          </div>

          {/* Right side pillars with rich modern card styling */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4.5 rounded-xl bg-zinc-950/90 border border-zinc-800/90 hover:border-zinc-600 transition-all text-left shadow-md group"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <Icon className={`w-5 h-5 ${item.accent} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-sm font-bold text-white font-['Montserrat',sans-serif]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-normal font-['Inter',sans-serif] pl-8">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
