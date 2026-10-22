"use client";

import React from "react";

export default function GlobalReachMap() {
  // Exact paths fitted to original export routes
  const paths = {
    usa: "M 688.9 534.7 C 660.4 503.5, 627.4 462.2, 575.0 410.0 C 522.6 357.8, 526.7 359.8, 479.3 326.0 C 431.9 292.3, 434.9 293.2, 385.3 275.0 C 335.7 256.8, 333.0 253.9, 280.9 253.3 C 228.8 252.8, 222.1 257.0, 176.8 272.8 C 131.5 288.6, 137.4 304.0, 99.6 316.6 C 61.8 329.3, 44.2 321.7, 25.7 323.4",
    canada: "M 688.9 534.7 C 672.7 515.3, 659.1 495.2, 624.1 456.9 C 589.1 418.6, 592.8 444.5, 549.0 381.5 C 505.2 318.5, 495.6 265.3, 448.8 204.8 C 402.0 144.4, 409.3 163.5, 361.9 139.7 C 314.4 115.9, 306.5 111.8, 259.0 109.5 C 211.5 107.2, 217.9 124.0, 171.8 130.3 C 125.7 136.6, 98.9 133.6, 74.6 134.7",
    diagonal: "M 688.9 534.7 C 675.8 518.7, 664.8 502.7, 636.3 470.5 C 607.8 438.3, 606.9 436.6, 574.8 405.8 C 542.7 375.0, 543.0 374.1, 508.0 347.1 C 473.0 320.2, 471.9 322.3, 434.9 298.0 C 397.9 273.7, 378.7 262.0, 360.0 250.0",
    uk: "M 688.9 534.7 C 681.0 511.2, 675.2 493.4, 657.4 440.6 C 639.6 387.8, 636.9 372.8, 617.7 323.6 C 598.5 274.4, 599.0 272.7, 580.5 243.8 C 562.0 214.9, 559.7 212.2, 543.8 207.9 C 527.9 203.6, 526.4 231.3, 516.9 226.7 C 507.4 222.1, 508.4 198.9, 505.6 189.7",
    europe: "M 688.9 534.7 C 685.0 505.9, 679.9 474.8, 673.5 419.5 C 667.1 364.2, 668.1 357.5, 663.3 313.6 C 658.5 269.7, 658.5 269.9, 654.3 243.9 C 650.0 217.9, 651.1 212.8, 646.3 209.7 C 641.5 206.6, 639.5 240.7, 635.1 231.4 C 630.7 222.2, 630.2 187.4, 628.6 172.7",
    asia: "M 688.9 534.7 C 708.8 503.4, 730.9 461.2, 768.6 409.3 C 806.3 357.4, 801.4 365.1, 839.8 327.2 C 878.2 289.3, 884.5 279.1, 922.2 257.5 C 959.9 235.9, 956.9 241.0, 990.5 240.8 C 1024.1 240.6, 1040.1 252.7, 1056.6 256.7",
    gulf: "M 688.9 534.7 C 698.1 517.7, 705.3 492.0, 725.9 466.5 C 746.5 441.0, 750.9 441.7, 771.2 432.8 C 791.6 423.9, 790.7 428.5, 807.3 431.0 C 823.9 433.5, 830.0 439.8, 837.6 442.7",
    oman: "M 688.9 534.7 C 704.9 528.1, 719.1 512.9, 753.0 508.1 C 786.9 503.3, 794.7 507.1, 824.5 515.4 C 854.3 523.7, 850.8 528.6, 872.1 541.4 C 893.4 554.2, 900.2 560.4, 909.6 566.7",
  };

  const centers = {
    USA: { x: 25.7, y: 323.4 },
    CANADA: { x: 74.6, y: 134.7 },
    UK: { x: 505.6, y: 189.7 },
    EUROPE: { x: 628.6, y: 172.7 },
    ASIA: { x: 1056.6, y: 256.7 },
    GULF: { x: 837.6, y: 442.7 },
    OMAN: { x: 909.6, y: 566.7 },
    INDIA: { x: 688.9, y: 534.7 },
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 1147 650"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="BNK Global Reach export map with animated route from India to USA"
      >
        <defs>
          {/* Subtle neon glow for routes */}
          <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Intense glow for traveling beam and active nodes */}
          <filter id="beamGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5.5" result="blur1" />
            <feGaussianBlur stdDeviation="1.8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial gradient for node ambient halos */}
          <radialGradient id="nodeHaloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CFEF54" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#CFEF54" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#CFEF54" stopOpacity="0" />
          </radialGradient>

          {/* Radial gradient for India central origin halo */}
          <radialGradient id="indiaHaloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CFEF54" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#CFEF54" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#CFEF54" stopOpacity="0" />
          </radialGradient>
        </defs>

        <style>{`
          /* Base dashed lines */
          .route-dash {
            stroke: #CFEF54;
            stroke-width: 1.85;
            stroke-dasharray: 7 11;
            stroke-linecap: round;
            opacity: 0.82;
            filter: url(#routeGlow);
            transition: opacity 0.3s ease;
          }

          /* Traveling line along India -> USA curve */
          .beam-travel-line {
            fill: none;
            stroke: #CFEF54;
            stroke-width: 2.8;
            stroke-linecap: round;
            stroke-dasharray: 110 1000;
            stroke-dashoffset: 110;
            animation: travelIndiaToUsa 3.6s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
            filter: url(#beamGlow);
          }

          @keyframes travelIndiaToUsa {
            0% {
              stroke-dashoffset: 110;
              opacity: 0;
            }
            8% {
              opacity: 1;
            }
            82% {
              opacity: 1;
            }
            96%, 100% {
              stroke-dashoffset: -1000;
              opacity: 0;
            }
          }

          /* Ambient breathing pulse on nodes */
          .ambient-pulse {
            animation: nodePulse 3s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          @keyframes nodePulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.22;
            }
            50% {
              transform: scale(1.28);
              opacity: 0.45;
            }
          }

          /* India central origin beacon pulse */
          .india-pulse-inner {
            animation: indiaBeacon 2.4s ease-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .india-pulse-outer {
            animation: indiaBeacon 2.4s ease-out infinite 0.7s;
            transform-box: fill-box;
            transform-origin: center;
          }
          @keyframes indiaBeacon {
            0% {
              transform: scale(0.85);
              opacity: 0.7;
            }
            50% {
              opacity: 0.35;
            }
            100% {
              transform: scale(2.2);
              opacity: 0;
            }
          }

          /* USA arrival ripple synchronized with traveling line */
          .usa-arrival-ripple {
            animation: usaRipple 3.6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          @keyframes usaRipple {
            0%, 78% {
              transform: scale(0.8);
              opacity: 0;
            }
            84% {
              opacity: 0.85;
            }
            98%, 100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }

          /* Country label typography */
          .map-label {
            font-family: var(--font-geist-sans), "Inter", system-ui, -apple-system, sans-serif;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.09em;
            fill: #FFFFFF;
            user-select: none;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
          }
          .india-label {
            font-family: var(--font-geist-sans), "Inter", system-ui, -apple-system, sans-serif;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 0.12em;
            fill: #CFEF54;
            user-select: none;
            filter: drop-shadow(0 0 6px rgba(207, 239, 84, 0.45));
          }
        `}</style>

        {/* ══════ 1. BASE DASHED ROUTES (MATCHING ATTACHED IMAGE) ══════ */}
        <g id="base-routes" fill="none">
          <path id="path-usa" d={paths.usa} className="route-dash" />
          <path id="path-canada" d={paths.canada} className="route-dash" />
          <path id="path-diagonal" d={paths.diagonal} className="route-dash" />
          <path id="path-uk" d={paths.uk} className="route-dash" />
          <path id="path-europe" d={paths.europe} className="route-dash" />
          <path id="path-asia" d={paths.asia} className="route-dash" />
          <path id="path-gulf" d={paths.gulf} className="route-dash" />
          <path id="path-oman" d={paths.oman} className="route-dash" />
        </g>

        {/* ══════ 2. TRAVELING LINE ANIMATION (INDIA -> USA) ══════ */}
        <g id="travel-animation" fill="none">
          {/* Glowing laser beam traveling along India -> USA path */}
          <path
            d={paths.usa}
            pathLength="1000"
            className="beam-travel-line"
          />

          {/* Secondary brighter core beam with slight offset */}
          <path
            d={paths.usa}
            pathLength="1000"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="45 1000"
            strokeDashoffset="110"
            style={{
              animation: "travelIndiaToUsa 3.6s cubic-bezier(0.4, 0.0, 0.2, 1) infinite",
              filter: "url(#beamGlow)",
            }}
          />

          {/* High-intensity glowing particle gliding along the exact path at beam head */}
          <g>
            <circle r="5" fill="#CFEF54" opacity="0.9" filter="url(#beamGlow)" />
            <circle r="2.8" fill="#FFFFFF" />
            <animateMotion
              dur="3.6s"
              repeatCount="indefinite"
              path={paths.usa}
              keyTimes="0;0.05;0.86;0.96;1"
              keyPoints="0;0.02;0.96;1;1"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </g>
        </g>

        {/* ══════ 3. DESTINATION NODES & LABELS ══════ */}

        {/* USA */}
        <g id="node-usa" transform={`translate(${centers.USA.x}, ${centers.USA.y})`}>
          {/* Synchronized arrival ripple when beam reaches USA */}
          <circle r="18" fill="none" stroke="#CFEF54" strokeWidth="2" className="usa-arrival-ripple" />
          <circle r="14" fill="url(#nodeHaloGrad)" className="ambient-pulse" />
          <circle r="5.2" fill="#CFEF54" filter="url(#routeGlow)" />
          <circle r="2" fill="#FFFFFF" opacity="0.6" />
          <text x="18" y="4.5" className="map-label">
            USA
          </text>
        </g>

        {/* CANADA */}
        <g id="node-canada" transform={`translate(${centers.CANADA.x}, ${centers.CANADA.y})`}>
          <circle r="14" fill="url(#nodeHaloGrad)" className="ambient-pulse" style={{ animationDelay: "-0.8s" }} />
          <circle r="5.2" fill="#CFEF54" filter="url(#routeGlow)" />
          <circle r="2" fill="#FFFFFF" opacity="0.6" />
          <text x="17" y="4.5" className="map-label">
            CANADA
          </text>
        </g>

        {/* UK */}
        <g id="node-uk" transform={`translate(${centers.UK.x}, ${centers.UK.y})`}>
          <circle r="14" fill="url(#nodeHaloGrad)" className="ambient-pulse" style={{ animationDelay: "-1.6s" }} />
          <circle r="5.2" fill="#CFEF54" filter="url(#routeGlow)" />
          <circle r="2" fill="#FFFFFF" opacity="0.6" />
          <text x="17" y="4.5" className="map-label">
            UK
          </text>
        </g>

        {/* EUROPE */}
        <g id="node-europe" transform={`translate(${centers.EUROPE.x}, ${centers.EUROPE.y})`}>
          <circle r="14" fill="url(#nodeHaloGrad)" className="ambient-pulse" style={{ animationDelay: "-2.4s" }} />
          <circle r="5.2" fill="#CFEF54" filter="url(#routeGlow)" />
          <circle r="2" fill="#FFFFFF" opacity="0.6" />
          <text x="17" y="4.5" className="map-label">
            EUROPE
          </text>
        </g>

        {/* ASIA */}
        <g id="node-asia" transform={`translate(${centers.ASIA.x}, ${centers.ASIA.y})`}>
          <circle r="14" fill="url(#nodeHaloGrad)" className="ambient-pulse" style={{ animationDelay: "-1.2s" }} />
          <circle r="5.2" fill="#CFEF54" filter="url(#routeGlow)" />
          <circle r="2" fill="#FFFFFF" opacity="0.6" />
          <text x="17" y="4.5" className="map-label">
            ASIA
          </text>
        </g>

        {/* GULF */}
        <g id="node-gulf" transform={`translate(${centers.GULF.x}, ${centers.GULF.y})`}>
          <circle r="14" fill="url(#nodeHaloGrad)" className="ambient-pulse" style={{ animationDelay: "-0.4s" }} />
          <circle r="5.2" fill="#CFEF54" filter="url(#routeGlow)" />
          <circle r="2" fill="#FFFFFF" opacity="0.6" />
          <text x="17" y="4.5" className="map-label">
            GULF
          </text>
        </g>

        {/* OMAN */}
        <g id="node-oman" transform={`translate(${centers.OMAN.x}, ${centers.OMAN.y})`}>
          <circle r="14" fill="url(#nodeHaloGrad)" className="ambient-pulse" style={{ animationDelay: "-2.0s" }} />
          <circle r="5.2" fill="#CFEF54" filter="url(#routeGlow)" />
          <circle r="2" fill="#FFFFFF" opacity="0.6" />
          <text x="17" y="4.5" className="map-label">
            OMAN
          </text>
        </g>

        {/* ══════ 4. INDIA CENTRAL ORIGIN ══════ */}
        <g id="node-india" transform={`translate(${centers.INDIA.x}, ${centers.INDIA.y})`}>
          {/* Multiple concentric pulsing beacons */}
          <circle r="24" fill="none" stroke="#CFEF54" strokeWidth="1.5" className="india-pulse-outer" />
          <circle r="18" fill="none" stroke="#CFEF54" strokeWidth="1.5" className="india-pulse-inner" />
          <circle r="22" fill="url(#indiaHaloGrad)" />
          <circle r="12" fill="#CFEF54" opacity="0.32" />
          <circle r="5.6" fill="#CFEF54" filter="url(#beamGlow)" />
          <circle r="2.4" fill="#FFFFFF" />
          <text x="18" y="4.5" className="india-label">
            INDIA
          </text>
        </g>
      </svg>
    </div>
  );
}
