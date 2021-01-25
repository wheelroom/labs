import * as React from 'react'
import { graphql } from 'gatsby'

const HomePage = (data: any) => (
  <div>
    <h1>Home</h1>
    <p>This is the homepage [{data.site.siteMetadata.title}]</p>
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
