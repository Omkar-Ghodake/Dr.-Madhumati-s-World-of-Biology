import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import DirectorInfo from '@/components/about-us/DirectorInfo'
import Image from 'next/image'
import React from 'react'
import medicalExpert from '@/public/medical_expert.png'

const AboutUs = () => {
  return (
    <MaxWidthWrapper className='flex flex-col justify-between items-center md:space-x-10 space-y-5 md:space-y-0 pt-10 md:pt-24 px-0 md:px-5'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-10 md:mb-20'>
        <div className='relative h-[40vh] md:h-[60vh] w-[30vh] md:w-[50vh] mb-10 md:mb-0'>
          <Image
            src={medicalExpert}
            alt=''
            fill
            placeholder='blur'
            className='object-contain drop-shadow-2xl'
          />
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
      </div>
      <div className='bg-secondary w-full flex flex-wrap rounded-lg shadow-xl'>
        <DirectorInfo index={0} title='Name' desc={['Dr. Madhumati Maskar']} />
        <DirectorInfo index={1} title='Profession' desc={['Teacher']} />
        <DirectorInfo
          index={2}
          title='Experience'
          desc={[
            '10 Years of Experience',
            'Biology Faculty',
            'Worked with different Institutions of Pune',
          ]}
        />
        <DirectorInfo
          index={3}
          title='Tags'
          desc={[
            'A Medical Doctor',
            'A Yoga Therapist',
            'Hypnotherapist',
            'National Volleyball Champion',
          ]}
        />
      </div>
    </MaxWidthWrapper>
  )
}

export default AboutUs
