import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard blocked (insecure context / denied) — the mailto link still works
    }
  }

  const channels = [
    {
      Icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      Icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/jaivardhansingh14',
      href: profile.linkedin,
      external: true,
    },
    {
      Icon: Github,
      label: 'GitHub',
      value: '/JAIVARDHAN1402',
      href: profile.github,
      external: true,
    },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something"
          description="I'm actively looking for SDE roles and internships. Whether it's an opportunity, a project idea or just a bug you can't crack — my inbox is open."
        />

        <Reveal className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="relative">
            <p className="font-display text-2xl font-bold text-white sm:text-3xl">
              Say hello <span className="text-gradient">👋</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-ink-950 shadow-[0_12px_40px_-12px] shadow-violet-500 transition-transform hover:scale-[1.03]"
              >
                <Mail size={16} />
                Send an email
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-violet-400/50 hover:text-violet-200"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy address'}
              </button>
            </div>

            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {channels.map(({ Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/20">
                    <Icon size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">{label}</span>
                    <span className="block truncate text-sm font-medium text-slate-200 group-hover:text-white">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
