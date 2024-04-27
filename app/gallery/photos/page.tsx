'use client'

import ActiveImage from '@/components/gallery/images/ActiveImage'
import CameraGif from '@/components/gallery/images/CameraGif'
import ImageGrid from '@/components/gallery/images/ImageGrid'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { IMAGE_GALLERY } from '@/data/imagesData'
import { StaticImageData } from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: StaticImageData | null
    imgTitle: string | null
  }>({
    src: null,
    imgTitle: null,
  })

  const getPreviousImage = () => {
    if (selectedImage.imgTitle) {
      const currentImg = IMAGE_GALLERY.find(
        (obj) => obj.title === selectedImage.imgTitle
      )

      if (currentImg) {
        const currentImgIndex = IMAGE_GALLERY.indexOf(currentImg)

        if (currentImgIndex !== undefined) {
          console.log(
            '🚀 ~ getPreviousImage ~ currentImgIndex:',
            currentImgIndex
          )
          const nextImageIndex = currentImgIndex - 1

          if (currentImgIndex === 0) {
            setSelectedImage({
              src: IMAGE_GALLERY[IMAGE_GALLERY.length - 1].src,
              imgTitle: IMAGE_GALLERY[IMAGE_GALLERY.length - 1].title,
            })
          } else {
            setSelectedImage({
              src: IMAGE_GALLERY[nextImageIndex].src,
              imgTitle: IMAGE_GALLERY[nextImageIndex].title,
            })
          }
        }
      }
    }
  }

  const getNextImage = () => {
    if (selectedImage.imgTitle) {
      const currentImg = IMAGE_GALLERY.find(
        (obj) => obj.title === selectedImage.imgTitle
      )

      if (currentImg) {
        const currentImgIndex = IMAGE_GALLERY.indexOf(currentImg)

        if (currentImgIndex !== undefined) {
          const nextImageIndex = currentImgIndex + 1

          if (currentImgIndex === IMAGE_GALLERY.length - 1) {
            setSelectedImage({
              src: IMAGE_GALLERY[0].src,
              imgTitle: IMAGE_GALLERY[0].title,
            })
          } else {
            setSelectedImage({
              src: IMAGE_GALLERY[nextImageIndex].src,
              imgTitle: IMAGE_GALLERY[nextImageIndex].title,
            })
          }
        }
      }
    }
  }

  return (
    <>
      <MaxWidthWrapper
        className=''
        heightPage={!!selectedImage.src}
        heightSmPage
      >
        <div className='mt-10 flex flex-col justify-center space-y-5'>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center text-4xl font-semibold flex justify-center items-center space-x-5'
          >
            <span>IMAGES</span>
            <CameraGif />
          </motion.h1>

          <div className='img-container grid grid-cols-gallery gap-2'>
            {IMAGE_GALLERY.map((image, index) => (
              <ImageGrid
                key={index}
                title={image.title}
                index={index}
                src={image.src}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {selectedImage.src && (
        <ActiveImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          getNextImage={getNextImage}
          getPreviousImage={getPreviousImage}
        />
      )}
    </>
  )
}

export default PhotoGallery
