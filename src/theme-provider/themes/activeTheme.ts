import { dark } from './glacier/dark'
import { light } from './glacier/light'

export type SchemaId = 'dark' | 'light'

export const themeNames = {
  theme: 'Glacier',
  schemas: { dark: 'Spooky', light: 'Sunny' },
}
export const schemas: { light: any; dark: any } = { dark, light }
