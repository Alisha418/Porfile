import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fade/slide-in when section enters viewport; skips animation if user prefers reduced motion.
 */
export default function MotionSection({ id, className = '', children, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  const variants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0 },
      }

  return (
    <motion.section
      id={id}
      className={className}
      initial={prefersReducedMotion ? undefined : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, margin: '-72px', amount: 0.25 }}
      variants={variants}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  )
}
