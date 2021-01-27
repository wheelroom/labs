import React from 'react'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script key="1" type="text/javascript" src={"set-vars.js"}/>
])
}
