import { GraduationCap, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education, profile } from '../data'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About me" title="A quick introduction" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal from="right" className="glass card-hover rounded-2xl p-8">
            <Sparkles className="text-violet-400" size={22} />
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {profile.summary}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              Both of my internships were at manufacturing companies, where the software I
              wrote replaced spreadsheets and clipboards on an actual production floor.
              That taught me something a course never could: a feature only counts once
              someone can use it without asking you how.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <p className="text-slate-500">Based in</p>
                <p className="mt-1 font-medium text-white">Jamshedpur, India</p>
              </div>
              <div>
                <p className="text-slate-500">Focus</p>
                <p className="mt-1 font-medium text-white">Full-Stack &amp; SDE</p>
              </div>
              <div>
                <p className="text-slate-500">Primary language</p>
                <p className="mt-1 font-medium text-white">C++</p>
              </div>
              <div>
                <p className="text-slate-500">Availability</p>
                <p className="mt-1 font-medium text-emerald-400">Open to offers</p>
              </div>
            </div>
          </Reveal>

          <Reveal from="left" delay={0.1}>
            <div className="glass h-full rounded-2xl p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-cyan-400" size={22} />
                <h3 className="font-display text-lg font-semibold text-white">
                  Education
                </h3>
              </div>

              <ol className="mt-7 space-y-7">
                {education.map((e, i) => (
                  <li key={e.school} className="relative pl-7">
                    <span className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                    {i !== education.length - 1 && (
                      <span className="absolute top-5 left-[4.5px] h-full w-px bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                    <p className="font-display text-[15px] leading-snug font-semibold text-white">
                      {e.school}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{e.detail}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 font-medium text-violet-300">
                        {e.score}
                      </span>
                      <span className="font-mono">{e.period}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
