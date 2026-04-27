import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <MotionSection id="skills" className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills" subtitle="Technology Stack" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skillGroup) => (
            <article
              key={skillGroup.category}
              className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/70 hover:bg-slate-900/70"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">{skillGroup.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-600/70 bg-slate-800/70 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default Skills
