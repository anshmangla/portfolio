import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { contactData } from '../data';
import { Toast, GithubIcon, LinkedinIcon } from './ui';
import { cardReveal } from '../animations/variants';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const directActions = [
    {
      label: 'Email Directly',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      icon: <Mail className="w-5 h-5 text-[#3B82F6]" />,
      primary: true
    },
    {
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: contactData.linkedin,
      icon: <LinkedinIcon className="w-5 h-5 text-sky-400" />,
      primary: false
    },
    {
      label: 'GitHub',
      value: 'Check Repositories',
      href: contactData.github,
      icon: <GithubIcon className="w-5 h-5 text-white" />,
      primary: false
    },
    {
      label: 'Resume PDF',
      value: 'Download Full Spec',
      href: contactData.resumeUrl,
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#0A0A0A]/80">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-white/15 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1D4ED8]/10 rounded-full blur-[110px] pointer-events-none" />

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] pulse-glow" />
            <span>Available for New Opportunities</span>
          </div>

          {/* Large Heading */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-white tracking-tight leading-tight max-w-3xl">
            Let's Build Something.
          </h2>

          {/* Short Paragraph */}
          <p className="mt-5 text-lg sm:text-xl text-[#A3A3A3] leading-relaxed max-w-2xl font-normal">
            {contactData.status} Whether you're recruiting for full-time AI/ML engineering roles, building generative AI products, or scaling intelligent data workflows, let's connect directly.
          </p>

          {/* Direct Action Buttons Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {directActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  action.primary
                    ? 'bg-[#3B82F6]/15 border-[#3B82F6]/40 hover:bg-[#3B82F6]/25 hover:border-[#3B82F6] shadow-lg shadow-[#3B82F6]/10'
                    : 'bg-[#141414] border-white/10 hover:border-white/30 hover:bg-[#1A1A1A]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  <div>
                    <span className="text-xs text-[#A3A3A3] block uppercase font-mono tracking-wider">
                      {action.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold font-heading text-white block mt-0.5 group-hover:text-[#3B82F6] transition-colors">
                      {action.value}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#A3A3A3] group-hover:text-white transition-colors flex-shrink-0 ml-2" />
              </a>
            ))}

            {/* Quick Copy Email Card */}
            <button
              onClick={handleCopyEmail}
              className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#3B82F6]/50 hover:bg-[#1A1A1A] transition-all duration-300 flex items-center justify-between group text-left w-full"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 group-hover:scale-110 transition-transform">
                  {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-[#3B82F6]" />}
                </div>
                <div>
                  <span className="text-xs text-[#A3A3A3] block uppercase font-mono tracking-wider">
                    Quick Copy
                  </span>
                  <span className="text-sm sm:text-base font-bold font-heading text-white block mt-0.5 group-hover:text-[#3B82F6] transition-colors">
                    Copy Email Address
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#A3A3A3] group-hover:text-white transition-colors">
                {copied ? 'Copied!' : 'Copy'}
              </span>
            </button>
          </div>

          {/* Footer location info inside card */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#A3A3A3]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Location: {contactData.location}</span>
            </div>
            <span>Encrypted Response Latency: &lt; 24 Hours</span>
          </div>
        </motion.div>
      </div>

      {showToast && (
        <Toast
          message={`Email address copied to clipboard (${contactData.email})`}
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
};
