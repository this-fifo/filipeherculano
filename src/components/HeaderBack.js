import React, { createRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { FixedBar } from '../components'
import { ThemeToggle } from './ThemeToggle'
import { BREAKPOINT } from '../utils/constants'
import { WhiteArrowBack } from '../assets/icons'

const Icon = styled.img`
  height: 34px;
  max-width: 100%;
  max-height: 100%;
  width: 34px;

  @media (max-width: ${BREAKPOINT}px) {
    height: 28px;
    width: 28px;
  }
`

export const HeaderBack = () => {
  const ref = createRef()

  return (
    <FixedBar style={{ justifyContent: 'space-between' }}>
      <Link to="/">
        <Icon ref={ref} src={WhiteArrowBack} alt="Back" />
      </Link>
      <ThemeToggle arrow={ref} />
    </FixedBar>
  )
}
