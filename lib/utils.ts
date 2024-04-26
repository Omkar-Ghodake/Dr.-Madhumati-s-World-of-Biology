import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const checkEvenOdd = (num: number): boolean => {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}
