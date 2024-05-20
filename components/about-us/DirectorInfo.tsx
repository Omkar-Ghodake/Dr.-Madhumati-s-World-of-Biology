import { Separator } from '@radix-ui/react-separator'
import React from 'react'

const DirectorInfo = ({
  title,
  desc,
  index,
}: {
  title: string
  desc: string[]
  index: number
}) => {
  return (
    <div
      className={`w-full md:w-1/2 flex border-[0.1px] p-5 text-md md:pr-24 ${
        index % 2 === 0 && 'bg-secondaryDark border-secondary'
      }`}
    >
      <p className={`font-bold w-2/5 ${index % 2 === 0 ? '' : ''} pr-2`}>
        {title}
      </p>
      <div className='w-3/5'>
        {desc.map((element, index) => (
          <p key={index} className='mb-2'>
            {element}
          </p>
        ))}
      </div>
      {/* <Separator asChild /> */}
    </div>
  )
}

export default DirectorInfo
