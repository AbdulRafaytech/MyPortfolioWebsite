import React from 'react';
import { Server, Cpu, Database, Cloud } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Server-Side & APIs',
      desc: 'Developing modular REST endpoints, request validation, and database operations with Node.js, Python & Java.',
      icon: Server,
    },
    {
      title: 'AI-Assisted Workflows',
      desc: 'Leveraging modern LLM tooling, automated scripting, and prompt-driven architecture for rapid engineering.',
      icon: Cpu,
    },
    {
      title: 'Scalable Databases',
      desc: 'Applying OOP principles, database indexing, and structured data handling across SQL & NoSQL data stores.',
      icon: Database,
    },
    {
      title: 'Cloud & Vercel Deployment',
      desc: 'Automating continuous deployments (CI/CD) and serverless hosting on Vercel and modern cloud platforms.',
      icon: Cloud,
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
            Background, core competencies, and software engineering philosophy.
          </p>
        </div>

        {/* Clean, unboxed editorial layout with Inter typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 text-left space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-['Inter',sans-serif]">
            <p>
              Computer Science undergraduate with hands-on experience in Java OOP, Python automation, and JavaScript-based web development. Currently building <strong className="text-white font-bold">backend</strong> development skills with Node.js, modern web technologies, and cloud deployments on Vercel through practical <strong className="text-white font-bold">AI-assisted development workflows</strong>.
            </p>
            <p>
              Strong interest in APIs, databases, scalable systems, and problem solving. Actively contributing to internship-level projects while pursuing a long-term goal in Full-Stack and <strong className="text-white font-bold">Backend</strong> Engineering.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
              <div className="border-l-2 border-indigo-500 pl-3">
                <span className="text-2xl font-black text-white block">5+</span>
                <span className="text-xs text-zinc-400">Internships</span>
              </div>
              <div className="border-l-2 border-cyan-500 pl-3">
                <span className="text-2xl font-black text-white block">7</span>
                <span className="text-xs text-zinc-400">Certifications</span>
              </div>
              <div className="border-l-2 border-purple-500 pl-3">
                <span className="text-2xl font-black text-white block">5</span>
                <span className="text-xs text-zinc-400">Key Projects</span>
              </div>
              <div className="border-l-2 border-emerald-500 pl-3">
                <span className="text-2xl font-black text-white block">3.38</span>
                <span className="text-xs text-zinc-400">BS CS CGPA</span>
              </div>
            </div>
          </div>

          {/* Right side pillars with distinct subtle card tints */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-500 transition-all text-left shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <Icon className="w-4 h-4 text-indigo-400" />
                    <h3 className="text-sm font-bold text-white font-['Montserrat',sans-serif]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-zinc-300 leading-normal font-['Inter',sans-serif]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
