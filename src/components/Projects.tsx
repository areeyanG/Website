import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { fadeUp } from '../lib/motion';

const tagColors = ['tag-blue', 'tag-sage', 'tag-lavender', 'tag-cream'];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <p className="mt-3 text-neutral-500 max-w-xl">
            A selection of things I've worked on — from interpreters to
            productivity tools to collaborative apps.
          </p>
        </motion.div>

        {/* Featured project */}
        {featured.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="mb-8 group"
          >
            <div className="relative rounded-3xl overflow-hidden bg-blue-50 border border-blue-100 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                {/* Image */}
                <div className="relative h-56 md:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/20" />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                        <Star size={11} />
                        Featured Project
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-neutral-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span key={t} className={tagColors[i % tagColors.length]}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !py-2 !px-4 !text-xs"
                    >
                      <Github size={14} />
                      View Code
                    </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !py-2 !px-4 !text-xs"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp(0.15 + i * 0.08)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="card group flex flex-col"
            >
              <div className="relative h-36 rounded-2xl overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
              </div>

              <h3 className="font-serif text-lg font-medium text-neutral-800 mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.slice(0, 4).map((t, tagIdx) => (
                  <span key={t} className={tagColors[tagIdx % tagColors.length]}>
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="tag-cream">+{project.tech.length - 4}</span>
                )}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-neutral-100">
                {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-800 transition-colors"
                >
                  <Github size={14} />
                  Source
                </a>
                )}
                {project.demo && (
                  <>
                    <span className="text-neutral-200">·</span>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-10 text-center"
        >
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
