import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

const AboutMe = () => {
    return (
        <div className='bg-[#212529] min-h-screen relative'>
            <Title Children={'ABOUT ME'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'Know Me More'} />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10 px-8 pt-20 text-white">
                <div className="lg:col-span-2 space-y-5">
                    <h1 className='text-3xl font-bold'>I'm <span className='font-medium text-[#20c997]'>Shimul Zahan,</span> a MERN Stack Developer.</h1>
                    <p className='text-lg font-medium text-[#898b8d]'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /> <br />
                        Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                </div>
                <div className="text-lg space-y-4">
                    <h1><span className='font-bold'>Name:</span> Md. Eleush Zahan Shimul</h1>
                    <hr className='h-[1px] border-[#3e444b]' />
                    <h1><span className='font-bold'>Name:</span> shimulzahan636@gmail.com</h1>
                    <hr className='h-[1px] border-[#3e444b]' />
                    <h1><span className='font-bold'>Age:</span> 23</h1>
                    <hr className='h-[1px] border-[#3e444b]' />
                    <h1><span className='font-bold'>From:</span> Rajshahi, Bangladesh</h1>
                    <button className='py-3 px-6 bg-[#20c997] hover:bg-[#1baa80] transition-all transition-0.5s ease-in text-white rounded-full'>Download CV</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-10 py-20 ">
                <div className="h-32 rounded-lg bg-gray-200">

                </div>
                <div className="h-32 rounded-lg bg-gray-200">

                </div>
                <div className="h-32 rounded-lg bg-gray-200">

                </div>
                <div className="h-32 rounded-lg bg-gray-200">
                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe