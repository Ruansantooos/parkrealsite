'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const sections = [
  { id: 'inicio', label: 'INÍCIO', angle: -90 },
  { id: 'servicos', label: 'SERVIÇOS', angle: 0 },
  { id: 'localizacao', label: 'LOCAL', angle: 90 },
  { id: 'contato', label: 'CONTATO', angle: 180 },
]

export default function RadarNav() {
  const { scrollYProgress } = useScroll()

  // Needle rotation: full 360 as user scrolls through the page
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotate = useSpring(rawRotate, { stiffness: 60, damping: 20 })

  // Subtle orbit: radar drifts in a small arc as you scroll
  const rawDriftX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -10, 0, 10, 0])
  const rawDriftY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -8, 4, -8, 0])
  const driftX = useSpring(rawDriftX, { stiffness: 40, damping: 20 })
  const driftY = useSpring(rawDriftY, { stiffness: 40, damping: 20 })

  // Pulse scale
  const pulseScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1])

  return (
    <motion.div
      style={{ x: driftX, y: driftY, scale: pulseScale }}
      className="fixed bottom-28 right-6 z-40 hidden lg:block cursor-default select-none"
      title="Navegação"
    >
      <svg
        width="84"
        height="84"
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle cx="42" cy="42" r="40" stroke="#e4e4e7" strokeWidth="1" />

        {/* Inner rings */}
        <circle cx="42" cy="42" r="30" stroke="#e4e4e7" strokeWidth="0.6" strokeDasharray="2 4" />
        <circle cx="42" cy="42" r="18" stroke="#e4e4e7" strokeWidth="0.6" />

        {/* Tick marks (12) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = ((i * 30 - 90) * Math.PI) / 180
          const isMajor = i % 3 === 0
          const r1 = isMajor ? 34 : 36
          const r2 = 40
          return (
            <line
              key={i}
              x1={42 + r1 * Math.cos(angle)}
              y1={42 + r1 * Math.sin(angle)}
              x2={42 + r2 * Math.cos(angle)}
              y2={42 + r2 * Math.sin(angle)}
              stroke={isMajor ? '#a1a1aa' : '#d4d4d8'}
              strokeWidth={isMajor ? '1.2' : '0.7'}
              strokeLinecap="round"
            />
          )
        })}

        {/* Cardinal labels */}
        <text x="42" y="9" textAnchor="middle" fontSize="6" fill="#a1a1aa" fontWeight="700" letterSpacing="0.05em">N</text>
        <text x="78" y="45" textAnchor="middle" fontSize="6" fill="#a1a1aa" fontWeight="700" letterSpacing="0.05em">L</text>
        <text x="42" y="79" textAnchor="middle" fontSize="6" fill="#a1a1aa" fontWeight="700" letterSpacing="0.05em">S</text>
        <text x="7" y="45" textAnchor="middle" fontSize="6" fill="#a1a1aa" fontWeight="700" letterSpacing="0.05em">O</text>

        {/* Rotating group: needle + sweep */}
        <motion.g style={{ rotate, originX: '42px', originY: '42px' }}>
          {/* Sweep arc (quarter circle fill) */}
          <path
            d="M 42 42 L 42 14 A 28 28 0 0 1 70 42 Z"
            fill="rgba(77,255,160,0.06)"
            stroke="none"
          />
          {/* Main needle */}
          <line
            x1="42"
            y1="42"
            x2="42"
            y2="16"
            stroke="#4DFFA0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Tail needle (opposite, shorter) */}
          <line
            x1="42"
            y1="42"
            x2="42"
            y2="52"
            stroke="#d4d4d8"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Center dot */}
        <circle cx="42" cy="42" r="3.5" fill="#4DFFA0" />
        <circle cx="42" cy="42" r="1.5" fill="#111111" />
      </svg>
    </motion.div>
  )
}
