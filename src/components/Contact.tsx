import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { fadeUp } from '../lib/motion';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      description: 'Best for general inquiries and opportunities',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: profile.contact.githubHandle,
      href: profile.contact.github,
      description: 'Check out my open-source work',
      color: 'text-neutral-600',
      bg: 'bg-neutral-50',
      border: 'border-neutral-200',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: profile.contact.linkedinName,
      href: profile.contact.linkedin,
      description: 'Connect professionally',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">
          {/* Left — intro */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <p className="text-neutral-600 leading-relaxed mb-6">
              I'm always open to conversations about internships, research
              collaborations, interesting projects, or just a good
              programming-language debate.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The best way to reach me is by email — I typically respond within
              24 hours.
            </p>

            {/* Resume download */}
            <a
              href={profile.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center"
              aria-label="Download resume"
            >
              <FileText size={16} />
              Download Resume
            </a>

            {/* Availability banner */}
            {profile.availability.isAvailable && (
              <div className="mt-8 p-4 bg-sage-50 border border-sage-100 rounded-2xl flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-sage-700">
                    {profile.availability.headline}
                  </p>
                  <p className="text-xs text-sage-600 mt-0.5">
                    {profile.availability.detail}
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right — contact cards */}
          <div className="space-y-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  variants={fadeUp(0.15 + i * 0.08)}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  className={`flex items-center gap-5 p-5 rounded-2xl border ${link.bg} ${link.border} group hover:shadow-card hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <div className={`p-3 rounded-xl bg-white shadow-soft ${link.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-neutral-800 truncate">
                      {link.value}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-300 group-hover:text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
