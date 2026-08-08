import { ArrowUpRight, Sparkle } from 'lucide-react'
import { Github } from './BrandIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile, projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Things I built end to end — from the API layer up to the interface people actually touch."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="glass card-hover group relative h-full overflow-hidden rounded-2xl p-7 sm:p-8">
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl transition-opacity duration-500 group-hover:opacity-80`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-violet-300">
                        {p.subtitle}
                      </p>
                    </div>
                    <Sparkle
                      size={18}
                      className="shrink-0 text-slate-600 transition-colors group-hover:text-violet-300"
                    />
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-300">{p.blurb}</p>

                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[13px] leading-relaxed text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink-950 transition-all hover:bg-violet-200 hover:shadow-[0_0_24px_-6px] hover:shadow-violet-400"
                      >
                        Live demo
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-[13px] font-semibold text-slate-200 transition-colors hover:border-violet-400/50 hover:text-violet-200"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-violet-300"
          >
            See more on GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
