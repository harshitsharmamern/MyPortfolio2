import React, { Children } from 'react'

const Title = ({Children}) => {
    return (
        <div className='absolute z-10 top-10 left-1/2 translate-x-[-50%]'>
            <h1 className='text-5xl lg:text-8xl font-bold text-center text-[#282d31]'>{ Children }</h1>
        </div>
    )
}

export default Title