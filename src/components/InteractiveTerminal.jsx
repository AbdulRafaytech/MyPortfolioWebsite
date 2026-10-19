import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Check, HelpCircle } from 'lucide-react';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      text: '⚡ Abdul Rafay Developer CLI [v2.9.0 - Production]',
      type: 'header',
    },
    {
      text: 'Type a command below or click any quick-action shortcut button to explore:',
      type: 'info',
    },
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

  const quickCommands = [
    { cmd: 'whoami', label: 'whoami', color: 'hover:border-amber-500/60 hover:text-amber-300' },
    { cmd: 'skills', label: 'skills', color: 'hover:border-emerald-500/60 hover:text-emerald-300' },
    { cmd: 'projects', label: 'projects', color: 'hover:border-indigo-500/60 hover:text-indigo-300' },
    { cmd: 'exp', label: 'exp', color: 'hover:border-teal-500/60 hover:text-teal-300' },
    { cmd: 'education', label: 'education', color: 'hover:border-sky-500/60 hover:text-sky-300' },
    { cmd: 'contact', label: 'contact', color: 'hover:border-rose-500/60 hover:text-rose-300' },
    { cmd: 'clear', label: 'clear', color: 'hover:border-zinc-500 hover:text-zinc-300' },
  ];

  const executeCommand = (cmdText) => {
    const cmd = cmdText.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `user@portfolio:~$ ${cmdText}`, type: 'prompt' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE COMMANDS:
  whoami      - Developer positioning & biography
  skills      - Technical skills, stack architecture & tooling
  projects    - Production projects, live links & repos
  exp         - Industry internships & verified deliveries
  education   - Academic degree, NUML Lahore & CGPA
  contact     - Direct WhatsApp, email, LinkedIn & GitHub
  clear       - Clear screen
  exit        - Close terminal`,
          type: 'help',
        });
        break;

      case 'whoami':
        newHistory.push({
          text: `● NAME        : Abdul Rafay
● TITLE       : CS Student · Aspiring Full-Stack Developer
● DOMAINS     : Backend Engineering, Modern APIs, AI-Assisted Workflows
● ACADEMICS   : NUML Lahore (2024 – 2028), CGPA 3.38 / 4.00
● PHILOSOPHY  : Architecting scalable server infrastructure & reactive user interfaces.`,
          type: 'whoami',
        });
        break;

      case 'skills':
        newHistory.push({
          text: `STACK ARCHITECTURE:
  [LANGUAGES]    Java (OOP & Patterns), JavaScript (ES6+), Python, SQL, C++
  [BACKEND]      Node.js, Express.js, RESTful APIs, JWT Auth, Middleware
  [DATABASES]    MySQL Relational, MongoDB NoSQL, SQLite, Schema Normalization
  [FRONTEND]     React 19, Tailwind CSS v4, Responsive Architecture
  [DEVOPS/CLOUD] Vercel Deployment, Git/GitHub, Automated Workflows`,
          type: 'skills',
        });
        break;

      case 'projects':
        newHistory.push({
          text: `CORE SOFTWARE DELIVERIES:
  1. AI Smart Parking System (Python / Computer Vision / Flask)
  2. B2B Courier Dispatch & Fleet (Java OOP / MySQL / Enterprise Routing)
  3. SaaS Authentication Module (React / OTP Verification / Vercel)
  4. RTech HR Analytics Dashboard (React / Data Visualization / Vercel)
  5. RTech Store Image Archive (React / Category Filtering / Vercel)`,
          type: 'projects',
        });
        break;

      case 'exp':
        newHistory.push({
          text: `VERIFIED INDUSTRY INTERNSHIPS:
  1. FlyRank AI - Backend AI Engineering Intern (Aug 2026 – Sep 2026)
     • Automated backend pipelines with Python scripts
     • Optimized server-side logic and structured REST API endpoints

  2. InternGrow - Frontend Developer Intern (Aug 2026 – Oct 2026)
     • Architected RTech SaaS Authentication system with OTP routing
     • Built interactive HR Analytics dashboard and live deployed on Vercel`,
          type: 'exp',
        });
        break;

      case 'education':
        newHistory.push({
          text: `ACADEMIC CREDENTIALS:
  • Degree      : Bachelor of Science in Computer Science (BSCS)
  • University  : National University of Modern Languages (NUML), Lahore
  • Timeline    : 2024 – 2028 (Undergraduate)
  • Standing    : CGPA 3.38 / 4.00
  • Focus Areas : Algorithms & Data Structures, OOP, Database Systems, Web Engineering`,
          type: 'education',
        });
        break;

      case 'contact':
        newHistory.push({
          text: `COORDINATES & COMMUNICATIONS:
  • Email       : rafaydev7@gmail.com
  • WhatsApp    : +92 307 5468990 (Direct Chat)
  • LinkedIn    : https://www.linkedin.com/in/abdulrafaytech
  • GitHub      : https://github.com/AbdulRafaytech
  • Location    : Lahore, PK (Open to Remote)`,
          type: 'contact',
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
          text: `Command not found: "${cmd}". Type "help" or click any shortcut button above.`,
          type: 'error',
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl h-[520px] rounded-2xl border border-zinc-800 shadow-2xl flex flex-col bg-[#0b0f17] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar with macOS style dots */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d121c] border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block cursor-pointer" onClick={onClose}></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="text-xs font-mono text-zinc-300 ml-2 font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>abdul-rafay@terminal:~$</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">ESC to close</span>
            <button
              onClick={onClose}
              className="p-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Action Shortcut Buttons (High Usability) */}
        <div className="px-4 py-2 bg-zinc-950/80 border-b border-zinc-900 flex items-center gap-1.5 overflow-x-auto">
          <span className="text-[10px] font-mono uppercase text-zinc-400 font-semibold mr-1 flex-shrink-0">
            Quick Actions:
          </span>
          {quickCommands.map((q) => (
            <button
              key={q.cmd}
              onClick={() => executeCommand(q.cmd)}
              className={`px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 transition-colors cursor-pointer flex-shrink-0 ${q.color}`}
            >
              {q.label}
            </button>
          ))}
        </div>

        {/* Terminal Output Log with Colorful Syntax Highlighting */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3 leading-relaxed">
          {history.map((item, idx) => {
            let textColor = 'text-zinc-300';
            if (item.type === 'header') textColor = 'text-amber-400 font-bold';
            else if (item.type === 'prompt') textColor = 'text-emerald-400 font-semibold';
            else if (item.type === 'info') textColor = 'text-zinc-400';
            else if (item.type === 'help') textColor = 'text-indigo-300';
            else if (item.type === 'whoami') textColor = 'text-teal-300';
            else if (item.type === 'skills') textColor = 'text-sky-300';
            else if (item.type === 'projects') textColor = 'text-amber-300';
            else if (item.type === 'exp') textColor = 'text-emerald-300';
            else if (item.type === 'education') textColor = 'text-purple-300';
            else if (item.type === 'contact') textColor = 'text-rose-300';
            else if (item.type === 'error') textColor = 'text-rose-400 font-medium';

            return (
              <div key={idx} className={`whitespace-pre-wrap ${textColor}`}>
                {item.text}
              </div>
            );
          })}
        </div>

        {/* Terminal Prompt Input Bar */}
        <div className="p-3 bg-[#0d121c] border-t border-zinc-800 flex items-center gap-2 font-mono text-xs">
          <span className="text-emerald-400 font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'projects', 'exp', 'whoami'..."
            className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-zinc-600 font-mono text-xs"
          />
          <button
            onClick={() => executeCommand(input)}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
