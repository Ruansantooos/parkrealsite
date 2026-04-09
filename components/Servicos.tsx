'use client'

import { motion } from 'framer-motion'
import { Headset, ShieldCheck, Users, Cpu } from '@phosphor-icons/react'
import RevealText from '@/components/RevealText'
import { useI18n } from './I18nProvider'

const cardReveal = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Servicos() {
  const { dict } = useI18n()

  const cards = [
    {
      id: 'atendimento',
      icon: Headset,
      tag: '01',
      title: dict.servicos.atendimento,
      description: dict.servicos.atendimentoDesc,
      accent: '#4DFFA0',
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-48 h-48 rounded-full border border-[#4DFFA0]/10 absolute" />
          <div className="w-72 h-72 rounded-full border border-[#4DFFA0]/5 absolute" />
          <div className="w-96 h-96 rounded-full border border-[#4DFFA0]/[0.03] absolute" />
          <div
            className="w-40 h-40 rounded-full absolute top-4 right-4 opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(77,255,160,0.35) 0%, transparent 70%)' }}
          />
          <Headset size={72} weight="thin" className="text-white/10 relative z-10" />
        </div>
      ),
      size: 'large',
    },
    {
      id: 'seguranca',
      icon: ShieldCheck,
      tag: '02',
      title: dict.servicos.seguranca,
      description: dict.servicos.segurancaDesc,
      accent: '#4DFFA0',
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="w-56 h-56 rounded-full absolute opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(77,255,160,0.5) 0%, transparent 65%)' }}
          />
          <ShieldCheck size={80} weight="thin" className="text-white/8 relative z-10" />
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-[#4DFFA0]/10 rounded-full"
              style={{ width: `${(i + 1) * 80}px`, height: `${(i + 1) * 80}px` }}
            />
          ))}
        </div>
      ),
      size: 'small',
    },
    {
      id: 'equipe',
      icon: Users,
      tag: '03',
      title: dict.servicos.equipe,
      description: dict.servicos.equipeDesc,
      accent: '#4DFFA0',
      visual: (
        <div className="absolute inset-0 overflow-hidden flex items-end justify-center pb-6">
          <div className="flex items-end gap-2">
            {[40, 56, 72, 56, 40].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-full bg-gradient-to-t from-[#4DFFA0]/30 to-[#4DFFA0]/5"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <div
            className="absolute inset-0 opacity-10"
            style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(77,255,160,0.4) 0%, transparent 60%)' }}
          />
        </div>
      ),
      size: 'small',
    },
    {
      id: 'tech',
      icon: Cpu,
      tag: '04',
      title: dict.servicos.tech,
      description: dict.servicos.techDesc,
      accent: '#4DFFA0',
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="grid grid-cols-5 gap-1.5 opacity-20">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#4DFFA0]"
                style={{ opacity: Math.random() > 0.4 ? 1 : 0.2 }}
              />
            ))}
          </div>
          <div className="absolute top-8 right-8 w-24 h-auto opacity-40 group-hover:opacity-100 transition-opacity duration-500">
            <img 
              src="https://wpsbrasil.com/templates/yootheme/cache/logo-novoteste2-f902ec10.png" 
              alt="WPS Brasil Logo"
              className="w-full h-auto brightness-0 invert" 
            />
          </div>
          <Cpu size={64} weight="thin" className="text-white/10 absolute" />
        </div>
      ),
      size: 'large',
    },
  ]

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <RevealText delay={0}>
            <span className="text-[#4DFFA0] text-[10px] font-medium tracking-[0.35em] uppercase block mb-4">
              {dict.servicos.excelencia}
            </span>
          </RevealText>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#f0f0f0] leading-[1.08]">
            <RevealText delay={0.1}>{dict.servicos.pqEscolher} <span className="font-bold">{dict.servicos.escolher}</span></RevealText>
            <RevealText delay={0.22}><span className="text-white/40 font-extralight">{dict.servicos.aParkReal}</span></RevealText>
          </h2>
        </div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >

          {/* Card grande — Atendimento */}
          <motion.div
            custom={0}
            variants={cardReveal}
            className="relative rounded-3xl overflow-hidden bg-[#242424] border border-[#2e2e2e] lg:col-span-2 min-h-[280px] sm:min-h-[320px] group hover:border-[#4DFFA0]/20 transition-colors duration-500"
          >
            {cards[0].visual}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="w-9 h-9 rounded-xl bg-[#4DFFA0]/10 flex items-center justify-center mb-4">
                <Headset size={18} weight="duotone" className="text-[#4DFFA0]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1.5 tracking-tight">{cards[0].title}</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed max-w-sm">{cards[0].description}</p>
            </div>
          </motion.div>

          {/* Card pequeno — Segurança */}
          <motion.div
            custom={1}
            variants={cardReveal}
            className="relative rounded-3xl overflow-hidden bg-[#242424] border border-[#2e2e2e] min-h-[280px] sm:min-h-[320px] group hover:border-[#4DFFA0]/20 transition-colors duration-500"
          >
            {cards[1].visual}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <div className="w-9 h-9 rounded-xl bg-[#4DFFA0]/10 flex items-center justify-center mb-4">
                <ShieldCheck size={18} weight="duotone" className="text-[#4DFFA0]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1.5 tracking-tight">{cards[1].title}</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed">{cards[1].description}</p>
            </div>
          </motion.div>

          {/* Card pequeno — Equipe */}
          <motion.div
            custom={2}
            variants={cardReveal}
            className="relative rounded-3xl overflow-hidden bg-[#242424] border border-[#2e2e2e] min-h-[260px] sm:min-h-[280px] group hover:border-[#4DFFA0]/20 transition-colors duration-500"
          >
            {cards[2].visual}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <div className="w-9 h-9 rounded-xl bg-[#4DFFA0]/10 flex items-center justify-center mb-4">
                <Users size={18} weight="duotone" className="text-[#4DFFA0]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1.5 tracking-tight">{cards[2].title}</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed">{cards[2].description}</p>
            </div>
          </motion.div>

          {/* Card grande — Autotech */}
          <motion.div
            custom={3}
            variants={cardReveal}
            className="relative rounded-3xl overflow-hidden bg-[#242424] border border-[#2e2e2e] lg:col-span-2 min-h-[260px] sm:min-h-[280px] group hover:border-[#4DFFA0]/20 transition-colors duration-500"
          >
            {cards[3].visual}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="w-9 h-9 rounded-xl bg-[#4DFFA0]/10 flex items-center justify-center mb-4">
                <Cpu size={18} weight="duotone" className="text-[#4DFFA0]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1.5 tracking-tight">{cards[3].title}</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed max-w-sm">{cards[3].description}</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
