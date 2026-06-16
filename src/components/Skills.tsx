import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Layers, Wrench, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';
import { fadeUp } from '../lib/motion';

const categories = [
  {
    key: 'languages' as const,
    label: 'Languages',
    icon: Code2,
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    iconColor: 'text-blue-500',
    tagClass: 'tag-blue',
  },
  {
    key: 'frameworks' as const,
    label: 'Frameworks & Libraries',
    icon: Layers,
    bg: 'bg-sage-50',
    border: 'border-sage-100',
    iconColor: 'text-sage-500',
    tagClass: 'tag-sage',
  },
  {
    key: 'tools' as const,
    label: 'Tools & Platforms',
    icon: Wrench,
    bg: 'bg-lavender-50',
    border: 'border-lavender-100',
    iconColor: 'text-lavender-500',
    tagClass: 'tag-lavender',
  },
  {
    key: 'learning' as const,
    label: 'Currently Learning',
    icon: Sparkles,
    bg: 'bg-cream-100',
    border: 'border-cream-300',
    iconColor: 'text-neutral-500',
    tagClass: 'tag-cream',
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="section-label">Technical proficiency</p>
          <h2 className="section-title">Skills</h2>
          <p className="mt-3 text-neutral-500 max-w-xl">
            Technologies I work with regularly — and ones I'm actively
            exploring.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                variants={fadeUp(0.1 + i * 0.07)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className={`rounded-3xl p-7 border ${cat.bg} ${cat.border} hover:shadow-card hover:-translate-y-0.5 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-xl bg-white/70 ${cat.iconColor}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-700">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.skills[cat.key].map((skill) => (
                    <span key={skill} className={cat.tagClass}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={fadeUp(0.45)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-8 text-center text-xs text-neutral-400"
        >
          "Currently learning" items are ones I'm actively studying in projects
          or coursework.
        </motion.p>
      </div>
    </section>
  );
}
