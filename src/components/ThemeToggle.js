import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Moon, Sun } from '../assets/icons'
import { DarkArrowBack, WhiteArrowBack } from '../assets/icons'

const ToggleThemeButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
`
export const ThemeToggle = ({ arrow }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = value => {
    if (toggle) {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
    setToggle(!value)
  }

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', theme)
    setToggle(theme === 'dark' ? true : false)
    if (arrow && arrow.current) {
      arrow.current.src = toggle ? WhiteArrowBack : DarkArrowBack
    }
  }, [toggle, arrow])

  return (
    <ToggleThemeButton onClick={() => handleClick(toggle)}>
      {toggle ? (
        <span>
          <img src={Moon} alt="Toggle Light Mode" />
        </span>
      ) : (
        <span>
          <img src={Sun} alt="Toggle Dark Mode" />
        </span>
      )}
    </ToggleThemeButton>
  )
}
