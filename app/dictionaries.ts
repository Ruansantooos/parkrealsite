import pt from '../dictionaries/pt.json'
import en from '../dictionaries/en.json'
import es from '../dictionaries/es.json'

export type Locale = 'pt' | 'en' | 'es'
export type Dictionary = typeof pt

const dictionaries: Record<Locale, Dictionary> = {
  pt,
  en,
  es,
}

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] ?? dictionaries['pt']
}
