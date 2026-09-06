import React, { useState } from 'react';
import { ExternalLink, Eye, ChevronDown, ChevronUp, ShieldCheck, Award } from 'lucide-react';

export default function Certifications({ onSelectCertificate }) {
  const [showAll, setShowAll] = useState(false);

  const certs = [
    {
      id: 'anthropic-ai',
      name: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic Academy',
      issued: 'Aug 2026',
      credentialUrl: 'https://verify.skilljar.com/c/329zr4pnkgwt',
      code: '329zr4pnkgwt',
      image: '/certificates/anthropic-certificate.jpg',
      badge: 'Anthropic',
      description: 'Foundational framework and capabilities of generative AI systems, architectural prompt patterns, and safety considerations.',
    },
    {
      id: 'oops-java',
      name: 'OOPs in Java',
      issuer: 'Simplilearn SkillUp',
      issued: '22nd August 2026',
      credentialUrl: 'https://simpli-web.app.link/e/cw4Vd4axO5b',
      code: '10635523',
      image: '/certificates/java-oops-certificate.jpg',
      badge: 'Simplilearn',
      description: 'Object-Oriented Programming principles: Encapsulation, Polymorphism, Inheritance, Abstraction, and Java Design Patterns.',
    },
    {
      id: 'reactjs-beginners',
      name: 'ReactJS for Beginners',
      issuer: 'Simplilearn SkillUp',
      issued: '22nd August 2026',
      credentialUrl: 'https://simpli-web.app.link/e/9hRmR5D5O5b',
      code: '10636877',
      image: '/certificates/reactjs-certificate.jpg',
      badge: 'Simplilearn',
      description: 'Component lifecycles, React hooks (useState, useEffect), Virtual DOM mechanics, and declarative UI composition.',
    },
    {
      id: 'intro-genai',
      name: 'Introduction to Generative AI',
      issuer: 'Google Cloud & Simplilearn',
      issued: '19th August 2026',
      credentialUrl: 'https://simpli-web.app.link/e/0QVeDHZmX5b',
      code: '10624150',
      image: '/certificates/genai-certificate.jpg',
      badge: 'Google Cloud Partner',
      description: 'Generative AI fundamentals powered by Google Cloud, Large Language Models (LLMs), prompt engineering, and GenAI applications.',
    },
    {
      id: 'js-beginners',
      name: 'JavaScript for Beginners',
      issuer: 'Simplilearn SkillUp',
      issued: '21st August 2026',
      credentialUrl: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTA2MjkzMzJfMTA5NTE1MDZfMTc4NzI4NDM3ODQzNS5wbmciLCJ1c2VybmFtZSI6IkFiZHVsIFJhZmF5In0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4212%2FJavaScript-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1589302803262922015&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVjwpPsnAN8zf1MU2yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGEoGOxBAAAA',
      code: '10629332',
      image: '/certificates/javascript-certificate.jpg',
      badge: 'Simplilearn',
      description: 'Core ECMAScript principles, asynchronous programming, event-driven loops, and DOM manipulation paradigms.',
    },
    {
      id: 'intro-frontend',
      name: 'Introduction to Front End Development',
      issuer: 'Simplilearn SkillUp',
      issued: '19th August 2026',
      credentialUrl: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTMzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTA2MTkzMzZfMTA5NTE1MDZfMTc4NzA5ODIzNjI2Ny5wbmciLCJ1c2VybmFtZSI6IkFiZHVsIFJhZmF5In0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4511%2FIntroduction%2520to%2520Front%2520End%2520Development%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1589302803262922015&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVr4rwCDQKNrQINU2yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGonWehBAAAA',
      code: '10619336',
      image: '/certificates/frontend-certificate.jpg',
      badge: 'Simplilearn',
      description: 'Web markup fundamentals, responsive layouts, modern CSS styling systems, and client-side architecture.',
    },
    {
      id: 'maven-course',
      name: 'Learn Apache Maven Course',
      issuer: 'Simplilearn SkillUp',
      issued: '23rd August 2026',
      credentialUrl: 'https://simpli-web.app.link/e/9hRmR5D5O5b',
      code: '10636904',
      image: '/certificates/maven-certificate.jpg',
      badge: 'Simplilearn',
      description: 'Java build automation, Project Object Model (POM.xml), dependency management, and lifecycle compilation plugins.',
    },
  ];

  // Initial single-row view shows top 4, expanding reveals all 7
  const displayedCerts = showAll ? certs : certs.slice(0, 4);

  return (
    <section id="certifications" className="py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <h2 className="section-title font-['Montserrat',sans-serif]">
              Certifications &amp; Training
            </h2>
            <p className="text-sm font-mono text-zinc-400 mt-1">
              Verified credentials across Anthropic AI, Java OOP, Google Cloud GenAI, React, JavaScript, and Maven.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 font-semibold">
              {certs.length} Verified Credentials
            </span>
          </div>
        </div>

        {/* Clean, Perfectly Aligned Single-Row / Expanded Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl overflow-hidden bg-zinc-950/90 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl"
            >
              <div>
                {/* Proportioned Preview Frame */}
                <div
                  onClick={() => onSelectCertificate(cert)}
                  className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/80 cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-xs backdrop-blur-xs">
                    <Eye className="w-3.5 h-3.5 text-indigo-400" /> Enlarge
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 border border-zinc-700 text-zinc-300 font-semibold">
                      {cert.badge}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white font-['Montserrat',sans-serif] line-clamp-2 group-hover:text-indigo-300 transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mt-1.5">
                    <span>{cert.issuer}</span>
                    <span className="text-zinc-500">{cert.issued}</span>
                  </div>
                  {cert.code && (
                    <span className="text-[10px] font-mono text-zinc-500 mt-1 block">
                      Code: {cert.code}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Link */}
              <div className="p-4 pt-0">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 text-zinc-200 hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3 h-3 text-indigo-400" />
                  <span>View Credential</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sleek View More / Show Less Toggle Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-indigo-500 text-zinc-200 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer shadow-lg hover:shadow-indigo-500/10"
          >
            <span>{showAll ? 'Show Less (Initial Row)' : `View All Certificates (${certs.length})`}</span>
            {showAll ? <ChevronUp className="w-4 h-4 text-indigo-400" /> : <ChevronDown className="w-4 h-4 text-indigo-400" />}
          </button>
        </div>
      </div>
    </section>
  );
}
