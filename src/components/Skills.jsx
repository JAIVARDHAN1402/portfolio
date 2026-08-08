import {
  BrainCircuit,
  CodeXml,
  Database,
  LayoutTemplate,
  Server,
  Wrench,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skills } from '../data'

const icons = {
  Code2: CodeXml,
  Layout: LayoutTemplate,
  Server,
  Database,
  Wrench,
  BrainCircuit,
}

const accents = {
  violet: 'text-violet-300 bg-violet-500/10 ring-violet-400/20',
  cyan: 'text-cyan-300 bg-cyan-500/10 ring-cyan-400/20',
  fuchsia: 'text-fuchsia-300 bg-fuchsia-500/10 ring-fuchsia-400/20',
  emerald: 'text-emerald-300 bg-emerald-500/10 ring-emerald-400/20',
  amber: 'text-amber-300 bg-amber-500/10 ring-amber-400/20',
  sky: 'text-sky-300 bg-sky-500/10 ring-sky-400/20',
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="The stack I reach for — from C++ data structures to shipping full-stack apps on Vercel."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[group.icon]
            const accent = accents[group.accent]

            return (
              <Reveal
                key={group.title}
                delay={i * 0.07}
                className="glass card-hover group rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ring-1 ${accent}`}>
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-slate-300 transition-colors group-hover:border-white/20 hover:!border-violet-400/50 hover:!text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
