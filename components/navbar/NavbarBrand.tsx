import { cn } from '@/lib/utils'
import Image from 'next/image'

const NavbarBrand = ({
  width,
  height,
  className,
}: {
  width?: number
  height?: number
  className?: string
}) => {
  return (
    <>
      <Image
        src={'/logo.jpg'}
        alt=''
        width={width}
        height={height}
        fill={!width || !height}
        className={cn('bg-white rounded-full', className)}
      />
    </>
  )
}

export default NavbarBrand
