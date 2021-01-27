/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx } from '@emotion/react'
import { ThemeContext } from '../lib/theme-provider/theme-provider'
import { useContext } from 'react'

// A simple page that sets some colors from the root css variables (the theme)
const HomePage = (props: any) => {
  // Get schemaIds and method to change theme from Context
  const { themeNames, setSchemaId } = useContext(ThemeContext)

  return (
    <div
      css={{
        backgroundColor: 'var(--section-bg)',
        color: 'var(--section-text)',
        padding: '10px',
      }}
    >
      <h1>Home</h1>
      <p>This is the homepage</p>
      <p>{props.data.site.siteMetadata.title}</p>
      <ul css={{ padding: 0, listStyleType: 'none' }}>
        {Object.entries(themeNames.schemas).map(
          ([schemaId, schemaName]: [any, any]) => (
            <li
              css={{
                backgroundColor: 'var(--button-primary-bg)',
                borderRadius: '5px',
                color: 'var(--button-primary-text)',
                cursor: 'pointer',
                margin: '5px',
                padding: '10px',
              }}
              key={schemaId}
              onClick={() => setSchemaId(schemaId)}
            >
              Switch {themeNames.theme} theme to {schemaName}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

export default HomePage
