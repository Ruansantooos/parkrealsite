'use client'

import { motion } from 'framer-motion'
import { Clock, Phone } from '@phosphor-icons/react'
import RevealText from '@/components/RevealText'

const infoCards = [
  {
    icon: Clock,
    label: 'Horários',
    value: 'Segunda a Sexta: 07h às 22h\nSábado e Domingo: 08h às 20h',
    href: null,
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(11) 98181-7779',
    href: 'tel:+5511981817779',
  },
]

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-[#232323]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <RevealText delay={0}>
            <span className="text-[#4DFFA0] text-[10px] font-medium tracking-[0.35em] uppercase block mb-4">
              Localização
            </span>
          </RevealText>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.08] text-[#f0f0f0]">
            <RevealText delay={0.1}>Onde nos <span className="font-bold">encontrar</span></RevealText>
            <RevealText delay={0.22}>
              <span className="text-white/40 font-extralight">Park Real.</span>
            </RevealText>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT — 40% info cards */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[40%] flex flex-col gap-4"
          >
            {infoCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#262626] border border-[#333333] rounded-xl p-5 flex gap-4 items-start hover:border-[#4DFFA0]/50 transition-colors duration-300"
                >
                  <div className="mt-0.5 shrink-0 w-9 h-9 rounded-lg bg-[#4DFFA0]/15 flex items-center justify-center">
                    <Icon size={18} weight="duotone" className="text-[#f0f0f0]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#71717a] uppercase tracking-wider font-medium block mb-1">
                      {card.label}
                    </span>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="text-[#f0f0f0] text-sm font-medium hover:text-[#4DFFA0] transition-colors"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-[#f0f0f0] text-sm font-medium whitespace-pre-line">
                        {card.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}

            {/* WhatsApp card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#262626] border border-[#333333] rounded-xl p-5 flex gap-4 items-center hover:border-[#4DFFA0]/50 transition-colors duration-300"
            >
              <div className="shrink-0 w-9 h-9 rounded-lg bg-[#4DFFA0]/15 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f0f0f0" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-xs text-[#71717a] uppercase tracking-wider font-medium block mb-1">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/5511981817779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0f0f0] text-sm font-semibold hover:text-[#4DFFA0] transition-colors"
                  style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.1)' }}
                >
                  Enviar mensagem
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — 60% map */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[60%]"
          >
            <div className="rounded-2xl overflow-hidden border border-[#333333] h-[300px] lg:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975957508345!2d-46.6557!3d-23.5630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ2LjgiUyA0NsKwMzknMjAuNSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Park Real Estacionamentos"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
