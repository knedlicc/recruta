export type Language = 'en' | 'cs'

export const languages: { code: Language; name: string; flag: 'gb' | 'cz' }[] = [
  { code: 'en', name: 'English', flag: 'gb' },
  { code: 'cs', name: 'Čeština', flag: 'cz' },
]

export const defaultLanguage: Language = 'en'

