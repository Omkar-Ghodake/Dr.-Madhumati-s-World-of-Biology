'use client'

import { useLoading } from '@/context/LoadingProvider'
import Image from 'next/image'
import React from 'react'

const DNALoader = () => {
  const { loading } = useLoading()

  return (
    <>
      {loading && (
        <div className='fixed flex justify-center items-center inset-0 h-screen w-screen cursor-progress overflow-hidden blur-bg'>
          <div className='relative w-[30vw] h-[70vh] rotate-90'>
            <Image src={'/DNALoader.gif'} alt='Loading...' fill />
          </div>
        </div>
      )}
    </>
  )
}

export default DNALoader
