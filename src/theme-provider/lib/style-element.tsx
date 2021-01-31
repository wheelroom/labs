import React from 'react'
import { SchemaId, schemas } from '../themes/activeTheme'
import { cssObjToVars } from './css-obj-to-vars'

interface StyleElementProps {
  schemaId: SchemaId
}

export const StyleElement = (props: StyleElementProps) => {
  const cssVars = cssObjToVars({ obj: schemas[props.schemaId] })
  let cssVarsString = ''
  Object.entries(cssVars).map(([name, value]) => {
    cssVarsString += `${name}: ${value}; `
  })
  return <style>{`:root { ${cssVarsString} }`}</style>
}
