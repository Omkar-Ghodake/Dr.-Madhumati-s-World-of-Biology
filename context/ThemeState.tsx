'use client'

import { ThemeContextType, ThemeType } from '@/types/dataTypes'
import React, { createContext, ReactNode, useContext, useState } from 'react'

const ThemeContext = createContext<ThemeContextType>(null)

const ThemeState = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.add('dark')
      setTheme('dark')
    } else {
      document.body.classList.remove('dark')
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context) return context

  throw new Error('Use useTheme inside ThemeContext Provider.')
}

export default ThemeState
export { ThemeContext, useTheme }
