import CameraGif from '@/components/gallery/images/CameraGif'
import ImageGrid from '@/components/gallery/images/ImageGrid'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { IMAGE_GALLERY } from '@/data/imagesData'

const PhotoGallery = () => {
  return (
    <MaxWidthWrapper className=''>
      <div className='mt-10 flex flex-col justify-center space-y-5'>
        <h1 className='text-center text-4xl font-semibold flex justify-center items-center space-x-5'>
          <span>IMAGES</span>
          <CameraGif />
        </h1>

        <div className='img-container grid grid-cols-4 gap-5 pb-5'>
          {IMAGE_GALLERY.map((image, index) => (
            <ImageGrid key={index} title={image.title} src={image.src} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default PhotoGallery
