import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const heroFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-12"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Text */}
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={heroFadeUp}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-blue-400" />
              <span className="section-label !mb-0">Portfolio</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.2}
              variants={heroFadeUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-800 leading-[1.1] mb-5"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={heroFadeUp}
              className="text-blue-500 font-medium text-lg mb-6 tracking-wide"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={heroFadeUp}
              className="text-neutral-600 text-lg leading-relaxed mb-10 max-w-xl"
            >
              {profile.tagline} {profile.heroDescription}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.5}
              variants={heroFadeUp}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.6}
              variants={heroFadeUp}
              className="flex items-center gap-5"
            >
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-700 transition-colors p-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-700 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-neutral-400 hover:text-neutral-700 transition-colors p-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <span className="h-4 w-px bg-neutral-200" />
              <span className="text-xs text-neutral-400 font-medium">
                {profile.location}
              </span>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative w-72 h-80">
              {/* Decorative background squares */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-blue-100/60 border border-blue-200/40" />
              <div className="absolute -top-2 -right-2 w-full h-full rounded-3xl bg-sage-100/40 border border-sage-200/30" />
              {/* Photo container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-card border border-neutral-100">
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
              </div>
              {/* Availability badge */}
              {profile.availability.isAvailable && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-card border border-neutral-100 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
                  <span className="text-xs font-medium text-neutral-600">
                    {profile.availability.badgeText}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center mt-20"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
