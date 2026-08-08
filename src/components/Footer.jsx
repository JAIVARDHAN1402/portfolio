import { ArrowUp, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
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
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-violet-400/50 hover:text-violet-300"
            >
              <Icon size={15} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-violet-400/50 hover:text-violet-300"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
