import React, { createRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'
import { graphql } from 'gatsby'

import { BREAKPOINT } from '../utils/constants'

import { HeaderLogo, HeadingXL, Layout, Seo } from '../components'

const Hero = styled.div`
  margin-bottom: 20vh;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`

const Home = ({ data }) => {
  const ref = createRef()

  useLayoutEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ['Filipe Herculano'],
      typeSpeed: 100,
    })
    return () => typed.destroy()
  }, [ref])

  return (
    <>
      <Seo title="Home" />
      <HeaderLogo />
      <Layout styles={data}>
        <Hero>
          <HeadingXL
            style={{ fontFamily: '"Kaushan Script", cursive' }}
            ref={ref}
          ></HeadingXL>
        </Hero>
      </Layout>
    </>
  )
}

export default Home

export const query = graphql`
  query {
    fifo: file(relativePath: { regex: "/fifo.jpeg/" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
