import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { ButtonLink } from '../components'
import { BREAKPOINT } from '../utils/constants'

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: left;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`

export const Footer = () => {
  return (
    <Container>
      <Link to="/blog" className="blog-link">
        <p>blog</p>
      </Link>
      <Link to="/about" className="about-link">
        <p>about</p>
      </Link>
      <ButtonLink
        href="https://github.com/this-fifo"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </ButtonLink>
    </Container>
  )
}
