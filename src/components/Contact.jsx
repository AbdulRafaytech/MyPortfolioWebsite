import React, { useState } from 'react';
import { Mail, Send, Copy, Check, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const email = 'rafaydev7@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onShowToast) onShowToast('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2500);
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
          _subject: `Portfolio Contact from ${formState.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        if (onShowToast) onShowToast('Message delivered successfully!');
      } else {
        // Fallback to mailto if network blocked
        setStatus('fallback');
        window.location.href = `mailto:${email}?subject=Portfolio Contact from ${encodeURIComponent(
          formState.name
        )}&body=${encodeURIComponent(formState.message)}`;
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('fallback');
      window.location.href = `mailto:${email}?subject=Portfolio Contact from ${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(formState.message)}`;
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Clean Bold */}
        <div className="text-left mb-12">
          <h2 className="section-title font-sans">
            Get in Touch
          </h2>
          <p className="text-sm font-mono text-zinc-500 mt-1">
            Open for internships, backend engineering discussions, and software projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          {/* Direct Links */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email */}
            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-900 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-zinc-500 block">Direct Email</span>
                  <a
                    href="mailto:rafaydev7@gmail.com"
                    className="text-sm font-bold text-white hover:text-zinc-300 font-mono transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdulrafaytech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all flex items-center gap-3.5 group block"
            >
              <div className="p-2.5 rounded-lg bg-zinc-900 text-white group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-500 block">LinkedIn Profile</span>
                <span className="text-sm font-bold text-white group-hover:text-zinc-300 font-mono transition-colors">
                  linkedin.com/in/abdulrafaytech
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AbdulRafaytech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all flex items-center gap-3.5 group block"
            >
              <div className="p-2.5 rounded-lg bg-zinc-900 text-white group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-500 block">GitHub Profile</span>
                <span className="text-sm font-bold text-white group-hover:text-zinc-300 font-mono transition-colors">
                  github.com/AbdulRafaytech
                </span>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-zinc-950 border border-zinc-900">
              <h3 className="text-lg font-bold text-white font-sans mb-4">Send a Message</h3>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white font-sans">Message Sent Successfully!</h4>
                  <p className="text-sm text-zinc-400 font-sans max-w-md mx-auto">
                    Thank you for reaching out. Your message has been dispatched directly to <strong className="text-white font-mono">rafaydev7@gmail.com</strong>. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-sans text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-sans text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Abdul, I'd like to discuss an opportunity / project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-sans text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
