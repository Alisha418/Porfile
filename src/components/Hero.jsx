import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/portfolioData'
import { useTypingEffect } from '../hooks/useTypingEffect'

function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const { displayed: typedTitle } = useTypingEffect(profile.title, {
    speed: 48,
    startDelay: 450,
  })

  return (
    <motion.section
      id="hero"
      className="relative overflow-hidden px-6 pt-24 pb-20 md:px-10"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-200"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
        >
          Available for Backend and Full Stack Roles
        </motion.p>
        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">{profile.name}</h1>
        <p className="mt-4 min-h-[1.75rem] text-lg font-medium text-blue-200 md:min-h-[2rem] md:text-xl">
          <span aria-label={profile.title}>{typedTitle}</span>
          <span
            className="animate-cursor-blink ml-1 inline-block h-[1.15em] w-[3px] translate-y-[3px] rounded-sm bg-blue-300 align-middle md:h-[1.2em]"
            aria-hidden
          />
        </p>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 md:text-lg"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <a
            href={profile.resumePath}
            download={profile.resumeDownloadName}
            className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="rounded-full border border-indigo-300/40 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-300 hover:bg-slate-800/80"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-blue-300/40 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-300 hover:bg-slate-800/80"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
