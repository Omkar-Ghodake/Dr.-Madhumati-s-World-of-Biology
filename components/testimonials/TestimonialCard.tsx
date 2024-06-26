import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { limitText } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import studentReading from '@/public/icons/student-reading.png'

const TestimonialCard = ({
  name,
  review,
  testimonialModalOpen,
  setTestimonialModalOpen,
}: {
  name: string
  review: string
  testimonialModalOpen: boolean
  setTestimonialModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Dialog>
      <div className='relative border p-5 w-full h-[60vh] md:h-full 2xl:h-[54vh] flex flex-col items-center justify-start shadow-lg rounded-2xl bg-secondary text-ellipsis'>
        <div className='absolute -top-12 w-24 h-24'>
          <div className='relative card-img w-full h-full'>
            <Image
              src={studentReading}
              alt=''
              fill
              className='select-none rounded-full'
              placeholder='blur'
            />
          </div>
        </div>

        <div className='card-title mt-12 font-semibold text-2xl'>{name}</div>

        <div className='quotes'>
          <Image
            src={'/icons/double-quotes.png'}
            alt='“'
            width={40}
            height={40}
          />
        </div>

        <div className='card-description'>
          {limitText(review, 300) || review}
          {limitText(review, 300) && (
            <DialogTrigger asChild>
              <span
                className='font-semibold cursor-pointer hover:text-secondary-foreground/80'
                onClick={() => setTestimonialModalOpen(true)}
              >
                See More
              </span>
            </DialogTrigger>
          )}
        </div>
      </div>

      <DialogContent
        className='max-w-[90vw] rounded-xl overflow-auto'
        style={{ width: '' }}
      >
        <div className='md:p-5 w-full h-[80vh] flex flex-col items-center justify-start'>
          <div className='relative card-img w-40 h-40'>
            <Image
              src={studentReading}
              alt=''
              fill
              className='select-none'
              placeholder='blur'
            />
          </div>

          <div className='card-title font-semibold text-2xl'>{name}</div>

          <div className='quotes'>
            <Image
              src={'/icons/double-quotes.png'}
              alt='“'
              width={40}
              height={40}
              className='select-none'
            />
          </div>

          <div className='card-description overflow-auto text-justify p-2 custom-scrollbar'>
            {review}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TestimonialCard
