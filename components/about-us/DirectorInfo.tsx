import React from 'react'

const DirectorInfo = ({ title, desc }: { title: string; desc: string[] }) => {
  return (
    <div className='w-full md:w-1/2 flex my-5 text-lg'>
      <p className='font-semibold w-2/5'>{title}</p>
      <div className='w-3/5'>
        {desc.map((element, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  )
}

export default DirectorInfo
