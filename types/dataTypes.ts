import React from 'react'

export type NavLinks = {
  title: string
  url: string
}

export type ThemeType = 'light' | 'dark'

export type ThemeContextType = {
  theme: ThemeType
  toggleTheme: () => void
} | null
