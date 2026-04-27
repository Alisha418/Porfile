import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

function Projects() {
  return (
    <MotionSection id="projects" className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="Selected Work" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/45 transition duration-300 hover:-translate-y-1 hover:border-blue-400/70"
            >
              {project.image ? (
                <div className="aspect-video w-full overflow-hidden border-b border-slate-700/50 bg-slate-800/50">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-500 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-indigo-300 hover:text-indigo-200"
                >
                  GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-500 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-blue-300 hover:text-blue-200"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default Projects
