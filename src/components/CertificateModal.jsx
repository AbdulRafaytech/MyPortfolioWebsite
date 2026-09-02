import React from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] glass-panel rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl flex flex-col bg-[#080c16]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-heading">{certificate.name}</h3>
              <p className="text-xs text-slate-400 font-mono">Issuer: {certificate.issuer} · {certificate.issued}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/40">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={certificate.name}
              className="max-h-[68vh] w-auto max-w-full rounded-lg shadow-2xl border border-white/10 object-contain"
            />
          ) : (
            <div className="py-20 text-center text-slate-400">
              <ShieldCheck className="w-16 h-16 text-cyan-400 mx-auto mb-3" />
              <p className="font-heading font-bold text-lg text-white">Direct Verified Certificate</p>
              <p className="text-xs font-mono mt-1">Credential code: {certificate.code || 'Verified'}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-cyan-400">
            {certificate.code ? `Credential Code: ${certificate.code}` : 'Authenticated Completion'}
          </span>

          <div className="flex items-center gap-3">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Verify Official Credential</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
