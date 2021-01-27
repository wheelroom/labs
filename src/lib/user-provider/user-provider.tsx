import React, { useState } from 'react'

export const UserContext = React.createContext({} as any)

export const UserProvider = (props: any) => {
  const [flags] = useState({
    someFlag: true,
  })
  const value = { flags }

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}
