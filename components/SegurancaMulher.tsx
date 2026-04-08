'use client'

import { motion } from 'framer-motion'
import { Lightbulb, ShieldCheck, VideoCamera } from '@phosphor-icons/react'
import RevealText from '@/components/RevealText'
import { useI18n } from './I18nProvider'

export default function SegurancaMulher() {
  const { dict } = useI18n()

  const features = [
    {
      title: dict.segurancaMulher.iluminacao,
      description: dict.segurancaMulher.iluminacaoDesc,
      icon: Lightbulb,
    },
    {
      title: dict.segurancaMulher.seguro,
      description: dict.segurancaMulher.seguroDesc,
      icon: ShieldCheck,
    },
    {
      title: dict.segurancaMulher.monitoramento,
      description: dict.segurancaMulher.monitoramentoDesc,
      icon: VideoCamera,
    },
  ]

  return (
    <section id="seguranca-mulher" className="py-24 lg:py-32 bg-[#1e1e1e] relative overflow-hidden">
      {/* Background glow effects with Rose Gold / Pink accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB5D5]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column - Copy */}
          <div className="flex-1 text-center lg:text-left">
            <RevealText delay={0}>
              <span className="text-[#FFB5D5] text-[10px] font-medium tracking-[0.35em] uppercase block mb-4">
                {dict.segurancaMulher.exclusivo}
              </span>
            </RevealText>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#f0f0f0] leading-[1.08] mb-6">
              <RevealText delay={0.1}>{dict.segurancaMulher.titulo1} <span className="font-bold">{dict.segurancaMulher.titulo2}</span></RevealText>
              <RevealText delay={0.22}><span className="text-white/40 font-extralight">{dict.segurancaMulher.titulo3}</span></RevealText>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/40 font-light text-base mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              {dict.segurancaMulher.desc}
            </motion.p>
          </div>

          {/* Right Column - Features */}
          <motion.div
            className="flex-1 w-full flex flex-col gap-6 lg:max-w-md"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-3xl bg-[#242424] border border-[#2e2e2e] group hover:border-[#FFB5D5]/30 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFB5D5]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <feature.icon size={24} weight="duotone" className="text-[#FFB5D5]" />
                </div>
                <div className="text-left">
                  <h4 className="text-[#f0f0f0] font-semibold text-lg mb-1.5 tracking-tight">{feature.title}</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
