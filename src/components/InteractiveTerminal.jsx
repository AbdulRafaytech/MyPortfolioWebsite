import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'Abdul Rafay Interactive Cyber CLI [Version 2.7.0]', type: 'system' },
    { text: 'Type "help" to list available commands or "whoami" to view profile.', type: 'info' },
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `> ${input}`, type: 'user' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: 'Available Commands:\n  whoami      - View developer positioning & bio\n  skills      - List technical skills & cloud tools\n  projects    - Show core projects & links\n  exp         - View work and internship experience\n  certs       - List certifications\n  education   - Academic degree & CGPA\n  contact     - Email and social coordinates\n  clear       - Clear terminal window\n  exit        - Close terminal',
          type: 'output',
        });
        break;

      case 'whoami':
        newHistory.push({
          text: 'Abdul Rafay\nPosition: CS Student → Aspiring Full-Stack Developer\nInterest: Backend & AI-Assisted Workflows\nUniversity: NUML, Lahore (2024-2028)\nCGPA: 3.38 / 4.00',
          type: 'output',
        });
        break;

      case 'skills':
        newHistory.push({
          text: 'LANGUAGES: JavaScript (ES6+), Java, Python, C++, SQL\nFRONTEND: HTML5, CSS3, Bootstrap, Responsive Design, React\nBACKEND: Node.js, Express.js, REST APIs, MongoDB, MySQL, SQLite\nCLOUD & TOOLS: Vercel Deployment, Git/GitHub, OOP, DSA, IntelliJ IDEA, Maven',
          type: 'output',
        });
        break;

      case 'projects':
        newHistory.push({
          text: '1. B2B Courier Dispatch System (Java / OOP Architecture / REST / MySQL / Maven)\n2. AI Smart Parking System (Python / Computer Vision)\n3. SaaS Authentication Module (React / JavaScript / Vercel)\n4. RTech HR Dashboard (React / JavaScript / Vercel)\n5. RTech Store (React / JavaScript / Vercel)',
          type: 'output',
        });
        break;

      case 'exp':
        newHistory.push({
          text: '• FlyRank AI - Backend AI Engineering Intern (Aug 2026 – Sep 2026)\n• CodeAlpha - Back End Developer Intern (Aug 2026 – Sep 2026)\n• CodeAlpha - Frontend Developer Intern (Aug 2026 – Sep 2026)\n• InternGrow - Frontend Developer Intern (Aug 2026 – Oct 2026)\n• HexSoftwares - Web Development Intern (Aug 2026 – Sep 2026)',
          type: 'output',
        });
        break;

      case 'certs':
        newHistory.push({
          text: '• AI Fluency: Framework & Foundations (Anthropic Academy)\n• JavaScript for Beginners (Simplilearn ID: 10629332)\n• Intro to Front End Development (Simplilearn ID: 10619336)\n• OOPs in Java (Simplilearn Code: 10635523)\n• ReactJS for Beginners (Simplilearn Code: 10636877)\n• Learn Apache Maven Course (Simplilearn Code: 10636904)\n• Introduction to Generative AI (Google Cloud & Simplilearn Code: 10624150)',
          type: 'output',
        });
        break;

      case 'education':
        newHistory.push({
          text: 'BS Computer Science\nNUML, Lahore (2024 – 2028)\nCGPA: 3.38 / 4.00',
          type: 'output',
        });
        break;

      case 'contact':
        newHistory.push({
          text: 'Email: rafaydev7@gmail.com\nLinkedIn: https://www.linkedin.com/in/abdulrafaytech\nGitHub: https://github.com/AbdulRafaytech',
          type: 'output',
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for available commands.`,
          type: 'error',
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl h-[460px] rounded-2xl border border-zinc-800 shadow-2xl flex flex-col bg-[#060912] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="text-xs font-mono text-zinc-300 ml-2 font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
              abdul-rafay@terminal:~$
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Log */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2 text-zinc-300">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                item.type === 'user'
                  ? 'text-white font-bold'
                  : item.type === 'system'
                  ? 'text-zinc-400'
                  : item.type === 'error'
                  ? 'text-rose-400'
                  : 'text-zinc-300'
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Terminal Prompt Input */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center gap-2 font-mono text-xs">
          <span className="text-white font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type a command (e.g. whoami, skills, projects, certs)..."
            className="flex-1 bg-transparent border-none text-white focus:outline-none"
          />
          <button onClick={handleCommand} className="text-zinc-500 hover:text-white cursor-pointer">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
