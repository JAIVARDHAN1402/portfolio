import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Expand, ImageOff, Target, Trophy, X } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { achievements } from '../data'

const icons = { Trophy, Target }

/** Full-screen certificate viewer. */
function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-70 grid place-items-center bg-ink-950/92 p-4 backdrop-blur-md sm:p-8"
    >
      <motion.div
        initial={{ scale: 0.94, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate"
          className="glass absolute -top-3 -right-3 z-10 grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:text-violet-300"
        >
          <X size={18} />
        </button>

        <img
          src={item.image}
          alt={item.imageAlt ?? item.title}
          className="max-h-[82vh] w-full rounded-xl border border-white/10 bg-white object-contain shadow-2xl"
        />

        <p className="mt-4 text-center text-sm text-slate-400">{item.title}</p>
      </motion.div>
    </motion.div>
  )
}

/** Large inline certificate. Shows a clear placeholder if the file is missing. */
function CertificateFrame({ item, onOpen }) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div className="grid aspect-[7/5] place-content-center gap-3 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center">
        <ImageOff size={26} className="mx-auto text-slate-600" />
        <p className="text-sm font-medium text-slate-400">Certificate image not found</p>
        <p className="font-mono text-xs leading-relaxed text-slate-600">
          public/certificates/
          <br />
          ieee-sense-a-thon.png
        </p>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Open certificate full screen"
      className="group/cert relative block w-full overflow-hidden rounded-xl bg-white p-2 shadow-[0_24px_60px_-24px_rgba(167,139,250,0.55)] ring-1 ring-white/15 transition-transform duration-500 hover:scale-[1.015]"
    >
      <img
        src={item.image}
        alt={item.imageAlt ?? item.title}
        onError={() => setBroken(true)}
        className="w-full rounded-lg"
      />
      <span className="absolute inset-2 grid place-items-center rounded-lg bg-ink-950/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/cert:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink-950">
          <Expand size={14} />
          Click to enlarge
        </span>
      </span>
    </button>
  )
}

export default function Achievements() {
  const [open, setOpen] = useState(null)

  const featured = achievements.filter((a) => a.image)
  const rest = achievements.filter((a) => !a.image)

  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Highlights" title="Achievements" />

        {featured.map((a) => {
          const Icon = icons[a.icon] ?? Trophy
          return (
            <Reveal
              key={a.title}
              className="glass relative mb-5 overflow-hidden rounded-2xl p-7 sm:p-9"
            >
              <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />

              <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_1.15fr]">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-amber-500/10 text-amber-300 ring-1 ring-amber-400/20">
                    <Icon size={22} />
                  </span>

                  <h3 className="font-display mt-6 text-2xl leading-snug font-bold text-white sm:text-3xl">
                    {a.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-400">
                    {a.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {['IEEE VIT Student Branch', 'SENSE-A-THON 2026', '50+ teams'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="font-mono rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>

                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200"
                    >
                      {a.linkLabel}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>

                <CertificateFrame item={a} onOpen={() => setOpen(a)} />
              </div>
            </Reveal>
          )
        })}

        <div className={`grid gap-5 ${rest.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {rest.map((a, i) => {
            const Icon = icons[a.icon] ?? Trophy
            return (
              <Reveal
                key={a.title}
                delay={i * 0.1}
                className="glass card-hover flex h-full flex-col rounded-2xl p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/20">
                  <Icon size={20} />
                </span>
                <h3 className="font-display mt-5 text-lg leading-snug font-semibold text-white">
                  {a.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {a.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}
