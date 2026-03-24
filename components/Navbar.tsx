'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
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
                ? 'bg-[#1e1e1e]/90 backdrop-blur-md border border-[#333333] shadow-sm'
                : 'bg-[#1e1e1e]/70 backdrop-blur-sm border border-[#333333]/60'
            }`}
          >
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

          {/* Logo — desktop only, canto direito */}
          <div className="hidden md:flex absolute right-0">
            <img src="/logo.svg" alt="Park Real" className="h-10 w-auto" />
          </div>

          {/* Mobile hamburger — canto direito */}
          <div className="md:hidden w-full flex justify-end">
            <button
              className="text-[#f0f0f0] p-2 rounded-full bg-[#1e1e1e]/80 border border-[#333333] backdrop-blur-sm hover:bg-[#333333] transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden mx-6 mt-2 rounded-2xl overflow-hidden bg-[#1e1e1e]/95 backdrop-blur-md border border-[#333333] shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-[#f0f0f0] text-base font-medium py-2 border-b border-[#333333] last:border-none transition-colors hover:text-[#4DFFA0]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={handleLinkClick}
                className="mt-1 w-full text-center px-5 py-3 rounded-full bg-white text-[#111111] font-semibold transition-all hover:bg-[#4DFFA0] hover:text-[#111111]"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
