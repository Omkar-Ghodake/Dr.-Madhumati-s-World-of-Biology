'use client'

import CameraGif from '@/components/gallery/images/CameraGif'
import ImageGrid from '@/components/gallery/images/ImageGrid'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { IMAGE_GALLERY } from '@/data/imagesData'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PhotoGallery = () => {
  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  })

  return (
    <MaxWidthWrapper className=''>
      <div className='mt-10 flex flex-col justify-center space-y-5'>
        <h1 className='text-center text-4xl font-semibold flex justify-center items-center space-x-5'>
          <span>IMAGES</span>
          <CameraGif />
        </h1>

        {/* <div className='img-container grid grid-cols-4 gap-5 pb-5'>
          {IMAGE_GALLERY.map((image, index) => (
            <ImageGrid key={index} title={image.title} src={image.src} />
          ))}
        </div> */}

        <div className='img-grid'>
          {/* <!-- Slider main container --> */}
          <div className='swiper'>
            {/* <!-- Additional required wrapper --> */}
            <div className='swiper-wrapper'>
              {/* <!-- Slides --> */}
              <div className='swiper-slide'>Slide 1</div>
              <div className='swiper-slide'>Slide 2</div>
              <div className='swiper-slide'>Slide 3</div>
              ...
            </div>
            {/* <!-- If we need pagination --> */}
            <div className='swiper-pagination'></div>

            {/* <!-- If we need navigation buttons --> */}
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>

            {/* <!-- If we need scrollbar --> */}
            <div className='swiper-scrollbar'></div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default PhotoGallery
