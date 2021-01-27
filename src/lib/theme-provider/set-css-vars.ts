import { schemas, SchemaId } from './activeTheme'
import { cssObjToVars } from './css-obj-to-vars'

// Get theme from local storage, from system from default
export const getSchemaId = () => {
  const preferDarkMode =
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const localStorageTheme = localStorage && localStorage.theme
  const schemaId: SchemaId = localStorageTheme || (preferDarkMode && 'dark') || 'light'
  if (localStorage && !localStorageTheme) {
    localStorage.theme = schemaId
  }
  return schemaId
}

export const setCssVars = () => {
  const schemaId = getSchemaId()
  const cssVars = cssObjToVars({ obj: schemas[schemaId] })
  Object.entries(cssVars).forEach(([key, value]: any) =>
    document.documentElement.style.setProperty(key, value)
  )
}
