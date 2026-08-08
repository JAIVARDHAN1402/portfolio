import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { marqueeSkills, profile, stats } from '../data'

/** Types a word out, pauses, deletes it, moves to the next. */
function useTypewriter(words, { typing = 85, deleting = 45, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deletingNow, setDeletingNow] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]

    if (!deletingNow && text === word) {
      const t = setTimeout(() => setDeletingNow(true), pause)
      return () => clearTimeout(t)
    }

    if (deletingNow && text === '') {
      setDeletingNow(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deletingNow ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1),
        ),
      deletingNow ? deleting : typing,
    )
    return () => clearTimeout(t)
  }, [text, deletingNow, index, words, typing, deleting, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16 md:pb-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          {/* ---- Copy ---- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to SDE roles &amp; internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display mt-6 text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient block sm:inline">Jaivardhan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="font-mono mt-5 text-lg text-slate-300 sm:text-xl"
            >
              <span className="text-violet-400">&gt;</span> {typed}
              <span className="animate-blink ml-0.5 text-cyan-400">_</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-ink-950 shadow-[0_12px_40px_-12px] shadow-violet-500 transition-transform hover:scale-[1.03]"
              >
                View my work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-violet-400/50 hover:text-violet-200"
              >
                Let&apos;s talk
              </a>

              <div className="ml-1 flex items-center gap-2">
                {[
                  { href: profile.github, Icon: Github, label: 'GitHub' },
                  { href: profile.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={label}
                    className="glass grid h-11 w-11 place-items-center rounded-full text-slate-300 transition-all hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-violet-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-7 inline-flex items-center gap-2 text-sm text-slate-500"
            >
              <MapPin size={14} className="text-violet-400" />
              {profile.location}
            </motion.p>
          </div>

          {/* ---- Terminal card ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-600/25 via-transparent to-cyan-400/20 blur-2xl" />
            <div className="glass relative rounded-2xl p-1 shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="font-mono ml-3 text-[11px] text-slate-500">
                  jaivardhan@dev ~ %
                </span>
              </div>
              <div className="font-mono space-y-1.5 rounded-xl bg-ink-950/70 p-5 text-[13px] leading-relaxed">
                <p className="text-slate-500">// developer.js</p>
                <p>
                  <span className="text-fuchsia-400">const</span>{' '}
                  <span className="text-cyan-300">dev</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-violet-300">name</span>:{' '}
                  <span className="text-emerald-300">&apos;Jaivardhan Singh&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-violet-300">edu</span>:{' '}
                  <span className="text-emerald-300">&apos;VIT Vellore, CSE&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-violet-300">stack</span>: [
                  <span className="text-emerald-300">&apos;React&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;Next.js&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;C++&apos;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-violet-300">dsaSolved</span>:{' '}
                  <span className="text-amber-300">200</span>,
                </p>
                <p className="pl-4">
                  <span className="text-violet-300">openToWork</span>:{' '}
                  <span className="text-amber-300">true</span>,
                </p>
                <p>{'}'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---- Stats ---- */}
        <motion.dl
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/[0.02] px-5 py-6 text-center">
              <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                <span className="text-gradient">{s.value}</span>
              </dt>
              <dd className="mt-1.5 text-xs tracking-wide text-slate-400 sm:text-sm">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* ---- Marquee ---- */}
      <div className="absolute inset-x-0 bottom-0 hidden overflow-hidden border-y border-white/5 py-3 md:block [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-8">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-mono text-sm tracking-wide text-slate-600 whitespace-nowrap uppercase"
            >
              {skill} <span className="text-violet-500/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 text-slate-600 transition-colors hover:text-violet-400 lg:block"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
