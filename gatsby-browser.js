import React, { Provider } from 'react'
import { theme } from './theme.js'
import { Global } from '@emotion/react'

const UserContext = React.createContext({})

const value = { theme }
const globalCss = {
  ':root': {
    '--test-background': 'yellow',
  },
}

export const wrapRootElement = ({ element }) => (
  <>
    <Global styles={globalCss} />
    <UserContext.Provider value={value}>{element}</UserContext.Provider>
  </>
)
