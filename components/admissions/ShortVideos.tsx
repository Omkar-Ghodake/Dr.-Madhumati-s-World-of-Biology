import React from 'react'

const ShortVideos = () => {
  return (
    <div className='w-full overflow-hidden custom-scrollbar p-2'>
      <div className='flex w-full justify-between'>
        <div className='relative w-fit h-[20vh] md:h-[50vh] rounded-xl mx-5 select-none'>
          <video
            controls
            autoPlay={true}
            className='rounded-xl w-full h-[20vh] md:h-[50vh]'
          >
            <source src={'/shortVideos/shortVideo1.mp4'} />
            Your browser does not support the video tag...
          </video>
        </div>
        <div className='relative w-fit h-[20vh] md:h-[50vh] rounded-xl mx-5 select-none'>
          <video
            controls
            autoPlay={true}
            className='rounded-xl w-full h-[20vh] md:h-[50vh]'
          >
            <source src={'/shortVideos/shortVideo2.mp4'} />
            Your browser does not support the video tag...
          </video>
        </div>
        <div className='relative w-fit h-[20vh] md:h-[50vh] rounded-xl mx-5 select-none'>
          <video
            controls
            autoPlay={true}
            className='rounded-xl w-full h-[20vh] md:h-[50vh]'
          >
            <source src={'/shortVideos/shortVideo3.mp4'} />
            Your browser does not support the video tag...
          </video>
        </div>
        <div className='relative w-fit h-[20vh] md:h-[50vh] rounded-xl mx-5 select-none'>
          <video
            controls
            autoPlay={true}
            className='rounded-xl w-full h-[20vh] md:h-[50vh]'
          >
            <source src={'/shortVideos/shortVideo4.mp4'} />
            Your browser does not support the video tag...
          </video>
        </div>
      </div>
    </div>
  )
}

export default ShortVideos
