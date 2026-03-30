'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useI18n } from './I18nProvider'

export default function ScrollPhrase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { dict } = useI18n()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Phrase fades in at 15%, stays until 75%, then fades out
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.72, 0.88], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0.05, 0.2, 0.72, 0.88], ['36px', '0px', '0px', '-36px'])

  return (
    // Outer container: tall enough to allow scroll-through
    <div ref={containerRef} className="relative h-[120vh]">
      {/* Sticky inner — stays pinned while parent scrolls */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1e1e1e]">
        {/* Thin decorative lines */}
        <motion.div style={{ opacity }} className="w-px h-16 bg-gradient-to-b from-transparent to-[#444444] mb-10" />

        <motion.div style={{ opacity, y }} className="text-center px-8 max-w-4xl">
          {/* Label */}
          {/* Main phrase */}
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.1] text-[#f0f0f0]">
            {dict.scrollPhrase.naoEntregamos}
            <span className="font-bold text-white">
              {dict.scrollPhrase.vaga}
            </span>
            <br />
            {dict.scrollPhrase.entregamos}
            <span className="relative inline-block font-bold">
              {dict.scrollPhrase.perfeicao}
              {/* Underline accent */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q100 0 200 5"
                  stroke="#4DFFA0"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {dict.scrollPhrase.emMovimento}
          </p>
        </motion.div>

        <motion.div style={{ opacity }} className="w-px h-16 bg-gradient-to-b from-[#444444] to-transparent mt-10" />
      </div>
    </div>
  )
}
