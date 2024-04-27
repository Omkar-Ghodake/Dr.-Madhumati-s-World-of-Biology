import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const DataNotFound = ({
  className,
  width,
  height,
}: {
  className?: string
  width: number
  height: number
}) => {
  return (
    <div className={cn('relative', className)}>
      <Image
        src={'/data_not_available.png'}
        alt=''
        width={width}
        height={height}
      />
    </div>
  )
}

export default DataNotFound
