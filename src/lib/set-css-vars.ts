import { theme } from '../lib/theme'
import { cssObjToVars } from '../lib/css-obj-to-vars'

// Get theme from local storage, from system from default
export const getThemeId = () => {
  const preferDarkMode =
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const localStorageTheme = localStorage && localStorage.theme
  const themeIds = Object.keys(theme)
  // Assuming that themeIds[0] is light and themeIds[2] is dark
  const themeId = localStorageTheme || (preferDarkMode && themeIds[2]) || themeIds[0]
  if (localStorage && !localStorageTheme) {
    localStorage.theme = themeId
  }
  return themeId
}

export const setCssVars = () => {
  const themeId = getThemeId()
  const cssVars = cssObjToVars({ obj: theme[themeId] })
  Object.entries(cssVars).forEach(([key, value]: any) =>
    document.documentElement.style.setProperty(key, value)
  )
}
