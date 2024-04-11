import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({
  children,
  className,
  heightPage,
}: {
  children: ReactNode
  className?: string
  heightPage?: boolean
}) => {
  return (
    <div
      className={cn(
        `p-5 md:max-w-[75vw] w-[90vw] mx-auto md:h-[88vh] ${
          heightPage && 'md:h-[88vh] overflow-y-hidden'
        }`,
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
