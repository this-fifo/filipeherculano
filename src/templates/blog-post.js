import React from 'react'
import { graphql } from 'gatsby'

import {
  HeaderBack,
  HeadingXL,
  Layout,
  Seo,
  TextBody,
  TextDate,
} from '../components'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <Seo title={post.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <HeadingXL>{post.frontmatter.title}</HeadingXL>
        <TextDate>Filipe Herculano, {post.frontmatter.date}</TextDate>
        <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
