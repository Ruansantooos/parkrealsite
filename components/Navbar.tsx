'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Mensalista', href: '#mensalista' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-center relative">

          {/* Desktop nav — pill centralizado */}
          <div
            className={`hidden md:flex items-center gap-6 px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-[#1e1e1e]/90 backdrop-blur-md border border-white/10 shadow-lg'
                : 'bg-[#1e1e1e]/70 backdrop-blur-sm border border-white/5 shadow-sm'
            }`}
          >
            <div className="flex items-center mr-2">
              <img src="/logo/logo-correto.svg?v=1" alt="Park Real" className="h-7 w-auto" />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#71717a] text-sm font-medium transition-colors duration-200 hover:text-[#f0f0f0] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="ml-1 px-5 py-2 rounded-full bg-white text-[#111111] text-sm font-semibold transition-all duration-200 hover:bg-[#4DFFA0] hover:text-[#111111] active:scale-95 whitespace-nowrap"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile — Floating Pill with Logo */}
          <div className="md:hidden w-full flex justify-between items-center px-4 py-3 rounded-full bg-[#111111]/40 backdrop-blur-lg border border-white/10 shadow-xl">
             <img src="/logo/logo-correto.svg?v=1" alt="Park Real" className="h-11 w-auto ml-1" />
             <button
               className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
               onClick={() => setMenuOpen((prev) => !prev)}
               aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
             >
               {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — Floating Card */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-20 right-6 left-6 z-50 rounded-3xl overflow-hidden bg-[#161616]/60 backdrop-blur-2xl border border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <div className="flex items-center">
                   <span className="text-white font-medium text-sm">Park Real</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white/40 hover:text-white p-1"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col px-6 pt-2 pb-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="text-white/40 text-[0.95rem] font-medium py-4 border-b border-white/5 last:border-none transition-colors hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Action Button */}
              <div className="px-6 py-6 pt-4">
                <a
                  href="#contato"
                  onClick={handleLinkClick}
                  className="block w-full text-center px-5 py-4 rounded-2xl bg-white text-[#111111] font-bold text-sm transition-all hover:bg-[#4DFFA0] active:scale-[0.98]"
                >
                  Fale Conosco
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
