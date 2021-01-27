import { theme } from '../lib/theme'

console.log('localStorage', localStorage.theme)
Object.keys(theme).forEach((key) => console.log('Key', key))
