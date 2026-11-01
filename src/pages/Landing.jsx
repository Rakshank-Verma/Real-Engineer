import { motion } from "framer-motion";
import ArchitectureAnimation from "../components/ArchitectureAnimation.jsx";

const line = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Landing() {
  return (
    <div className="mx-auto flex min-h-[100svh] max-w-[1280px] flex-col px-5 py-[clamp(20px,4vw,48px)] min-[861px]:px-[clamp(20px,5vw,72px)]">
      <header>
        <span className="font-display text-[1.05rem] font-bold tracking-[-0.01em]">
          System Design, Animated
        </span>
      </header>

      <main className="grid flex-1 grid-cols-1 items-center gap-8 py-8 min-[861px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] min-[861px]:gap-[clamp(32px,5vw,72px)]">
        <section>
          <h1 className="mb-6 font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
              System design,
            </motion.span>
            <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block">
              learned by watching it move.
            </motion.span>
          </h1>

          <motion.p
            className="mb-8 max-w-[44ch] text-[clamp(1.05rem,1.6vw,1.25rem)] text-muted"
            custom={2}
            variants={line}
            initial="hidden"
            animate="show"
          >
            A visual course on how large systems are built, one topic at a time.
            The first lessons are being written now.
          </motion.p>

          <motion.div custom={3} variants={line} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-white px-[18px] py-2.5 font-semibold">
              <span
                className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue motion-reduce:animate-none"
                aria-hidden="true"
              />
              Coming soon
            </span>
          </motion.div>
        </section>

        <section className="rounded-2xl border-2 border-ink bg-white/70 p-[clamp(12px,2vw,24px)]">
          <ArchitectureAnimation />
        </section>
      </main>

      <footer className="text-muted">
        <small>© {new Date().getFullYear()} System Design, Animated</small>
      </footer>
    </div>
  );
}
