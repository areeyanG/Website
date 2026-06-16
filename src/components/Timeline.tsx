import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Users } from 'lucide-react';
import { timeline } from '../data/projects';
import { fadeUp } from '../lib/motion';

const typeConfig = {
  education: {
    icon: GraduationCap,
    dot: 'bg-blue-400',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    label: 'Education',
    labelColor: 'text-blue-600',
    tagClass: 'tag-blue',
  },
  work: {
    icon: Briefcase,
    dot: 'bg-sage-400',
    border: 'border-sage-200',
    bg: 'bg-sage-50',
    label: 'Work',
    labelColor: 'text-sage-600',
    tagClass: 'tag-sage',
  },
  leadership: {
    icon: Users,
    dot: 'bg-lavender-400',
    border: 'border-lavender-200',
    bg: 'bg-lavender-50',
    label: 'Leadership',
    labelColor: 'text-lavender-600',
    tagClass: 'tag-lavender',
  },
} as const;

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">Education & Experience</h2>
          <p className="mt-3 text-neutral-500 max-w-xl">
            My academic journey, work experience, and involvement outside the
            classroom.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          variants={fadeUp(0.08)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-wrap gap-3 mb-12"
        >
          {Object.entries(typeConfig).map(([key, cfg]) => {
            const Icon = cfg.icon;
            return (
              <span
                key={key}
                className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${cfg.bg} ${cfg.labelColor} border ${cfg.border}`}
              >
                <Icon size={12} />
                {cfg.label}
              </span>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-sage-200 to-lavender-100 hidden sm:block" />

          <div className="space-y-6">
            {timeline.map((item, i) => {
              const cfg = typeConfig[item.type];
              const Icon = cfg.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp(0.12 + i * 0.08)}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  className="relative sm:pl-16"
                >
                  {/* Icon dot */}
                  <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-neutral-200 shadow-soft">
                    <Icon size={16} className={cfg.labelColor} />
                  </div>

                  {/* Card */}
                  <div className="card group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-serif text-lg font-medium text-neutral-800 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-500 mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs font-medium text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full border border-neutral-100 whitespace-nowrap">
                          {item.period}
                        </span>
                        <span
                          className={`flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${cfg.bg} ${cfg.labelColor} border ${cfg.border}`}
                        >
                          <Icon size={10} />
                          {cfg.label}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className={cfg.tagClass}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
