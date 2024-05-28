'use client'

import { LoadingContextType } from '@/types/dataTypes'
import React, { createContext, ReactNode, useContext, useState } from 'react'

const LoadingContext = createContext<LoadingContextType | null>(null)

const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

const useLoading = () => {
  const context = useContext(LoadingContext)

  if (context) return context

  throw new Error('Use useTheme inside ThemeContext Provider.')
}

export default LoadingProvider
export { LoadingContext, useLoading }
