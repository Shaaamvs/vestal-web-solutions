import React from 'react';

export const AnimatedServiceSvgBanner = () => {
  return (
    <div
      className="relative w-full mx-auto select-none my-2"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      {/* =====================================================
          OUTER CONTAINER
      ====================================================== */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-2xl
          sm:rounded-3xl
          border
          border-[#16314C]
          bg-[#06121f]
          px-2
          py-3
          sm:px-4
          sm:py-4
          shadow-2xl
        "
      >
        {/* =====================================================
            BACKGROUND GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0F52BA]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-72
            w-72
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-72
            w-72
            rounded-full
            bg-blue-600/10
            blur-3xl
          "
        />

        {/* =====================================================
            SVG CONTAINER
        ====================================================== */}

        <div className="relative flex w-full items-center justify-center">
          <svg
            viewBox="70 90 580 310"
            className="
              block
              h-auto
              w-full
              max-w-[500px]
              overflow-visible
            "
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>

              {/* =================================================
                  CORE GRADIENT
              ================================================== */}

              <linearGradient
                id="coreGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#16314C"
                />

                <stop
                  offset="50%"
                  stopColor="#0F52BA"
                />

                <stop
                  offset="100%"
                  stopColor="#0284C7"
                />
              </linearGradient>


              {/* =================================================
                  WEB GRADIENT
              ================================================== */}

              <linearGradient
                id="webGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#38BDF8"
                />

                <stop
                  offset="100%"
                  stopColor="#0284C7"
                />
              </linearGradient>


              {/* =================================================
                  ORANGE GRADIENT
              ================================================== */}

              <linearGradient
                id="orangeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#FBBF24"
                />

                <stop
                  offset="100%"
                  stopColor="#D97706"
                />
              </linearGradient>


              {/* =================================================
                  GREEN GRADIENT
              ================================================== */}

              <linearGradient
                id="greenGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#34D399"
                />

                <stop
                  offset="100%"
                  stopColor="#059669"
                />
              </linearGradient>


              {/* =================================================
                  PURPLE GRADIENT
              ================================================== */}

              <linearGradient
                id="purpleGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#A5B4FC"
                />

                <stop
                  offset="100%"
                  stopColor="#4F46E5"
                />
              </linearGradient>


              {/* =================================================
                  PINK GRADIENT
              ================================================== */}

              <linearGradient
                id="pinkGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#F472B6"
                />

                <stop
                  offset="100%"
                  stopColor="#DB2777"
                />
              </linearGradient>


              {/* =================================================
                  TEAL GRADIENT
              ================================================== */}

              <linearGradient
                id="tealGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#2DD4BF"
                />

                <stop
                  offset="100%"
                  stopColor="#0D9488"
                />
              </linearGradient>


              {/* =================================================
                  CENTER GLOW
              ================================================== */}

              <radialGradient
                id="coreGlow"
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop
                  offset="0%"
                  stopColor="#38BDF8"
                  stopOpacity="0.45"
                />

                <stop
                  offset="60%"
                  stopColor="#0F52BA"
                  stopOpacity="0.15"
                />

                <stop
                  offset="100%"
                  stopColor="#0F52BA"
                  stopOpacity="0"
                />
              </radialGradient>


              {/* =================================================
                  SHADOW
              ================================================== */}

              <filter
                id="shadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="5"
                  stdDeviation="6"
                  floodOpacity="0.4"
                />
              </filter>


              {/* =================================================
                  GLOW
              ================================================== */}

              <filter
                id="glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  stdDeviation="4"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>


              {/* =================================================
                  SVG ANIMATIONS
              ================================================== */}

              <style>
                {`

                  /* ===========================================
                     CONNECTION LINE ANIMATION
                  =========================================== */

                  @keyframes lineFlow {
                    from {
                      stroke-dashoffset: 32;
                    }

                    to {
                      stroke-dashoffset: 0;
                    }
                  }

                  .connection {
                    fill: none;
                    stroke-width: 2.5;
                    stroke-linecap: round;
                    stroke-dasharray: 5 7;
                    animation: lineFlow 1.6s linear infinite;
                  }

                  .connectionReverse {
                    animation-direction: reverse;
                  }


                  /* ===========================================
                     ORBIT ROTATION
                  =========================================== */

                  @keyframes rotateOrbit {
                    from {
                      transform: rotate(0deg);
                    }

                    to {
                      transform: rotate(360deg);
                    }
                  }

                  @keyframes rotateOrbitReverse {
                    from {
                      transform: rotate(360deg);
                    }

                    to {
                      transform: rotate(0deg);
                    }
                  }

                  .orbit {
                    transform-origin: 360px 250px;
                    animation: rotateOrbit 25s linear infinite;
                  }

                  .orbitReverse {
                    transform-origin: 360px 250px;
                    animation: rotateOrbitReverse 32s linear infinite;
                  }


                  /* ===========================================
                     CORE PULSE
                  =========================================== */

                  @keyframes corePulse {
                    0%,
                    100% {
                      transform: scale(1);
                    }

                    50% {
                      transform: scale(1.045);
                    }
                  }

                  .corePulse {
                    transform-origin: 360px 250px;
                    animation: corePulse 3s ease-in-out infinite;
                  }


                  /* ===========================================
                     CENTER GLOW
                  =========================================== */

                  @keyframes glowPulse {
                    0%,
                    100% {
                      opacity: 0.3;
                      transform: scale(0.9);
                    }

                    50% {
                      opacity: 0.7;
                      transform: scale(1.1);
                    }
                  }

                  .glowPulse {
                    transform-origin: 360px 250px;
                    animation: glowPulse 3.5s ease-in-out infinite;
                  }


                  /* ===========================================
                     CARD FLOAT
                  =========================================== */

                  @keyframes floatUp {
                    0%,
                    100% {
                      transform: translateY(0);
                    }

                    50% {
                      transform: translateY(-4px);
                    }
                  }

                  @keyframes floatDown {
                    0%,
                    100% {
                      transform: translateY(0);
                    }

                    50% {
                      transform: translateY(4px);
                    }
                  }

                  .floatUp {
                    animation: floatUp 3.5s ease-in-out infinite;
                  }

                  .floatDown {
                    animation: floatDown 4s ease-in-out infinite;
                  }


                  /* ===========================================
                     PARTICLE PULSE
                  =========================================== */

                  @keyframes particlePulse {
                    0%,
                    100% {
                      opacity: 0.25;
                      transform: scale(0.7);
                    }

                    50% {
                      opacity: 1;
                      transform: scale(1.3);
                    }
                  }

                  .particle {
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: particlePulse 2s ease-in-out infinite;
                  }


                  /* ===========================================
                     MOVING DOT
                  =========================================== */

                  @keyframes dotPulse {
                    0% {
                      opacity: 0;
                    }

                    40% {
                      opacity: 1;
                    }

                    80% {
                      opacity: 0.3;
                    }

                    100% {
                      opacity: 0;
                    }
                  }

                  .movingDot {
                    animation: dotPulse 1.8s ease-in-out infinite;
                  }


                  /* ===========================================
                     REDUCED MOTION
                  =========================================== */

                  @media (prefers-reduced-motion: reduce) {
                    .connection,
                    .orbit,
                    .orbitReverse,
                    .corePulse,
                    .glowPulse,
                    .floatUp,
                    .floatDown,
                    .particle,
                    .movingDot {
                      animation: none;
                    }
                  }

                `}
              </style>

            </defs>


            {/* =====================================================
                BACKGROUND ORBITAL SYSTEM
            ====================================================== */}

            <circle
              cx="360"
              cy="250"
              r="175"
              fill="none"
              stroke="#16314C"
              strokeWidth="1"
              strokeDasharray="2 10"
              opacity="0.5"
            />

            <circle
              cx="360"
              cy="250"
              r="145"
              fill="none"
              stroke="#23384D"
              strokeWidth="1"
              strokeDasharray="4 11"
              opacity="0.6"
              className="orbitReverse"
            />

            <circle
              cx="360"
              cy="250"
              r="115"
              fill="none"
              stroke="#0F52BA"
              strokeWidth="1.2"
              strokeDasharray="5 9"
              opacity="0.7"
              className="orbit"
            />

            <circle
              cx="360"
              cy="250"
              r="85"
              fill="none"
              stroke="#164E7A"
              strokeWidth="1"
              strokeDasharray="3 8"
              opacity="0.6"
            />


            {/* =====================================================
                CENTER GLOW
            ====================================================== */}

            <circle
              cx="360"
              cy="250"
              r="110"
              fill="url(#coreGlow)"
              className="glowPulse"
            />


            {/* =====================================================
                CONNECTION LINES
            ====================================================== */}

            {/* WEB DEVELOPMENT */}

            <path
              d="M360 250 C325 225 290 195 250 165"
              stroke="#38BDF8"
              className="connection"
            />


            {/* E-COMMERCE */}

            <path
              d="M360 250 C395 225 430 195 470 165"
              stroke="#F59E0B"
              className="connection connectionReverse"
            />


            {/* SEO */}

            <path
              d="M360 250 C315 250 275 250 245 250"
              stroke="#10B981"
              className="connection"
            />


            {/* SOCIAL MEDIA */}

            <path
              d="M360 250 C405 250 445 250 475 250"
              stroke="#818CF8"
              className="connection connectionReverse"
            />


            {/* HOSTING */}

            <path
              d="M360 250 C325 275 290 305 250 335"
              stroke="#EC4899"
              className="connection"
            />


            {/* FULL-TIME SUPPORT */}

            <path
              d="M360 250 C395 275 430 305 470 335"
              stroke="#14B8A6"
              className="connection connectionReverse"
            />


            {/* =====================================================
                CONNECTION GLOW DOTS
            ====================================================== */}

            <circle
              cx="305"
              cy="210"
              r="3"
              fill="#38BDF8"
              className="movingDot"
            />

            <circle
              cx="415"
              cy="210"
              r="3"
              fill="#F59E0B"
              className="movingDot"
              style={{ animationDelay: '0.3s' }}
            />

            <circle
              cx="300"
              cy="250"
              r="3"
              fill="#10B981"
              className="movingDot"
              style={{ animationDelay: '0.6s' }}
            />

            <circle
              cx="420"
              cy="250"
              r="3"
              fill="#818CF8"
              className="movingDot"
              style={{ animationDelay: '0.9s' }}
            />

            <circle
              cx="305"
              cy="290"
              r="3"
              fill="#EC4899"
              className="movingDot"
              style={{ animationDelay: '1.2s' }}
            />

            <circle
              cx="415"
              cy="290"
              r="3"
              fill="#14B8A6"
              className="movingDot"
              style={{ animationDelay: '1.5s' }}
            />


            {/* =====================================================
                VESTAL CORE
            ====================================================== */}

            <g className="corePulse">

              {/* Outer rotating ring */}

              <circle
                cx="360"
                cy="250"
                r="62"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.8"
                className="orbit"
              />


              {/* Core outer circle */}

              <circle
                cx="360"
                cy="250"
                r="51"
                fill="#07192B"
                stroke="#0F52BA"
                strokeWidth="2"
              />


              {/* Main core */}

              <circle
                cx="360"
                cy="250"
                r="46"
                fill="url(#coreGradient)"
                stroke="#60A5FA"
                strokeWidth="2.5"
                filter="url(#shadow)"
              />


              {/* Inner highlight */}

              <circle
                cx="360"
                cy="250"
                r="38"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="1"
                opacity="0.35"
              />


              {/* =================================================
                  CORE ICON
              ================================================== */}

              <g transform="translate(341 222)">

                <path
                  d="
                    M19 2
                    L3 10
                    L19 18
                    L35 10
                    L19 2z

                    M3 20
                    L19 28
                    L35 20

                    M3 30
                    L19 38
                    L35 30
                  "
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

              </g>


              {/* Core text */}

              <text
                x="360"
                y="274"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="10"
                fontWeight="600"
                letterSpacing="0.08em"
              >
                VESTAL CORE
              </text>

            </g>


            {/* =====================================================
                WEB DEVELOPMENT
            ====================================================== */}

            <g className="floatUp">

              <g transform="translate(105 125)">

                <rect
                  width="150"
                  height="52"
                  rx="14"
                  fill="#0A2034"
                  stroke="#38BDF8"
                  strokeWidth="1.8"
                  filter="url(#shadow)"
                />

                <circle
                  cx="25"
                  cy="26"
                  r="15"
                  fill="url(#webGradient)"
                />

                <text
                  x="25"
                  y="30"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="9"
                  fontWeight="700"
                >
                  WEB
                </text>

                <text
                  x="48"
                  y="30"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="600"
                >
                  Web Development
                </text>

              </g>

            </g>


            {/* =====================================================
                E-COMMERCE
            ====================================================== */}

            <g className="floatDown">

              <g transform="translate(465 125)">

                <rect
                  width="150"
                  height="52"
                  rx="14"
                  fill="#291D0A"
                  stroke="#F59E0B"
                  strokeWidth="1.8"
                  filter="url(#shadow)"
                />

                <circle
                  cx="25"
                  cy="26"
                  r="15"
                  fill="url(#orangeGradient)"
                />

                <text
                  x="25"
                  y="30"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="8"
                  fontWeight="700"
                >
                  E-C
                </text>

                <text
                  x="48"
                  y="30"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="600"
                >
                  E-Commerce
                </text>

              </g>

            </g>


            {/* =====================================================
                SEO
            ====================================================== */}

            <g className="floatDown">

              <g transform="translate(100 224)">

                <rect
                  width="150"
                  height="52"
                  rx="14"
                  fill="#06291E"
                  stroke="#10B981"
                  strokeWidth="1.8"
                  filter="url(#shadow)"
                />

                <circle
                  cx="25"
                  cy="26"
                  r="15"
                  fill="url(#greenGradient)"
                />

                <text
                  x="25"
                  y="30"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="9"
                  fontWeight="700"
                >
                  SEO
                </text>

                <text
                  x="48"
                  y="30"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="600"
                >
                  SEO Growth
                </text>

              </g>

            </g>


            {/* =====================================================
                SOCIAL MEDIA
            ====================================================== */}

            <g className="floatUp">

              <g transform="translate(470 224)">

                <rect
                  width="150"
                  height="52"
                  rx="14"
                  fill="#1E1B4B"
                  stroke="#818CF8"
                  strokeWidth="1.8"
                  filter="url(#shadow)"
                />

                <circle
                  cx="25"
                  cy="26"
                  r="15"
                  fill="url(#purpleGradient)"
                />

                <text
                  x="25"
                  y="30"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="8"
                  fontWeight="700"
                >
                  SMM
                </text>

                <text
                  x="48"
                  y="30"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="600"
                >
                  Social Media
                </text>

              </g>

            </g>


            {/* =====================================================
                WEB HOSTING
            ====================================================== */}

            <g className="floatUp">

              <g transform="translate(105 323)">

                <rect
                  width="150"
                  height="52"
                  rx="14"
                  fill="#2C081C"
                  stroke="#EC4899"
                  strokeWidth="1.8"
                  filter="url(#shadow)"
                />

                <circle
                  cx="25"
                  cy="26"
                  r="15"
                  fill="url(#pinkGradient)"
                />

                <text
                  x="25"
                  y="30"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="8"
                  fontWeight="700"
                >
                  HOST
                </text>

                <text
                  x="48"
                  y="30"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="600"
                >
                  Hosting Support
                </text>

              </g>

            </g>


            {/* =====================================================
                FULL-TIME SUPPORT
            ====================================================== */}

            <g className="floatDown">

              <g transform="translate(465 323)">

                <rect
                  width="150"
                  height="52"
                  rx="14"
                  fill="#042723"
                  stroke="#14B8A6"
                  strokeWidth="1.8"
                  filter="url(#shadow)"
                />

                <circle
                  cx="25"
                  cy="26"
                  r="15"
                  fill="url(#tealGradient)"
                />

                <text
                  x="25"
                  y="30"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="8"
                  fontWeight="700"
                >
                  24/7
                </text>

                <text
                  x="48"
                  y="30"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="600"
                >
                  Full-Time Support
                </text>

              </g>

            </g>


            {/* =====================================================
                ORBITING PARTICLES
            ====================================================== */}

            <circle
              cx="360"
              cy="105"
              r="4"
              fill="#38BDF8"
              className="particle orbit"
            />

            <circle
              cx="360"
              cy="395"
              r="4"
              fill="#FBBF24"
              className="particle orbitReverse"
            />

            <circle
              cx="215"
              cy="250"
              r="3.5"
              fill="#34D399"
              className="particle orbit"
            />

            <circle
              cx="505"
              cy="250"
              r="3.5"
              fill="#A5B4FC"
              className="particle orbitReverse"
            />

          </svg>
        </div>
      </div>
    </div>
  );
};