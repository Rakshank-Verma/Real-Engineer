import { motion } from "framer-motion";
import ArchitectureAnimation from "../components/ArchitectureAnimation.jsx";
import "../styles/landing.css";

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
    <div className="landing">
      <header className="landing__header">
        <span className="wordmark">System Design, Animated</span>
      </header>

      <main className="landing__main">
        <section className="landing__copy">
          <h1 className="landing__title">
            <motion.span custom={0} variants={line} initial="hidden" animate="show" style={{ display: "block" }}>
              System design,
            </motion.span>
            <motion.span custom={1} variants={line} initial="hidden" animate="show" style={{ display: "block" }}>
              learned by watching it move.
            </motion.span>
          </h1>

          <motion.p
            className="landing__lead"
            custom={2}
            variants={line}
            initial="hidden"
            animate="show"
          >
            A visual course on how large systems are built, one topic at a time.
            The first lessons are being written now.
          </motion.p>

          <motion.div custom={3} variants={line} initial="hidden" animate="show">
            <span className="status">
              <span className="status__dot" aria-hidden="true" />
              Coming soon
            </span>
          </motion.div>
        </section>

        <section className="landing__visual">
          <ArchitectureAnimation />
        </section>
      </main>

      <footer className="landing__footer">
        <small>© {new Date().getFullYear()} System Design, Animated</small>
      </footer>
    </div>
  );
}
