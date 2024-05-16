import React from 'react'

const DirectorInfo = ({title,desc}:{title:string,desc:string}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  )
}

export default DirectorInfo
