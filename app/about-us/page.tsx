import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <MaxWidthWrapper className='flex justify-between space-x-10 pt-24'>
      <div className=''>
        <Image src={'/medical_expert.png'} alt='' width={500} height={500} />
      </div>

      <div className='flex-1 h-full p-5'>
        <h3 className='text-4xl'>Dr. Madhumati Maskar</h3>
        <h1 className='text-4xl font-semibold drop-shadow-lg'>DIRECTOR</h1>
        <h2 className='text-5xl font-semibold drop-shadow-lg text-primary'>
          Dr Madhumati&apos;s World of Biology
        </h2>
      </div>
    </MaxWidthWrapper>
  )
}

export default AboutUs
