import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

const Blogs = () => {
    return (
        <div id='blogs' className='bg-[#333a3f] lg:min-h-screen relative'>
            <Title Children={'BLOGS'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'Here is Blogs Page'} />
            </div>
            <div className='flex justify-center items-center md:text-2xl pt-10 md:pt-20 text-white'>
                <h1>No Blogs Yet...</h1>
            </div>
        </div>
    )
}

export default Blogs