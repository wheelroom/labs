import React, { useEffect, useState } from 'react'
import { Global } from '@emotion/react'
import { theme } from './theme'
import { cssObjToVars } from './css-obj-to-vars'

export const UserContext = React.createContext({} as any)

export const RootElementWrapper = (props: any) => {
  const [flags] = useState({
    someFlag: true,
  })
  const themeIds = Object.keys(theme)
  const [themeId, setThemeId] = useState(themeIds[0])

  useEffect(() => {
    console.log('themeId', themeId)
  }, [setThemeId])

  const value = { themeId, themeIds, setThemeId, flags }

  const globalCss = {
    ':root': cssObjToVars({ obj: theme[themeId] }),
  }

  return (
    <>
      <Global styles={globalCss} />
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    </>
  )
}
