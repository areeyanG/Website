import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Cpu, Compass } from 'lucide-react';
import { profile } from '../data/profile';
import { fadeUp } from '../lib/motion';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">
          {/* Bio */}
          <div>
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="space-y-5 text-neutral-600 leading-relaxed text-base mb-10"
            >
              {profile.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="text-neutral-700 font-medium">{profile.goal}</p>
            </motion.div>

            {/* Quick cards */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid sm:grid-cols-3 gap-4"
            >
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <BookOpen size={20} className="text-blue-500 mb-3" />
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  Education
                </p>
                <p className="text-sm font-medium text-neutral-700">
                  {profile.quickFacts.education.institution}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {profile.quickFacts.education.degree}
                </p>
              </div>
              <div className="bg-sage-50 rounded-2xl p-5 border border-sage-100">
                <Cpu size={20} className="text-sage-500 mb-3" />
                <p className="text-xs font-semibold text-sage-600 uppercase tracking-wide mb-1">
                  Focus
                </p>
                <p className="text-sm font-medium text-neutral-700">
                  {profile.quickFacts.focus.area}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {profile.quickFacts.focus.detail}
                </p>
              </div>
              <div className="bg-lavender-50 rounded-2xl p-5 border border-lavender-100">
                <Compass size={20} className="text-lavender-500 mb-3" />
                <p className="text-xs font-semibold text-lavender-600 uppercase tracking-wide mb-1">
                  Status
                </p>
                <p className="text-sm font-medium text-neutral-700">
                  {profile.quickFacts.status.label}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {profile.quickFacts.status.detail}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="bg-white rounded-3xl p-7 shadow-soft border border-neutral-100 sticky top-24">
              {/* Interests */}
              <h3 className="text-sm font-semibold text-neutral-700 mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-blue-300" />
                Academic Interests
              </h3>
              <ul className="space-y-3">
                {profile.interests.map((interest, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-neutral-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                    {interest}
                  </li>
                ))}
              </ul>

              {/* Currently reading */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-700 mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-sage-300" />
                  Currently Reading
                </h3>
                <div className="space-y-3">
                  {profile.reading.map((book, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-8 rounded-full bg-sage-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-neutral-700">
                          {book.title}
                        </p>
                        <p className="text-xs text-neutral-400">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
