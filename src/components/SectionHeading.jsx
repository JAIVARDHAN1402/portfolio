import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="font-mono text-xs tracking-[0.28em] text-violet-300/80 uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
      {description && (
        <p className="mt-5 text-base leading-relaxed text-slate-400">{description}</p>
      )}
    </Reveal>
  )
}
