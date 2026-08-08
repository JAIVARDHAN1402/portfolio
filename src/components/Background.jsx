/**
 * Fixed decorative layer: aurora blobs, faint grid and a vignette.
 * Sits behind everything and never intercepts pointer events.
 */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />

      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

      <div className="animate-float absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-violet-600/25 blur-[130px]" />
      <div className="animate-float-slow absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="animate-float-slow absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/15 blur-[140px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_35%,#05060a_92%)]" />
    </div>
  )
}
