import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-200/60 bg-cream-100/50">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif font-medium text-neutral-700 text-lg">
              {profile.footer.name}
            </p>
            <p className="text-xs text-neutral-400 mt-0.5">
              {profile.footer.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-neutral-400 hover:text-neutral-700 transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <span className="w-px h-4 bg-neutral-200" />
            <a
              href="#hero"
              className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-700 transition-colors p-2"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
              Top
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200/40">
          <p className="text-center text-xs text-neutral-400">
            Built with React, TypeScript & Tailwind CSS.{' '}
            <span className="text-neutral-300">©</span>{' '}
            {new Date().getFullYear()} {profile.footer.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
