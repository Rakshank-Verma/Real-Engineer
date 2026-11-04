import { motion } from "framer-motion";

const paths = [
  {
    number: "01",
    name: "System design",
    description: "Design reliable systems that scale from one user to millions.",
    label: "THINK IN SYSTEMS",
    color: "mint",
    icon: (
      <>
        <rect x="3" y="4" width="7" height="6" rx="1.5" />
        <rect x="14" y="14" width="7" height="6" rx="1.5" />
        <rect x="3" y="14" width="7" height="6" rx="1.5" />
        <path d="M10 7h3a1 1 0 0 1 1 1v6M6.5 10v4" />
      </>
    ),
  },
  {
    number: "02",
    name: "Data structures & algorithms",
    description: "Build problem-solving instincts that stay with you.",
    label: "SOLVE WITH INTENTION",
    color: "lavender",
    icon: (
      <>
        <circle cx="12" cy="5" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M11 7 7 16M13 7l4 9M8 18h8" />
      </>
    ),
  },
  {
    number: "03",
    name: "Computer networks",
    description: "Follow a request from your browser all the way back.",
    label: "FOLLOW THE CONNECTION",
    color: "peach",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="m7 7 3 3m7-3-3 3m-7 7 3-3m7 3-3-3" />
      </>
    ),
  },
  {
    number: "04",
    name: "Machine learning",
    description: "Make sense of models, data, and the patterns between them.",
    label: "LEARN FROM DATA",
    color: "blue",
    icon: (
      <>
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
        <circle cx="12" cy="12" r="5" />
      </>
    ),
  },
  {
    number: "05",
    name: "Deep learning",
    description: "Unpack neural networks, one intuitive layer at a time.",
    label: "GO A LITTLE DEEPER",
    color: "yellow",
    icon: (
      <>
        <circle cx="6" cy="7" r="2" />
        <circle cx="6" cy="17" r="2" />
        <circle cx="18" cy="5" r="2" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="18" cy="19" r="2" />
        <path d="m8 7 8-2M8 7l8 5M8 17l8-5m-8 5 8 2" />
      </>
    ),
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function TopicIcon({ children }) {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function LearningMap() {
  return (
    <div
      className="learning-map"
      role="img"
      aria-label="A visual map connecting computer science topics, from algorithms to machine learning and system design."
    >
      <div className="map-topline">
        <span className="map-live"><span /> YOUR LEARNING MAP</span>
        <span className="map-index">01 — 05</span>
      </div>
      <div className="map-canvas">
        <svg className="map-lines" viewBox="0 0 460 340" fill="none" aria-hidden="true">
          <path d="M230 168 111 92M230 168 345 86M230 168 102 254M230 168 354 252" />
          <path className="map-line-dash" d="M111 92 345 86M102 254 354 252" />
          <circle className="map-pulse" cx="230" cy="168" r="49" />
        </svg>
        <div className="map-node map-node-center">
          <span className="map-center-icon">re<span>.</span></span>
          <span>real engineer</span>
        </div>
        <div className="map-node map-node-algorithms">
          <span className="map-node-symbol">⌘</span>
          <span>Algorithms</span>
        </div>
        <div className="map-node map-node-ml">
          <span className="map-node-symbol">✳</span>
          <span>Machine learning</span>
        </div>
        <div className="map-node map-node-network">
          <span className="map-node-symbol">◎</span>
          <span>Networks</span>
        </div>
        <div className="map-node map-node-systems">
          <span className="map-node-symbol">▧</span>
          <span>System design</span>
        </div>
      </div>
      <div className="map-caption">
        <span>Big picture thinking,</span>
        <span>one concept at a time <span aria-hidden="true">↗</span></span>
      </div>
      <span className="map-scribble" aria-hidden="true">learn by connecting</span>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="landing-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Real Engineer home">
          <span className="brand-mark" aria-hidden="true">re<span>.</span></span>
          <span className="brand-name">real<span>engineer</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#learning-paths">Learning paths</a>
          <a href="#our-approach">Our approach</a>
        </nav>
        <a className="header-cta" href="#learning-paths">
          Get started <ArrowIcon diagonal />
        </a>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-dot" />
              A clearer way to learn tech
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Learn the craft.
              <br />
              <span>Become the</span>
              <br />
              <span className="hero-last-line">real engineer<span className="hero-period">.</span></span>
            </motion.h1>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The ideas behind great software, made clear. Build real understanding
              in system design, algorithms, networking, and AI.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <a className="button-primary" href="#learning-paths">
                Explore learning paths <ArrowIcon />
              </a>
              <span className="hero-note">Curiosity is a good place to start.</span>
            </motion.div>
            <div className="hero-social-proof" aria-label="Learn at your own pace">
              <span className="proof-avatars" aria-hidden="true">
                <span>R</span><span>E</span><span>↗</span>
              </span>
              <span>For the curious, <strong>at every level</strong></span>
            </div>
          </div>
          <motion.div
            className="hero-art-wrap"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <LearningMap />
          </motion.div>
          <span className="hero-side-note" aria-hidden="true">ENGINEERING, IN FULL COLOR — BUILT FOR THE CURIOUS</span>
        </section>

        <section className="topics-section" id="learning-paths">
          <div className="section-heading">
            <div>
              <span className="section-kicker">A STRONGER FOUNDATION STARTS HERE</span>
              <h2>Choose your next <span>curiosity.</span></h2>
            </div>
            <p>Five paths into the concepts that power the digital world. Follow one, or connect them all.</p>
          </div>
          <div className="topic-grid">
            {paths.map((path, index) => (
              <motion.article
                className={`topic-card topic-${path.color}`}
                key={path.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <div className="topic-card-top">
                  <span className="topic-icon"><TopicIcon>{path.icon}</TopicIcon></span>
                  <span className="topic-number">{path.number}</span>
                </div>
                <span className="topic-label">{path.label}</span>
                <h3>{path.name}</h3>
                <p>{path.description}</p>
              </motion.article>
            ))}
          </div>
          <p className="topics-footnote">The best engineers never stop being students.</p>
        </section>

        <section className="approach-section" id="our-approach">
          <div className="approach-badge"><span /> THE REAL ENGINEER WAY</div>
          <h2>Less memorizing.<br /><span>More getting it.</span></h2>
          <p>
            Understand the why behind the what. Explore big ideas through clear
            explanations and the connections that make them stick.
          </p>
          <a href="#learning-paths" className="approach-link">
            Find your starting point <ArrowIcon />
          </a>
          <div className="approach-doodle" aria-hidden="true">
            <span>?</span>
            <svg viewBox="0 0 150 70" fill="none">
              <path d="M3 53C34 4 58 79 88 34c13-19 27-25 55-18" />
              <path d="m132 8 12 8-13 6" />
            </svg>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#" aria-label="Real Engineer home">
          <span className="brand-mark" aria-hidden="true">re<span>.</span></span>
          <span className="brand-name">real<span>engineer</span></span>
        </a>
        <span className="footer-note">Made for people who want to know how it works.</span>
        <span className="footer-copyright">© {new Date().getFullYear()} real engineer</span>
      </footer>
    </div>
  );
}
