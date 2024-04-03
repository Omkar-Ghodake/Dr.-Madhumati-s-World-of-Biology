'use client'

import { useTheme } from '@/context/ThemeState'
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      size={'icon'}
      className='fixed bottom-5 right-5 md:bottom-10 md:right-10 rounded-full shadow-lg'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  )
}

export default ThemeButton
