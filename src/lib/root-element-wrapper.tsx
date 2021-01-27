import React, { useEffect, useState } from 'react'
import { theme } from './theme'
import { setCssVars, getThemeId } from './set-css-vars'

export const UserContext = React.createContext({} as any)

export const RootElementWrapper = (props: any) => {
  const [flags] = useState({
    someFlag: true,
  })
  const [themeId, setThemeId] = useState(getThemeId())
  useEffect(() => {
    localStorage.theme = themeId
    setCssVars()
  }, [themeId])

  const themeIds = Object.keys(theme)
  const value = { themeId, themeIds, setThemeId, flags }

  return (
    <>
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    </>
  )
}
