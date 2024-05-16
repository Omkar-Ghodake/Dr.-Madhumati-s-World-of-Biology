import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'
import medicalExpert from '@/public/medical_expert.png'

const AboutUs = () => {
  return (
    <MaxWidthWrapper className='flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-5 md:space-y-0 pt-10 md:pt-24 px-0 md:px-5'>
      <div className='relative h-[25vh] md:h-[50vh] w-[25vh] md:w-[50vh]'>
        <Image src={medicalExpert} alt='' fill placeholder='blur' />
      </div>

      <div className='flex-1 h-full md:p-5'>
        <h3 className='text-3xl md:text-4xl'>Dr. Madhumati Maskar</h3>
        <h1 className='text-3xl md:text-4xl font-semibold drop-shadow-lg'>
          DIRECTOR
        </h1>
        <h2 className='text-4xl md:text-5xl font-semibold drop-shadow-lg text-primary'>
          Dr Madhumati&apos;s World of Biology
        </h2>
      </div>
    </MaxWidthWrapper>
  )
}

export default AboutUs
