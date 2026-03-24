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
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
      >
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source src="/video hero/hero.mp4" type="video/mp4" />
          <source src="/video hero/hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        {/* Scroll-driven extra darkening */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/80 to-transparent" />
      </motion.div>

      {/* Text content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full px-8 lg:px-16 min-h-[100dvh] flex flex-col justify-center pt-28 pb-32 max-w-2xl"
      >
        {/* Headline */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.8rem] lg:text-[4rem] xl:text-[4.8rem] leading-[1.08] font-light text-white tracking-tight"
          >
            <span className="font-extralight text-white/50">Real</span><br />
            <span className="font-bold">Experiência.</span><br />
            <span className="font-extralight text-white/70">Real Segurança.</span>
          </motion.h1>
        </div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-px bg-[#4DFFA0] origin-left mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-sm lg:text-base leading-relaxed max-w-xs font-light mb-12"
        >
          Cuidado real com cada detalhe. Tecnologia real a serviço do seu veículo.
        </motion.p>

      </motion.div>

      {/* CTAs — bottom right (onde era o WhatsApp) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-8 lg:left-16 z-20 flex items-center gap-3"
      >
        <a
          href="#contato"
          className="px-6 py-3 rounded-full border border-white/30 text-white/80 font-light text-sm hover:border-white/60 hover:text-white transition-colors duration-300 active:scale-95 whitespace-nowrap"
        >
          Reservar Vaga
        </a>
        <a
          href="#servicos"
          className="px-6 py-3 rounded-full border border-white/30 text-white/80 font-light text-sm hover:border-white/60 hover:text-white transition-colors duration-300 active:scale-95 whitespace-nowrap"
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
