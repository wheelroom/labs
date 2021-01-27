import { theme } from '../lib/theme'
import { cssObjToVars } from '../lib/css-obj-to-vars'

// Get theme from local storage, from system from default
export const getThemeId = () => {
  const localStorageTheme = localStorage && localStorage.theme
  const themeIds = Object.keys(theme)
  const themeId = localStorageTheme || themeIds[0]
  if (!localStorageTheme && localStorage) {
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
