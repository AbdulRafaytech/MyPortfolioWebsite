import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'b2b-courier',
      title: 'B2B Courier Dispatch System',
      category: 'backend',
      stack: ['Java', 'OOP Architecture', 'REST APIs', 'MySQL', 'Maven'],
      description: 'Automated B2B logistics and dispatch system developed with Java and Object-Oriented principles for fleet operations, route assignment, and real-time delivery settlements.',
      thumbnail: '/project-b2b-courier.svg',
      githubUrl: 'https://github.com/AbdulRafaytech/courier-dispatch-fleet-settlement',
      liveUrl: null,
      badge: 'Java Backend System',
    },
    {
      id: 'ai-parking',
      title: 'AI Smart Parking System',
      category: 'ai',
      stack: ['Python', 'Computer Vision', 'AI Automation', 'Streamlit / Flask'],
      description: 'Intelligent parking allocation and surveillance management system utilizing computer vision workflows to detect spot occupancy and automate ticketing.',
      thumbnail: '/project-ai-parking.svg',
      githubUrl: 'https://github.com/AbdulRafaytech/AI-Powered-Smart-Parking-Management-System/tree/main/AI-Powered%20Smart%20Parking%20Management%20System',
      liveUrl: null,
      badge: 'AI & Automation',
    },
    {
      id: 'saas-auth',
      title: 'SaaS Authentication Module',
      category: 'fullstack',
      stack: ['React', 'JavaScript', 'Vercel'],
      description: 'Complete authentication UI built during the InternGrow internship, featuring login, registration, OTP verification, protected routes, session timeout, and password strength validation.',
      thumbnail: '/project-saas-auth.svg',
      githubUrl: 'https://github.com/AbdulRafaytech/InternGrow_RTechAuthenticationSystem',
      liveUrl: 'https://intern-grow-r-tech-authentication-s.vercel.app',
      badge: 'SaaS Authentication',
    },
    {
      id: 'rtech-hr',
      title: 'RTech HR',
      category: 'fullstack',
      stack: ['React', 'JavaScript', 'Vercel'],
      description: 'A modern HR dashboard application featuring workforce overview, employee management, department analytics, attendance tracking, and intuitive dashboard metrics.',
      thumbnail: '/project-rtech-hr.svg',
      githubUrl: 'https://github.com/AbdulRafaytech/InternGrow_RTechHR_Dashboard',
      liveUrl: 'https://intern-grow-r-tech-hr-dashboard.vercel.app/',
      badge: 'Workforce Analytics',
    },
    {
      id: 'rtech-store',
      title: 'RTech Store',
      category: 'frontend',
      stack: ['React', 'JavaScript', 'Vercel'],
      description: 'A modern e-commerce web application featuring product listings, cart functionality, and a responsive user interface.',
      thumbnail: '/project-rtech-store.svg',
      githubUrl: 'https://github.com/AbdulRafaytech/CodeAlpha_ImageGallery',
      liveUrl: 'https://rtech-store-lovat.vercel.app/',
      badge: 'E-Commerce UI',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <h2 className="section-title font-['Montserrat',sans-serif]">
              Featured Projects
            </h2>
            <p className="text-sm font-mono text-zinc-400 mt-1">
              Production applications, Java &amp; backend systems, and live software deployments.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'backend', label: 'Java & Backend' },
              { id: 'ai', label: 'AI' },
              { id: 'frontend', label: 'Frontend' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Zoom-in and Glowing Border Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden bg-zinc-950/90 border border-zinc-800/80 hover:border-indigo-500/80 transition-all duration-300 flex flex-col group shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Zoom-in Thumbnail Screenshot */}
              <div className="relative aspect-video w-full overflow-hidden bg-black border-b border-zinc-800/80">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-black/80 border border-zinc-700 text-zinc-200 font-semibold backdrop-blur-md">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-['Montserrat',sans-serif] group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech Stack Pills */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.stack.map((t, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-3.5 font-['Inter',sans-serif]">
                    {project.description}
                  </p>
                </div>

                {/* GitHub and Live Demo Action Buttons */}
                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    PROJ // 0{projects.indexOf(project) + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
