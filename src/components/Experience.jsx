import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Experience"
          description="Two software development internships turning manual factory-floor processes into automated tools."
        />

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute top-2 bottom-2 left-4 w-px bg-gradient-to-b from-violet-500/60 via-cyan-400/40 to-transparent sm:left-5" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1} from="right" className="relative pl-12 sm:pl-16">
                <span className="glass absolute top-6 left-0 grid h-9 w-9 place-items-center rounded-full text-violet-300 sm:h-10 sm:w-10">
                  <Briefcase size={16} />
                </span>

                <article className="glass card-hover rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-violet-300">{job.role}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs text-slate-400 sm:items-end">
                      <span className="font-mono inline-flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono rounded-md bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-300 ring-1 ring-cyan-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
