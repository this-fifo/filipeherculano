import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Footer, GlobalStyles } from '../components'
import { BREAKPOINT } from '../utils/constants'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 var(--sides-padding-desktop);

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 var(--sides-padding-mobile);
  }
`

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
  }
`

export const Layout = ({ children, styles }) => {
  useLayoutEffect(() => {
    document.body.style.backgroundImage = ''
    if (styles) {
      document.body.style.backgroundImage = `url(${styles.fifo.childImageSharp.fluid.src})`
      document.body.style.backgroundRepeat = 'no-repeat'
      document.body.style.backgroundPosition = 'center center'
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundBlendMode = 'multiply'
    }
  }, [styles])

  const style = styles
    ? {
        color: 'whitesmoke',
        mixBlendMode: 'difference',
      }
    : {}
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Content style={style}>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
