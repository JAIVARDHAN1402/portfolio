import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Award, Flame, Trophy } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { codingProfiles } from '../data'

const { leetcode, gfg } = codingProfiles

// Tried in order; first one that answers wins, otherwise we fall back to data.js.
const LEETCODE_ENDPOINTS = [
  `https://leetcode-api-faisalshohag.vercel.app/${leetcode.username}`,
  `https://alfa-leetcode-api.onrender.com/userProfile/${leetcode.username}`,
]

function normalise(raw) {
  const totalSolved = raw.totalSolved ?? raw.solvedProblem
  if (typeof totalSolved !== 'number') return null
  return {
    totalSolved,
    easySolved: raw.easySolved ?? 0,
    mediumSolved: raw.mediumSolved ?? 0,
    hardSolved: raw.hardSolved ?? 0,
    totalEasy: raw.totalEasy ?? leetcode.fallback.totalEasy,
    totalMedium: raw.totalMedium ?? leetcode.fallback.totalMedium,
    totalHard: raw.totalHard ?? leetcode.fallback.totalHard,
    ranking: raw.ranking ?? null,
  }
}

/** Counts from 0 up to `value` once the element scrolls into view. */
function CountUp({ value, duration = 1200 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (!value) {
      setDisplay(0)
      return
    }

    let frame
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(value * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    // rAF is throttled in background tabs; make sure the real number lands anyway.
    const settle = setTimeout(() => setDisplay(value), duration + 150)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(settle)
    }
  }, [inView, value, duration])

  return <span ref={ref}>{display.toLocaleString()}</span>
}

function DifficultyBar({ label, solved, total, color }) {
  const pct = total ? Math.min((solved / total) * 100, 100) : 0
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className={color}>{label}</span>
        <span className="font-mono text-slate-400">
          {solved}
          <span className="text-slate-600"> / {total}</span>
        </span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className={`h-full rounded-full ${
            color === 'text-emerald-400'
              ? 'bg-emerald-400'
              : color === 'text-amber-400'
                ? 'bg-amber-400'
                : 'bg-rose-400'
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
      </div>
    </div>
  )
}

function SolvedRing({ solved, total }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const pct = total ? Math.min(solved / total, 1) : 0

  return (
    <div className="relative h-36 w-36 shrink-0">
      <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          strokeWidth="9"
          className="stroke-white/10"
        />
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - pct) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 grid place-content-center text-center">
        <span className="font-display text-3xl font-bold text-white">
          <CountUp value={solved} />
        </span>
        <span className="text-[11px] tracking-wide text-slate-500 uppercase">solved</span>
      </div>
    </div>
  )
}

export default function CodingProfiles() {
  const [lc, setLc] = useState(leetcode.fallback)
  const [live, setLive] = useState(false)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      for (const url of LEETCODE_ENDPOINTS) {
        try {
          const res = await fetch(url)
          if (!res.ok) continue
          const data = normalise(await res.json())
          if (data && !cancelled) {
            setLc(data)
            setLive(true)
            return
          }
        } catch {
          // network/CORS failure — try the next endpoint, then keep the fallback
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const combined = lc.totalSolved + gfg.problemsSolved

  return (
    <section id="coding" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Problem solving"
          title="Coding profiles"
          description="Where I sharpen the fundamentals — mostly C++, across arrays, graphs, DP and trees."
        />

        {/* Combined headline */}
        <Reveal className="glass mb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl px-6 py-5 text-center">
          <span className="font-display text-4xl font-bold">
            <span className="text-gradient">
              <CountUp value={combined} />+
            </span>
          </span>
          <span className="text-sm text-slate-400">
            problems solved across LeetCode &amp; GeeksforGeeks
          </span>
          {live && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          )}
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* ---- LeetCode ---- */}
          <Reveal className="glass card-hover group relative overflow-hidden rounded-2xl p-7 sm:p-8">
            <div className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-300 ring-1 ring-amber-400/20">
                  <Flame size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    LeetCode
                  </h3>
                  <p className="font-mono text-xs text-slate-500">
                    @{leetcode.username}
                  </p>
                </div>
              </div>
              <a
                href={leetcode.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-amber-400/50 hover:text-amber-200"
              >
                Profile
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="relative mt-7 flex flex-col items-center gap-7 sm:flex-row">
              <SolvedRing
                solved={lc.totalSolved}
                total={lc.totalEasy + lc.totalMedium + lc.totalHard}
              />

              <div className="w-full space-y-4">
                <DifficultyBar
                  label="Easy"
                  solved={lc.easySolved}
                  total={lc.totalEasy}
                  color="text-emerald-400"
                />
                <DifficultyBar
                  label="Medium"
                  solved={lc.mediumSolved}
                  total={lc.totalMedium}
                  color="text-amber-400"
                />
                <DifficultyBar
                  label="Hard"
                  solved={lc.hardSolved}
                  total={lc.totalHard}
                  color="text-rose-400"
                />
              </div>
            </div>

            {lc.ranking && (
              <div className="relative mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-sm">
                <Trophy size={15} className="text-amber-300" />
                <span className="text-slate-400">Global rank</span>
                <span className="font-mono ml-auto font-medium text-white">
                  #{lc.ranking.toLocaleString()}
                </span>
              </div>
            )}
          </Reveal>

          {/* ---- GeeksforGeeks ---- */}
          <Reveal delay={0.1} className="glass card-hover group relative overflow-hidden rounded-2xl p-7 sm:p-8">
            <div className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20">
                  <Award size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    GeeksforGeeks
                  </h3>
                  <p className="font-mono text-xs text-slate-500">@{gfg.username}</p>
                </div>
              </div>
              <a
                href={gfg.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-200"
              >
                Profile
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="relative mt-8 text-center">
              <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">
                Coding Score
              </p>
              <p className="font-display mt-2 text-6xl font-bold">
                <span className="bg-gradient-to-br from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                  <CountUp value={gfg.codingScore} />
                </span>
              </p>
            </div>

            <div className="relative mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-center">
                <p className="font-display text-2xl font-bold text-white">
                  <CountUp value={gfg.problemsSolved} />
                </p>
                <p className="mt-1 text-xs text-slate-500">Problems solved</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-center">
                <p className="font-display text-2xl font-bold text-white">
                  #<CountUp value={gfg.instituteRank} />
                </p>
                <p className="mt-1 text-xs text-slate-500">Institute rank</p>
              </div>
            </div>

            <p className="relative mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-500">
              Practicing Arrays, Graphs, Dynamic Programming and Trees — primarily in C++.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
