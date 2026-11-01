import { useEffect, useState } from "react";

const W = 96;
const H = 44;

const nodes = [
  { id: "client", label: "Client", x: 60, y: 210 },
  { id: "lb", label: "Load balancer", x: 210, y: 210, primary: true },
  { id: "s1", label: "Server 1", x: 380, y: 90 },
  { id: "s2", label: "Server 2", x: 380, y: 210 },
  { id: "s3", label: "Server 3", x: 380, y: 330 },
  { id: "cache", label: "Cache", x: 560, y: 110 },
  { id: "db", label: "Database", x: 560, y: 310 },
];

// begin = seconds into the 3s loop when the packet leaves
const edges = [
  { d: "M108,210 H162", begin: 0 },
  { d: "M258,210 C295,210 295,90 332,90", begin: 0.9 },
  { d: "M258,210 H332", begin: 1.1 },
  { d: "M258,210 C295,210 295,330 332,330", begin: 1.3 },
  { d: "M428,90 C470,90 470,110 512,110", begin: 1.9 },
  { d: "M428,210 C470,210 470,110 512,110", begin: 2.1 },
  { d: "M428,210 C470,210 470,310 512,310", begin: 2.2 },
  { d: "M428,330 C470,330 470,310 512,310", begin: 2.4 },
];

const LOOP = 3; // seconds
const TRAVEL = 0.28; // fraction of the loop spent moving

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function ArchitectureAnimation() {
  const reduced = usePrefersReducedMotion();

  return (
    <svg
      className="arch"
      viewBox="0 0 640 420"
      role="img"
      aria-label="Animated diagram: a client sends requests to a load balancer, which distributes them across three servers that read from a cache and a database."
    >
      {edges.map((e, i) => (
        <path key={i} id={`edge-${i}`} d={e.d} className="arch-edge" />
      ))}

      {nodes.map((n) => (
        <g key={n.id} transform={`translate(${n.x - W / 2}, ${n.y - H / 2})`}>
          <rect
            width={W}
            height={H}
            rx="8"
            className={n.primary ? "arch-node arch-node--primary" : "arch-node"}
          />
          <text
            x={W / 2}
            y={H / 2 + 4.5}
            textAnchor="middle"
            className={n.primary ? "arch-label arch-label--primary" : "arch-label"}
          >
            {n.label}
          </text>
        </g>
      ))}

      {!reduced &&
        edges.map((e, i) => (
          <circle key={i} r="5" className="arch-packet" opacity="0">
            <animateMotion
              dur={`${LOOP}s`}
              begin={`${e.begin}s`}
              repeatCount="indefinite"
              keyPoints="0;1;1"
              keyTimes={`0;${TRAVEL};1`}
              calcMode="linear"
            >
              <mpath href={`#edge-${i}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="1;1;0;0"
              keyTimes={`0;${TRAVEL - 0.01};${TRAVEL};1`}
              dur={`${LOOP}s`}
              begin={`${e.begin}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
    </svg>
  );
}
