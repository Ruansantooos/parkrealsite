'use client'

import React, { createContext, useContext } from 'react'
import type { Dictionary, Locale } from '../app/dictionaries'

type I18nContextType = {
  dict: Dictionary
  locale: Locale
}

const I18nContext = createContext<I18nContextType | null>(null)

export const I18nProvider = ({
  children,
  dict,
  locale,
}: {
  children: React.ReactNode
  dict: Dictionary
  locale: Locale
}) => {
  return (
    <I18nContext.Provider value={{ dict, locale }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
