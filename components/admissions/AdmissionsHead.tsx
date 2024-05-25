import React from 'react'
import Image from 'next/image'
import medicalStudent from '@/public/ads/home_ad_banner.jpg'

const AdmissionsHead = () => {
  return (
    <div className='flex flex-col justify-between items-center pt-10 md:pt-[4.5rem] md:space-y-5'>
      <h1 className='text-center text-2xl md:text-5xl text-primary font-semibold drop-shadow-xl mb-2'>
        Confirm Your Seats Now
      </h1>

      <div className='flex flex-col md:flex-row md:justify-between md:space-y-0 md:space-x-10 w-full h-full'>
        <div className='relative h-[30vh] md:h-[45vh] w-full md:w-[46%]'>
          <Image
            src={medicalStudent}
            alt=''
            fill
            placeholder='blur'
            // className='object-contain'
          />
        </div>

        <div className='relative flex justify-center items-center h-[30vh] md:h-[45vh] w-full md:w-[46%]'>
          <video controls autoPlay={true} className='w-full h-full'>
            <source src={'/shortVideos/mainVideo.mp4'} />
            Your browser does not support the video tag...
          </video>
        </div>
      </div>
    </div>
  )
}

export default AdmissionsHead
