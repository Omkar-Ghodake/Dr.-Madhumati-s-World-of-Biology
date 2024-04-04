import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'p-5 h-[89vh] md:h-[88vh] md:max-w-[75vw] mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
