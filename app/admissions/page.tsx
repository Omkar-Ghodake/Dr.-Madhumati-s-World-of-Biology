import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import AdmissionsHead from '@/components/admissions/AdmissionsHead'
import ShortVideos from '@/components/admissions/ShortVideos'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <MaxWidthWrapper className='flex flex-col justify-between space-y-20 p-0'>
      <div className='h-[90vh] md:h-[83vh] flex flex-col justify-between'>
        <AdmissionsHead />

        <div className='flex justify-center items-center'>
          <Button size={'lg'} className='text-xl font-semibold' asChild>
            <Link className='' href={'/contact-us'}>
              Contact Us
            </Link>
          </Button>
        </div>
      </div>

      <div className='flex flex-col space-y-10'>
        <h1 className='text-center text-4xl font-semibold'>
          Watch Our Video Shorts
        </h1>
        <ShortVideos />
      </div>
    </MaxWidthWrapper>
  )
}

export default page
