import { schemas } from '../themes/activeTheme'
import { cssObjToVars } from './css-obj-to-vars'
import { getSchemaId } from './get-schema-id'

export const setCssVars = () => {
  const schemaId = getSchemaId()
  const cssVars = cssObjToVars({ obj: schemas[schemaId] })
  Object.entries(cssVars).forEach(([key, value]: any) =>
    document.documentElement.style.setProperty(key, value)
  )
}
