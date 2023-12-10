import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

const Resume = () => {
    return (
        <div className='min-h-screen bg-[#212529]'>
            <Title Children={'RESUME'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'My Resume'} />
            </div>
        </div>
    )
}

export default Resume