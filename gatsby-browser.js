// import React, { Provider, useEffect, useState } from 'react'
import React from 'react'
import { RootElementWrapper } from './src/lib/root-element-wrapper.tsx'

export const wrapRootElement = ({ element }) => {
  return <RootElementWrapper>{element}</RootElementWrapper>
}
