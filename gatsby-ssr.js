import React from 'react'
import { StyleElement } from './src/theme-provider/lib/style-element'

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents([
    <script key="1" type="text/javascript" src={'set-vars.js'} />,
  ])
  // Add pure css theme for when javascript is disabled
  setHeadComponents([<StyleElement key="2" schemaId="light" />])
}
