import { defineStore } from 'pinia'
import type { Theme } from '@/types/application'

const LS_KEY_THEME = 'theme'

const setThemeLocalStorage = (theme: Theme): void => {
  localStorage.setItem(LS_KEY_THEME, theme)
}

const setThemeHtml = (theme: Theme): void => {
  const html = document.querySelector('html')
  if (!html) return

  const isDark = theme === 'dark'

  html.classList.add(isDark ? 'dark' : 'light')
  html.classList.remove(!isDark ? 'dark' : 'light')
}

const getThemeFromLs = (): Theme => {
  const lsTheme = localStorage.getItem(LS_KEY_THEME)

  if (lsTheme === null) {
    setThemeLocalStorage('light')
    setThemeHtml('light')

    return 'light'
  }

  if (lsTheme === 'light' || lsTheme === 'dark') {
    setThemeHtml(lsTheme)
    return lsTheme
  }

  setThemeLocalStorage('light')
  setThemeHtml('light')

  return 'light'
}

export const useApplicationStore = defineStore('app', {
  state: () => ({
    theme: getThemeFromLs()
  }),
  getters: {
    getTheme(): Theme {
      return this.theme
    },
    getIsLightTheme(): boolean {
      return this.theme === 'light'
    },
    getIsDarkTheme(): boolean {
      return this.theme === 'dark'
    }
  },
  actions: {
    toggleTheme(): void {
      const newTheme = this.theme === 'light' ? 'dark' : 'light'
      this.theme = newTheme

      setThemeLocalStorage(newTheme)
      setThemeHtml(newTheme)
    },
    setTheme(theme: 'light' | 'dark'): void {
      this.theme = theme
      setThemeLocalStorage(theme)
      setThemeHtml(theme)
    }
  }
})
