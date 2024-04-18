'use client'

import { ThemeType } from '@/types/dataTypes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { useTheme } from '@/context/ThemeProvider'

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  // const toggleTheme = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  //   console.log('🚀 ~ toggleTheme ~ theme:', theme)
  // }

  // const changeTheme = (theme: ThemeType) => {
  //   setTheme(theme)
  //   if (theme === 'light') {
  //     document.body.classList.remove('dark')
  //   } else {
  //     document.body.classList.add('dark')
  //   }
  //   console.log('🚀 ~ changeTheme ~ theme:', theme)
  // }

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
