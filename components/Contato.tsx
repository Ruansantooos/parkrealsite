'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, EnvelopeSimple, CheckCircle } from '@phosphor-icons/react'
import RevealText from '@/components/RevealText'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

const contactMethods = [
  {
    id: 'whatsapp',
    icon: null,
    label: 'WhatsApp',
    value: '(11) 98181-7779',
    href: 'https://wa.me/5511981817779',
  },
  {
    id: 'telefone',
    icon: Phone,
    label: 'Ligue para nós',
    value: '(11) 98181-7779',
    href: 'tel:+5511981817779',
  },
  {
    id: 'email',
    icon: EnvelopeSimple,
    label: 'E-mail',
    value: 'contato@parkreal.com.br',
    href: 'mailto:contato@parkreal.com.br',
  },
]

const inputClass =
  'w-full bg-[#262626] border border-[#333333] rounded-xl px-4 py-4 text-[#f0f0f0] placeholder-[#a1a1aa] focus:border-[#4DFFA0]/80 outline-none transition-colors duration-200 text-sm'

export default function Contato() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-24 lg:py-36 bg-[#1e1e1e]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">

        {/* Header — centralizado */}
        <div className="mb-14">
          {/* Logo centralizado */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <img src="/logo/logo-correto.svg" alt="Park Real Estacionamentos" className="h-20 w-auto" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.08] text-[#f0f0f0]">
            <RevealText delay={0.1}>Vamos <span className="font-bold">conversar</span></RevealText>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 font-light text-base mt-4 max-w-sm mx-auto"
          >
            Estamos prontos para atender você. Escolha o canal de sua preferência.
          </motion.p>
        </div>

        {/* Métodos de contato — centralizados em linha */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row justify-center gap-3 mb-12"
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.id}
              href={method.href}
              target={method.id === 'whatsapp' ? '_blank' : undefined}
              rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 bg-[#262626] border border-[#333333] rounded-2xl px-5 py-4 transition-all duration-300 hover:border-[#4DFFA0]/50 hover:bg-[#4DFFA0]/5 group"
            >
              <div className="shrink-0 w-8 h-8 rounded-lg bg-[#4DFFA0]/10 flex items-center justify-center">
                {method.id === 'whatsapp' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f0f0f0" width="16" height="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ) : method.icon ? (
                  <method.icon size={16} weight="duotone" className="text-[#f0f0f0]" />
                ) : null}
              </div>
              <div className="text-left">
                <span className="text-[10px] text-white/30 uppercase tracking-wider font-medium block">{method.label}</span>
                <span className="text-[#f0f0f0] text-sm font-medium">{method.value}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex-1 h-px bg-[#2e2e2e]" />
          <span className="text-white/20 text-xs tracking-widest uppercase font-light">ou envie uma mensagem</span>
          <div className="flex-1 h-px bg-[#2e2e2e]" />
        </motion.div>

        {/* Form — centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center gap-5 bg-[#262626] border border-[#333333] rounded-2xl p-14 text-center"
              >
                <CheckCircle size={56} weight="duotone" className="text-[#4DFFA0]" />
                <div>
                  <p className="text-[#f0f0f0] font-semibold text-xl mb-2">Mensagem enviada!</p>
                  <p className="text-white/40 text-sm font-light">Entraremos em contato em breve.</p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                  className="mt-2 px-6 py-2.5 rounded-full border border-[#333333] text-[#f0f0f0] text-sm font-light hover:border-[#4DFFA0]/60 hover:bg-[#4DFFA0]/10 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="bg-[#262626] border border-[#333333] rounded-2xl p-8 flex flex-col gap-4 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Nome</label>
                    <input id="name" name="name" type="text" required placeholder="Seu nome completo" value={form.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] text-white/30 uppercase tracking-wider font-medium">E-mail</label>
                    <input id="email" name="email" type="email" required placeholder="seu@email.com" value={form.email} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Telefone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(XX) XXXXX-XXXX" value={form.phone} onChange={handleChange} className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Mensagem</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Como podemos ajudar você?" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#111111] font-semibold py-4 rounded-xl hover:bg-[#4DFFA0] active:scale-[0.99] transition-all duration-300 text-sm mt-1"
                >
                  Enviar mensagem
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
