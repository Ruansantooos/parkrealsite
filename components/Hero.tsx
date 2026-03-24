'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  // Shrink + round effect on scroll
  const sectionScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.88])
  const sectionRadius = useTransform(scrollYProgress, [0, 0.4], [0, 28])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.5])

  return (
    <motion.section
      ref={containerRef}
      id="inicio"
      style={{ scale: sectionScale, borderRadius: sectionRadius }}
      className="sticky top-0 min-h-[100dvh] relative overflow-hidden bg-[#1e1e1e] origin-top z-0"
    >
      {/* Video background */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] lg:h-[115%] lg:-top-[7.5%]"
      >
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-[60%_center] lg:object-center"
        >
          <source src="/video hero/hero.mp4" type="video/mp4" />
          <source src="/video hero/hero.webm" type="video/webm" />
        </video>

        {/* Base overlay */}
        <div className="absolute inset-0 bg-black/50 lg:bg-black/45" />

        {/* Mobile: strong top gradient to darken sky area */}
        <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-[#111]/90 via-[#111]/50 to-transparent lg:hidden" />

        {/* Mobile: left gradient so text is readable */}
        <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-black/80 to-transparent lg:hidden" />

        {/* Desktop: right-side hide video logo */}
        <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-[#1e1e1e] to-transparent hidden lg:block" />

        {/* Scroll-driven extra darkening */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black pointer-events-none"
        />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] lg:h-[50%] bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
      </motion.div>

      {/* Text content — mobile: top-aligned, desktop: center-aligned */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full px-6 lg:px-16 min-h-[100dvh] flex flex-col justify-start lg:justify-center pt-28 lg:pt-0 pb-32 max-w-xl lg:max-w-2xl"
      >
        {/* Headline */}
        <div className="mb-5 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.4rem] sm:text-[2.8rem] lg:text-[4rem] xl:text-[4.8rem] leading-[1.05] font-light text-white tracking-tight"
          >
            <span className="font-extralight text-white/45">Novo conceito</span><br />
            <span className="font-bold">em estacionar.</span>
          </motion.h1>
        </div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-10 h-px bg-[#4DFFA0] origin-left mb-5"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/45 text-sm lg:text-base leading-relaxed max-w-[220px] sm:max-w-xs font-light"
        >
          Cuidamos de cada detalhe para que sua experiência seja realmente única.
        </motion.p>
      </motion.div>

      {/* CTAs — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-6 lg:left-16 z-20 flex flex-row items-center gap-3"
      >
        <a
          href="#contato"
          className="px-6 py-3 rounded-full border border-white/30 text-white/80 font-light text-sm hover:border-white/60 hover:text-white transition-all duration-300 active:scale-95 whitespace-nowrap backdrop-blur-sm"
        >
          Reservar Vaga
        </a>
        <a
          href="#servicos"
          className="px-6 py-3 rounded-full border border-white/20 text-white/55 font-light text-sm hover:border-white/50 hover:text-white/80 transition-all duration-300 active:scale-95 whitespace-nowrap backdrop-blur-sm"
        >
          Ver Serviços
        </a>
      </motion.div>

      {/* Scroll hint — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/25" />
        <span className="text-[9px] text-white/30 tracking-[0.25em] uppercase font-light" style={{ writingMode: 'vertical-rl' }}>
          scroll
        </span>
      </motion.div>
    </motion.section>
  )
}
