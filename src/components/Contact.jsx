import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

function Contact() {
  return (
    <MotionSection id="contact" className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-700/60 bg-gradient-to-r from-indigo-900/25 to-blue-900/20 p-8">
        <SectionHeading title="Contact" subtitle="Let's Connect" />
        <div className="grid gap-4 text-center text-slate-200 sm:grid-cols-2">
          <a className="rounded-xl border border-slate-600/60 p-4 transition hover:border-indigo-300" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="rounded-xl border border-slate-600/60 p-4 transition hover:border-blue-300" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
          <a
            className="rounded-xl border border-slate-600/60 p-4 transition hover:border-indigo-300"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-xl border border-slate-600/60 p-4 transition hover:border-blue-300"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </MotionSection>
  )
}

export default Contact
