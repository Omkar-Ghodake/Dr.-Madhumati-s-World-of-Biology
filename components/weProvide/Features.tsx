import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import FeatureTimeline from './FeatureTimeline'
import KeyHighlight from './KeyHighlight'
import { FEATURES_AND_BENEFITS } from '@/data/featuresData'

const Features = () => {
  return (
    <MaxWidthWrapper className='mt-10 flex flex-col space-y-5'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold drop-shadow-lg'>
          Essential Advantages
        </h1>

        <h3 className='text-3xl font-semibold'>
          <p className=''>
            <span className='text-primary drop-shadow-lg text-4xl'>
              Key Highlights
            </span>{' '}
            <span> of Our</span>
          </p>

          <p>
            <span className='text-primary drop-shadow-lg text-4xl'>
              {' '}
              Biology Coaching Program
            </span>
          </p>
        </h3>
      </div>

      <div className='flex flex-wrap'>
        {FEATURES_AND_BENEFITS.map((item, index) => (
          <KeyHighlight key={index} title={item.title} imgSrc={item.imgSrc} />
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Features
