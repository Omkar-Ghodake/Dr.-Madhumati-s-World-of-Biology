'use client'

import { TESTIMONIALS_DATA } from '@/data/testimonialsData'
import { AvatarGenerator } from 'random-avatar-generator'
import { useState } from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialsGrid = () => {
  const [testimonialModalOpen, setTestimonialModalOpen] =
    useState<boolean>(false)

  const generator = new AvatarGenerator()

  return (
    <div className='md:p-5 flex flex-wrap'>
      {TESTIMONIALS_DATA.map((item, index) => (
        <div className={`p-5 md:w-1/3 mb-10 md:mb-5`} key={index}>
          <TestimonialCard
            name={item.name}
            review={item.review}
            testimonialModalOpen={testimonialModalOpen}
            setTestimonialModalOpen={setTestimonialModalOpen}
          />
        </div>
      ))}
    </div>
  )
}

export default TestimonialsGrid
