import { theme } from '../lib/theme'
import { cssObjToVars } from '../lib/css-obj-to-vars'

const themeIds = Object.keys(theme)
const themeId = localStorage.theme || themeIds[0]

if (!localStorage.theme) {
  localStorage.theme = themeId
}
const cssVars = cssObjToVars({ obj: theme[themeId] })
console.log(`Found themeId ${themeId}, setting css vars:`, cssVars)

Object.entries(cssVars).forEach(([key, value]: any) =>
  document.documentElement.style.setProperty(key, value)
)
