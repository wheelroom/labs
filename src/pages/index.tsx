/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx } from '@emotion/react'
import { UserContext } from '../lib/root-element-wrapper'
import { useContext } from 'react'

const HomePage = (props: any) => {
  const css = {
    backgroundColor: 'var(--some-box-background-color)',
    color: 'var(--some-box-text-color)',
    padding: '10px',
  }
  const { themeIds, setThemeId } = useContext(UserContext)
  const handleClick = (themeId: any) => {
    console.log('clicked', themeId)
    setThemeId(themeId)
  }

  return (
    <div css={css}>
      <h1>Home</h1>
      <p>This is the homepage</p>
      <p>{props.data.site.siteMetadata.title}</p>
      <div css={{ display: 'flex' }}>
        {themeIds.map((themeId: any) => (
          <a
            css={{ color: 'var(--some-box-text-color)', padding: '5px' }}
            key={themeId}
            href="#"
            onClick={() => handleClick(themeId)}
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
