import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <MotionSection id="experience" className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Experience" subtitle="Career Timeline" />
        <div className="relative mx-auto max-w-3xl border-l border-indigo-500/30 pl-8">
          {experience.map((item) => (
            <article key={item.role} className="relative mb-10">
              <span className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-indigo-500 shadow-glow" />
              <p className="text-sm font-medium text-indigo-200">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{item.role}</h3>
              <p className="text-sm text-slate-300">{item.company}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default Experience
