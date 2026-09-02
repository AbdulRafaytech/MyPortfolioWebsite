import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] py-10 text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Strict required copyright */}
        <div className="text-zinc-400 font-medium">
          © 2026 Abdul Rafay. All Rights Reserved.
        </div>

        <div className="flex items-center gap-6">
          <span className="text-zinc-600">Built with React · Vite · Tailwind CSS</span>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer text-zinc-400"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
