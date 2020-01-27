import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { FixedBar } from '../components'
import { BREAKPOINT } from '../utils/constants'
import { ThemeToggle } from './ThemeToggle'

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Kaushan Script', cursive;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`

export const HeaderLogo = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>Fifo</Logo>
      </Link>
      <ThemeToggle />
    </HeaderWrapper>
  )
}
