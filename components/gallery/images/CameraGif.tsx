'use client'

import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'

const CameraGif = () => {
  const { theme } = useTheme()

  return (
    <div className=''>
      <Image
        src={`/camera.png`}
        alt=''
        width={60}
        height={40}
        className={`${theme === 'dark' && 'invert'}`}
      />
    </div>
  )
}

export default CameraGif
