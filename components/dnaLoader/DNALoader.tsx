'use client'

import { useLoading } from '@/context/LoadingProvider'
import Image from 'next/image'
import React from 'react'

const DNALoader = () => {
  const { loading } = useLoading()

  return (
    <>
      {loading && (
        <div className='fixed flex flex-col justify-center items-center inset-0 h-screen w-screen cursor-progress overflow-hidden blur-bg'>
          <div className='relative w-[50vw] h-[30vh] md:w-[30vw] md:h-[70vh] rotate-90'>
            <Image src={'/DNALoader.gif'} alt='Loading...' fill />
          </div>
          <span className='text-2xl text-center font-semibold'>
            Please wait. Your response is being sent.
          </span>
        </div>
      )}
    </>
  )
}

export default DNALoader
