import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { favicon } from '../assets/icons'

export const Seo = ({ title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={title}
      titleTemplate={`%s ― ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: data.site.siteMetadata.description,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: data.site.siteMetadata.description,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ]}
      link={[{ rel: 'icon', type: 'image/png', href: `${favicon}` }]}
    />
  )
}
