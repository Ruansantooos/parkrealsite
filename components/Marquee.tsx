'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Star, Users, Car } from '@phosphor-icons/react'
import { useI18n } from './I18nProvider'

function MarqueeTrack({ reverse = false, items }: { reverse?: boolean, items: any[] }) {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-0"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-5 border-r border-[#333333] shrink-0"
            >
              <Icon size={14} weight="fill" className="text-[#f0f0f0] shrink-0" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#71717a] whitespace-nowrap uppercase">
                {item.text}
              </span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  const { dict } = useI18n()

  const items = [
    { icon: Star, text: dict.marquee.atendimento },
    { icon: ShieldCheck, text: dict.marquee.seguranca },
    { icon: Users, text: dict.marquee.profissionais },
    { icon: Car, text: dict.marquee.parkReal },
    { icon: Star, text: dict.marquee.atendimento },
    { icon: ShieldCheck, text: dict.marquee.seguranca },
    { icon: Users, text: dict.marquee.profissionais },
    { icon: Car, text: dict.marquee.parkReal },
  ]

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="border-y border-[#333333] bg-[#232323] overflow-hidden"
    >
      <MarqueeTrack items={items} />
      <div className="border-t border-[#333333]">
        <MarqueeTrack reverse items={items} />
      </div>
    </motion.div>
  )
}
