import React, { useState } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'ai-parking',
      title: 'AI Smart Parking System',
      category: 'ai',
      stack: ['Python', 'Computer Vision', 'Deep Learning', 'Flask API'],
      description: 'Intelligent real-time vehicle license plate detection and parking bay allocation using multi-stage deep learning scanners and IP camera streams.',
      thumbnail: '/project-ai-parking.png',
      githubUrl: 'https://github.com/AbdulRafaytech/AI-Powered-Smart-Parking-Management-System/tree/main/AI-Powered%20Smart%20Parking%20Management%20System',
      liveUrl: null,
      badge: 'Deep Learning / Vision',
      badgeStyle: 'bg-amber-950/60 border-amber-800/70 text-amber-300',
      borderGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
    },
    {
      id: 'b2b-courier',
      title: 'B2B Courier Dispatch & Fleet',
      category: 'backend',
      stack: ['Java OOP', 'MySQL', 'Fleet Routing', 'COD Settlements'],
      description: 'Enterprise logistics management desktop engine for parcel assignment, fleet settlement reconciliation, rider tracking, and COD revenue auditing.',
      thumbnail: '/project-b2b-courier.png',
      githubUrl: 'https://github.com/AbdulRafaytech/courier-dispatch-fleet-settlement',
      liveUrl: null,
      badge: 'Java Enterprise System',
      badgeStyle: 'bg-emerald-950/60 border-emerald-800/70 text-emerald-300',
      borderGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
    },
    {
      id: 'saas-auth',
      title: 'SaaS Authentication Module',
      category: 'fullstack',
      stack: ['React', 'JavaScript', 'JWT Session', 'Vercel'],
      description: 'Production-ready authentication system engineered at InternGrow with secure login, OTP verification, protected routes, and session timeout safeguards.',
      thumbnail: '/project-saas-auth.png',
      githubUrl: 'https://github.com/AbdulRafaytech/InternGrow_RTechAuthenticationSystem',
      liveUrl: 'https://intern-grow-r-tech-authentication-s.vercel.app',
      badge: 'Security & Auth',
      badgeStyle: 'bg-indigo-950/60 border-indigo-800/70 text-indigo-300',
      borderGlow: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
    },
    {
      id: 'rtech-hr',
      title: 'RTech HR Analytics Dashboard',
      category: 'fullstack',
      stack: ['React', 'Data Visuals', 'State Logic', 'Vercel'],
      description: 'Modern enterprise workforce portal featuring interactive attendance trend graphs, department analytics, employee lifecycle, and HR metrics.',
      thumbnail: '/project-rtech-hr.png',
      githubUrl: 'https://github.com/AbdulRafaytech/InternGrow_RTechHR_Dashboard',
      liveUrl: 'https://intern-grow-r-tech-hr-dashboard.vercel.app/',
      badge: 'Enterprise Analytics',
      badgeStyle: 'bg-teal-950/60 border-teal-800/70 text-teal-300',
      borderGlow: 'hover:border-teal-500/50 hover:shadow-teal-500/10',
    },
    {
      id: 'rtech-store',
      title: 'RTech Store Image Archive',
      category: 'frontend',
      stack: ['React', 'JavaScript', 'Responsive UI', 'Vercel'],
      description: 'Curated technology image archive and e-commerce showcase featuring category filtering, modular gallery cards, and high-performance client rendering.',
      thumbnail: '/project-rtech-store.png',
      githubUrl: 'https://github.com/AbdulRafaytech/CodeAlpha_ImageGallery',
      liveUrl: 'https://rtech-store-lovat.vercel.app/',
      badge: 'E-Commerce / Gallery',
      badgeStyle: 'bg-rose-950/60 border-rose-800/70 text-rose-300',
      borderGlow: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-semibold flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5" /> Featured Engineering
              </span>
            </div>
            <h2 className="section-title font-['Montserrat',sans-serif]">
              Key Systems &amp; Projects
            </h2>
            <p className="text-sm font-mono text-zinc-400 mt-1">
              Production full-stack applications, Java enterprise systems, and AI computer vision workflows.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800/90 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & Vision' },
              { id: 'backend', label: 'Java Backend' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'frontend', label: 'Frontend' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-zinc-800 text-white border border-zinc-650 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Responsive Project Grid - Perfectly tailored for 100% zoom laptops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden bg-zinc-950/90 border border-zinc-850 ${project.borderGlow} transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                {/* Clean Screenshot Banner - NO OVERLAY BADGE HIDING THE UI */}
                <div className="relative h-42 sm:h-46 w-full overflow-hidden bg-black border-b border-zinc-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Card Body - Streamlined Padding & Relocated Category Badge */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md border ${project.badgeStyle} font-semibold`}>
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      2026
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-['Montserrat',sans-serif] group-hover:text-emerald-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Compact Tech Stack Pills */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {project.stack.map((t, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Concise 2-Line Narrative */}
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2.5 font-['Inter',sans-serif] line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Actions Row - Always Visible & Never Clipped */}
              <div className="p-4 sm:p-5 pt-0">
                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                      >
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-750 hover:border-zinc-600 text-zinc-200 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Github className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>GitHub</span>
                    </a>
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
