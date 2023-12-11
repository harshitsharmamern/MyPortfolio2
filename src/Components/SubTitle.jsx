import React, { Children } from 'react'

<h1 className='text-4xl font-medium text-white'>{Children}</h1>
const SubTitle = ({ Children }) => {
  return (
      <div>
          <h1 className='text-xl md:text-4xl font-medium text-white'>{Children}</h1>
          <hr className='border-[#20c997] border-2 w-[50%] mt-1 mx-auto' />
      </div>
  )
}

export default SubTitle