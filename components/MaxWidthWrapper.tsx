import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({
  children,
  className,
  heightPage,
  heightSmPage,
}: {
  children: ReactNode
  className?: string
  heightPage?: boolean
  heightSmPage?: boolean
}) => {
  return (
    <div
      className={cn(
        `MaxWidthWrapper p-5 md:max-w-[75vw] w-[90vw] mx-auto md:h-[88vh] ${
          heightPage &&
          `${heightSmPage && 'h-[88vh]'} md:h-[88vh] overflow-y-hidden`
        }`,
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
