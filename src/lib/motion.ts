import type { Variants } from 'framer-motion';

/**
 * Shared fade-up animation variant used across all sections.
 * Accepts an optional delay in seconds.
 */
export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      delay,
    },
  },
});
