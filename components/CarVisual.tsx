export default function CarVisual() {
  return (
    <svg
      viewBox="0 0 1000 480"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 40px 80px rgba(77,255,160,0.15))' }}
    >
      <defs>
        {/* Body gradient */}
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8f8f8" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </linearGradient>

        {/* Glass gradient */}
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d0e8f8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#b8d8f0" stopOpacity="0.7" />
        </linearGradient>

        {/* Wheel gradient */}
        <radialGradient id="wheelGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#444444" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>

        {/* Rim gradient */}
        <radialGradient id="rimGrad" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#888888" />
          <stop offset="100%" stopColor="#555555" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Body shadow */}
        <filter id="bodyShadow" x="-5%" y="-10%" width="115%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Ground reflection / shadow */}
      <ellipse cx="490" cy="440" rx="420" ry="18" fill="rgba(0,0,0,0.05)" />

      {/* ── MAIN BODY ─────────────────────────────────── */}
      <g filter="url(#bodyShadow)">
        {/* Lower body hull */}
        <path
          d="
            M 90 370
            C 90 355, 110 335, 160 325
            L 820 320
            C 870 322, 900 338, 920 365
            L 940 385
            L 940 400
            L 60 400
            L 60 385
            Z
          "
          fill="url(#bodyGrad)"
          stroke="#d8d8d8"
          strokeWidth="1.5"
        />

        {/* Cabin / greenhouse */}
        <path
          d="
            M 240 322
            C 248 268, 278 215, 335 195
            L 660 190
            C 718 192, 762 235, 782 295
            L 790 322
            Z
          "
          fill="url(#bodyGrad)"
          stroke="#d0d0d0"
          strokeWidth="1.5"
        />
      </g>

      {/* ── WINDOWS ───────────────────────────────────── */}
      {/* Windshield */}
      <path
        d="
          M 252 320
          C 258 268, 282 218, 336 200
          L 475 196
          L 475 318
          Z
        "
        fill="url(#glassGrad)"
        stroke="#c0d8e8"
        strokeWidth="1"
      />

      {/* Rear window */}
      <path
        d="
          M 492 318
          L 492 196
          L 658 192
          C 714 196, 756 235, 775 295
          L 778 318
          Z
        "
        fill="url(#glassGrad)"
        stroke="#c0d8e8"
        strokeWidth="1"
      />

      {/* Window divider (B-pillar) */}
      <rect x="477" y="196" width="14" height="124" fill="#d0d0d0" rx="2" />

      {/* Windshield inner highlight */}
      <path
        d="M 260 315 C 268 272, 288 230, 338 210 L 400 207 L 400 312 Z"
        fill="rgba(255,255,255,0.18)"
      />

      {/* ── DOOR DETAIL ───────────────────────────────── */}
      {/* Door line */}
      <path
        d="M 310 320 L 310 375"
        stroke="#d4d4d4"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 620 318 L 620 373"
        stroke="#d4d4d4"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Door handle front */}
      <rect x="360" y="340" width="48" height="10" rx="5" fill="#c8c8c8" />
      <rect x="361" y="341" width="46" height="4" rx="2" fill="#e0e0e0" />

      {/* Door handle rear */}
      <rect x="650" y="338" width="48" height="10" rx="5" fill="#c8c8c8" />
      <rect x="651" y="339" width="46" height="4" rx="2" fill="#e0e0e0" />

      {/* ── MINT GREEN LED ACCENT STRIP ───────────────── */}
      <path
        d="M 155 387 L 820 383"
        stroke="#4DFFA0"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#glowGreen)"
        opacity="0.9"
      />
      {/* Subtle glow around strip */}
      <path
        d="M 155 387 L 820 383"
        stroke="#4DFFA0"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.2"
      />

      {/* ── HEADLIGHT (right/front, car facing right) ── */}
      <path
        d="M 88 348 L 130 335 L 135 355 L 90 365 Z"
        fill="#4DFFA0"
        opacity="0.85"
        filter="url(#glowGreen)"
      />
      <path
        d="M 88 348 L 130 335 L 135 355 L 90 365 Z"
        fill="#4DFFA0"
        opacity="0.3"
      />
      {/* Headlight glow cone */}
      <path
        d="M 62 340 L 88 348 L 90 365 L 62 370 Z"
        fill="rgba(77,255,160,0.08)"
      />

      {/* ── TAILLIGHT ─────────────────────────────────── */}
      <path
        d="M 912 338 L 940 345 L 940 375 L 912 372 Z"
        fill="#ff4444"
        opacity="0.75"
      />
      <path
        d="M 912 338 L 940 345 L 940 375 L 912 372 Z"
        fill="#ff6666"
        opacity="0.2"
      />

      {/* ── FRONT BUMPER / GRILLE AREA ────────────────── */}
      <path
        d="M 62 365 C 68 355, 82 340, 110 332 L 110 390 C 85 388, 68 380, 62 372 Z"
        fill="#eeeeee"
        stroke="#d8d8d8"
        strokeWidth="1"
      />
      {/* Bumper accent line */}
      <path
        d="M 68 368 C 72 360, 84 348, 108 342"
        stroke="#4DFFA0"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* ── REAR BUMPER ───────────────────────────────── */}
      <path
        d="M 910 332 C 930 336, 942 350, 946 368 L 946 392 C 932 398, 916 400, 905 398 L 905 330 Z"
        fill="#eeeeee"
        stroke="#d8d8d8"
        strokeWidth="1"
      />

      {/* ── FRONT WHEEL ARCH ─────────────────────────── */}
      <path
        d="M 100 400 A 125 125 0 0 1 350 400"
        fill="#e8e8e8"
        stroke="#d4d4d4"
        strokeWidth="1.5"
      />

      {/* ── REAR WHEEL ARCH ──────────────────────────── */}
      <path
        d="M 635 400 A 125 125 0 0 1 885 400"
        fill="#e8e8e8"
        stroke="#d4d4d4"
        strokeWidth="1.5"
      />

      {/* ── FRONT WHEEL ──────────────────────────────── */}
      <circle cx="225" cy="410" r="88" fill="url(#wheelGrad)" />
      {/* Tire highlight */}
      <path d="M 160 375 A 88 88 0 0 1 285 368" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
      {/* Rim */}
      <circle cx="225" cy="410" r="58" fill="url(#rimGrad)" />
      <circle cx="225" cy="410" r="22" fill="#2a2a2a" />
      {/* Spokes */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <line
            key={i}
            x1={225 + 22 * Math.cos(rad)}
            y1={410 + 22 * Math.sin(rad)}
            x2={225 + 55 * Math.cos(rad)}
            y2={410 + 55 * Math.sin(rad)}
            stroke="#6a6a6a"
            strokeWidth="7"
            strokeLinecap="round"
          />
        )
      })}
      {/* Center cap */}
      <circle cx="225" cy="410" r="10" fill="#888" />
      <circle cx="225" cy="410" r="5" fill="#4DFFA0" />

      {/* ── REAR WHEEL ───────────────────────────────── */}
      <circle cx="762" cy="410" r="88" fill="url(#wheelGrad)" />
      <path d="M 697 375 A 88 88 0 0 1 822 368" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
      <circle cx="762" cy="410" r="58" fill="url(#rimGrad)" />
      <circle cx="762" cy="410" r="22" fill="#2a2a2a" />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <line
            key={i}
            x1={762 + 22 * Math.cos(rad)}
            y1={410 + 22 * Math.sin(rad)}
            x2={762 + 55 * Math.cos(rad)}
            y2={410 + 55 * Math.sin(rad)}
            stroke="#6a6a6a"
            strokeWidth="7"
            strokeLinecap="round"
          />
        )
      })}
      <circle cx="762" cy="410" r="10" fill="#888" />
      <circle cx="762" cy="410" r="5" fill="#4DFFA0" />

      {/* ── ROOF ANTENNA ─────────────────────────────── */}
      <rect x="586" y="178" width="4" height="22" rx="2" fill="#c0c0c0" />

      {/* ── SIDE MIRROR ──────────────────────────────── */}
      <path
        d="M 218 292 L 248 285 L 248 305 L 218 308 Z"
        fill="#e0e0e0"
        stroke="#d0d0d0"
        strokeWidth="1"
      />
    </svg>
  )
}
