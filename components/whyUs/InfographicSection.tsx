import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import InfoGraphics from '../InfoGraphics'
import { WHY_US_INFOGRAPICS } from '@/data/whyUsInfographics'
import { checkEvenOdd } from '@/lib/utils'

const InfographicSection = () => {
  return (
    <MaxWidthWrapper
      className=' min-h-[80vh] scroll-mt-24 2xl:scroll-mt-36'
      id='whyUsInfographicsSection'
    >
      <div className='text-center'>
        <h1 className='text-4xl font-semibold drop-shadow-xl'>
          Cultivate Success
        </h1>
        <h3 className='text-2xl font-medium text-secondary-foreground w-2/3 mx-auto'>
          <span>Discover the </span>
          <span className='text-3xl text-primary font-semibold'>Benefits </span>
          <span>of Choosing Our </span>
          <span className='text-3xl text-primary font-semibold inline-block'>
            Biology Coaching Institute
          </span>
        </h3>
      </div>

      {WHY_US_INFOGRAPICS.map((item, index) => (
        <InfoGraphics
          key={index}
          inverse={!checkEvenOdd(index)}
          title={item.title}
          desc={item.desc}
          imgSrc={item.imgSrc}
        />
      ))}
    </MaxWidthWrapper>
  )
}

export default InfographicSection
