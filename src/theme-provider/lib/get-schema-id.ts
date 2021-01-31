import { SchemaId } from "../themes/activeTheme"

// Get theme from local storage, from system from default
export const getSchemaId = () => {
    const preferDarkMode =
      window &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  
    const localStorageTheme = localStorage && localStorage.theme
    const schemaId: SchemaId =
      localStorageTheme || (preferDarkMode && 'dark') || 'light'
    if (localStorage && !localStorageTheme) {
      localStorage.theme = schemaId
    }
    return schemaId
  }
  