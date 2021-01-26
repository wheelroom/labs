/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx } from '@emotion/react'

const css = {
  '--bg': '#eee',
  backgroundColor: 'var(--test-background)',
  padding: '10px',
}

const HomePage = (props: any) => (
  <div css={css}>
    <h1>Home</h1>
    <p>This is the homepage</p>
    <p>{props.data.site.siteMetadata.title}</p>
  </div>
)

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
