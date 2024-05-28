import React from 'react'
import { JrCollegeBatchProps, NeetCETBatchInfoProps } from './propTypes'

export type NavLinks = {
  title: string
  url: string
}

export type ThemeType = 'light' | 'dark'

export type ThemeContextType = {
  theme: ThemeType
  toggleTheme: () => void
} | null

export type LoadingContextType = {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export type SelectedWeProvideMenuType = 0 | 1 | 2

export type JrCollegeBatchInfo = JrCollegeBatchProps

export type NeetCETBatchInfoInfo = NeetCETBatchInfoProps

export type NeetCETBatchInfoProps_batches = {
  title: string
  eduBoards: string[]
  eduSubjects: string[]
}
export type ServerActionReturnType = {
  success: boolean
  message: string
}
