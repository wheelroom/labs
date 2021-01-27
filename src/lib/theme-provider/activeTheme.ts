import { dark } from './themes/glacier/dark'
import { light } from './themes/glacier/light'

export type SchemaId = 'dark' | 'light'

export const names = {
  theme: 'Glacier',
  schemas: { dark: 'Spooky', light: 'Sunny' },
}
export const schemas: { light: any; dark: any } = { dark, light }
