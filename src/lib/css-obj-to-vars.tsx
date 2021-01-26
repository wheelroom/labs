// Convert camelCase to lower-case-dash
const camelToDash = (str: string) => {
  return str
    .replace(/\W+/g, '-')
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

// Convert object with css to css vars
export const cssObjToVars = ({ obj, cssVars, prefix }: any) => {
  cssVars = cssVars || {}
  prefix = prefix || ''
  Object.entries(obj).map(([name, value]) => {
    if (typeof value === 'object') {
      cssObjToVars({ obj: value, cssVars, prefix: `${camelToDash(name)}` })
    } else {
      cssVars[`--${prefix}-${camelToDash(name)}`] = value
    }
  })
  return cssVars
}
