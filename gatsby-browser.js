// import React, { Provider, useEffect, useState } from 'react'
import React from 'react'
import { ThemeProvider } from './src/lib/theme-provider/theme-provider'
import { UserProvider } from './src/lib/user-provider/user-provider'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <UserProvider>{element}</UserProvider>
    </ThemeProvider>
  )
}
