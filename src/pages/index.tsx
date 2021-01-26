/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx } from '@emotion/react'
import { UserContext } from '../lib/root-element-wrapper'
import { useContext } from 'react'

// A simple page that sets some colors from the root css variables (the theme)
const HomePage = (props: any) => {
  // Get themeIds and method to change theme from Context
  const { themeIds, setThemeId } = useContext(UserContext)

  return (
    <div
      css={{
        backgroundColor: 'var(--some-box-background-color)',
        color: 'var(--some-box-text-color)',
        padding: '10px',
      }}
    >
      <h1>Home</h1>
      <p>This is the homepage</p>
      <p>{props.data.site.siteMetadata.title}</p>
      <div css={{ display: 'flex' }}>
        {themeIds.map((themeId: any) => (
          <a
            css={{
              color: 'var(--some-box-link-text-color)',
              backgroundColor: 'var(--some-box-link-background-color)',
              margin: '5px',
              padding: '10px',
              borderRadius: '5px',
            }}
            key={themeId}
            href="#"
            onClick={() => setThemeId(themeId)}
          >
            Switch to theme {themeId}
          </a>
        ))}
      </div>
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
