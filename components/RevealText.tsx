'use client'

import { motion } from 'framer-motion'

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export default function RevealText({
  children,
  delay = 0,
  className = '',
  once = true,
}: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '110%', opacity: 0.01 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once, margin: '-40px' }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.65, 0.05, 0, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
