import React from 'react';
import { Mail } from 'lucide-react';
import { contactData } from '../data';
import { GithubIcon, LinkedinIcon } from './ui';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', href: contactData.github, icon: <GithubIcon className="w-4 h-4" /> },
    { label: 'LinkedIn', href: contactData.linkedin, icon: <LinkedinIcon className="w-4 h-4" /> },
    { label: 'Email', href: `mailto:${contactData.email}`, icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <footer className="py-12 border-t border-white/[0.06] bg-[#0A0A0A] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#A3A3A3]">
        {/* Left: Designed & Built */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
          <span className="font-heading font-semibold text-white">Ansh Mangla</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Designed & Built for AI Engineering Excellence.</span>
        </div>

        {/* Center/Right: Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              className="p-2.5 rounded-xl bg-[#141414] border border-white/10 text-[#A3A3A3] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#1A1A1A] transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="text-xs font-mono text-[#A3A3A3]">
          &copy; {currentYear} Ansh Mangla. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
