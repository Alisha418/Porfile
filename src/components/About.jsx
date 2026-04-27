import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'
import { about } from '../data/portfolioData'

function About() {
  return (
    <MotionSection id="about" className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-700/70 bg-slate-900/50 p-8 backdrop-blur-sm">
        <SectionHeading title="About Me" subtitle="Professional Summary" />
        <p className="text-center text-base leading-relaxed text-slate-300 md:text-lg">{about}</p>
      </div>
    </MotionSection>
  )
}

export default About
