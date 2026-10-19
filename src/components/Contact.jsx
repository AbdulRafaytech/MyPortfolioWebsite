import React, { useState } from 'react';
import { Mail, Send, Copy, Check, CheckCircle2, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact({ onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | fallback

  const email = 'rafaydev7@gmail.com';
  const phone = '+92 307 5468990';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast('Email copied to clipboard');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    if (onShowToast) onShowToast('Phone number copied to clipboard');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rafaydev7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio Inquiry from ${formState.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        if (onShowToast) onShowToast('Message delivered successfully!');
      } else {
        setStatus('fallback');
        window.location.href = `mailto:${email}?subject=Portfolio Inquiry from ${encodeURIComponent(
          formState.name
        )}&body=${encodeURIComponent(formState.message)}`;
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('fallback');
      window.location.href = `mailto:${email}?subject=Portfolio Inquiry from ${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(formState.message)}`;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase text-emerald-400 tracking-widest font-semibold flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" /> Communications
            </span>
          </div>
          <h2 className="section-title font-['Montserrat',sans-serif]">
            Get in Touch
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Open for software internships, backend engineering discussions, and full-stack projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          {/* Left Column: Redesigned 2x2 Modern Connection Hub */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* WhatsApp & Phone */}
              <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block font-semibold">WhatsApp &amp; Phone</span>
                  <a
                    href="https://wa.me/923075468990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white hover:text-emerald-400 font-mono transition-colors block mt-0.5 truncate"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Direct Gmail */}
              <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-rose-500/50 transition-all flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block font-semibold">Direct Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs font-bold text-white hover:text-rose-300 font-mono transition-colors block mt-0.5 truncate"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* LinkedIn Profile */}
              <a
                href="https://www.linkedin.com/in/abdulrafaytech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-indigo-500/50 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block font-semibold">Professional Network</span>
                  <span className="text-xs font-bold text-white group-hover:text-indigo-300 font-mono transition-colors block mt-0.5 truncate">
                    abdulrafaytech
                  </span>
                </div>
              </a>

              {/* GitHub Profile */}
              <a
                href="https://github.com/AbdulRafaytech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block font-semibold">Source Code</span>
                  <span className="text-xs font-bold text-white group-hover:text-zinc-200 font-mono transition-colors block mt-0.5 truncate">
                    AbdulRafaytech
                  </span>
                </div>
              </a>
            </div>

            {/* Availability Telemetry Card */}
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <p className="text-xs text-zinc-300 font-['Inter',sans-serif] leading-relaxed">
                Currently actively reviewing opportunities for <strong className="text-white">Summer &amp; Fall 2026</strong> Software Engineering internships.
              </p>
            </div>
          </div>

          {/* Right Column: Attractive, Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/90 border border-zinc-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-900">
                <h3 className="text-base font-bold text-white font-['Montserrat',sans-serif]">
                  Send a Direct Message
                </h3>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  Direct Inbox Dispatch
                </span>
              </div>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white font-['Montserrat',sans-serif]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-['Inter',sans-serif] max-w-md mx-auto">
                    Thank you for reaching out. Your message has been dispatched directly to <strong className="text-white font-mono">rafaydev7@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-xs font-mono text-zinc-300 border border-zinc-750 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1.5 font-medium">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all font-['Inter',sans-serif]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1.5 font-medium">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all font-['Inter',sans-serif]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1.5 font-medium">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Abdul, I saw your work on backend systems and would like to discuss..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all font-['Inter',sans-serif] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                      Fast response guaranteed
                    </span>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
