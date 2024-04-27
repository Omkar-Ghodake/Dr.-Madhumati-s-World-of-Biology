import DataNotFound from '@/components/dataNotFound/DataNotFound'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const VideoGallery = () => {
  return (
    <MaxWidthWrapper className='text-center pt-20 text-3xl text-red-500 font-semibold min-h-[53vh]  md:min-h-[62vh] 2xl:min-h-[66vh]'>
      <div className='mx-auto flex justify-center items-center'>
        <DataNotFound className='' width={400} height={85} />
      </div>
      <p className='animate-pulse'>No Data Available!</p>
    </MaxWidthWrapper>
  )
}

export default VideoGallery
