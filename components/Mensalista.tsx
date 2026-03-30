'use client'

import { motion } from 'framer-motion'
import { CarProfile, ShieldCheck, Clock, WhatsappLogo, CheckCircle } from '@phosphor-icons/react'
import RevealText from '@/components/RevealText'

const benefits = [
  {
    title: 'Vaga Garantida',
    description: 'Sua vaga exclusiva, sempre disponível 24 horas por dia.',
    icon: CarProfile,
  },
  {
    title: 'Segurança Premium',
    description: 'Monitoramento contínuo e equipe dedicada à proteção do seu veículo.',
    icon: ShieldCheck,
  },
  {
    title: 'Acesso Livre',
    description: 'Entrada e saída rápidas via sistema automatizado e totens inteligentes.',
    icon: Clock,
  },
]

export default function Mensalista() {
  return (
    <section id="mensalista" className="py-24 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4DFFA0]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column - Copy */}
          <div className="flex-1 text-center lg:text-left">
            <RevealText delay={0}>
              <span className="text-[#4DFFA0] text-[10px] font-medium tracking-[0.35em] uppercase block mb-4">
                Plano Mensalista
              </span>
            </RevealText>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#f0f0f0] leading-[1.08] mb-6">
              <RevealText delay={0.1}>Assine o seu <span className="font-bold">espaço</span></RevealText>
              <RevealText delay={0.22}><span className="text-white/40 font-extralight">com exclusividade</span></RevealText>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/40 font-light text-base mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Fazer o mensal na Park Real é garantir tranquilidade todos os dias. Tenha acesso prioritário, atendimento VIP e a certeza de que seu veículo está no lugar mais seguro.
            </motion.p>

            {/* Benefícios */}
            <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#262626] border border-[#333333] flex items-center justify-center shrink-0">
                    <benefit.icon size={20} weight="duotone" className="text-[#4DFFA0]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[#f0f0f0] font-medium text-sm mb-1">{benefit.title}</h4>
                    <p className="text-white/40 text-[13px] font-light leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Card CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
            <div className="bg-[#262626] border border-[#333333] rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#4DFFA0]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4DFFA0]/10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4DFFA0]/10 border border-[#4DFFA0]/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#4DFFA0] animate-pulse" />
                  <span className="text-[#4DFFA0] text-xs font-medium tracking-wide">Vagas Limitadas</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">Reserva Mensal</h3>
                <p className="text-white/40 text-sm font-light mb-8">Fale diretamente com nossa equipe via WhatsApp para consultar valores e disponibilidade atualizada.</p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Atendimento prioritário',
                    'Pagamento facilitado',
                    'Sem burocracia na entrada'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} weight="fill" className="text-[#4DFFA0]" />
                      <span className="text-[#f0f0f0] text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5511981817779?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20mensalista%20da%20Park%20Real."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#4DFFA0] text-[#111111] font-semibold py-4 rounded-2xl hover:bg-[#3ce58c] active:scale-[0.98] transition-all duration-300 text-sm"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Fazer Reserva Agora
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
