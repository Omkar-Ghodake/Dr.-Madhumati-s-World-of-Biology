import InfographicSection from '@/components/whyUs/InfographicSection'
import LandingSection from '@/components/whyUs/LandingSection'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='flex flex-col mb-10'>
      <div className=''>
        <LandingSection />
      </div>

      <div className=''>
        <InfographicSection />
      </div>
    </div>
  )
}

export default WhyUs
