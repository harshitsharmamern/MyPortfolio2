import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

const AboutMe = () => {
    return (
        <div id='about-me' className='bg-[#212529] min-h-screen relative'>
            <Title Children={'ABOUT ME'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'Know Me More'} />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10 px-8 pt-20 text-white">
                <div className="lg:col-span-2 space-y-5">
                    <h1 className='text-xl md:text-3xl font-bold'>I'm <span className='font-medium text-[#20c997]'>Shimul Zahan,</span> a MERN Stack Developer.</h1>
                    <p className='text-base md:text-lg font-medium text-[#898b8d]'>Versatile MERN Stack Developer | Proficient in HTML, CSS, Tailwind CSS, React, and JavaScript for Frontend | Comfortable with Backend Technologies: Node.js, Express.js, MongoDB | Experienced in Firebase for Deployment | Eager to Contribute and Learn in a Dynamic Development Environment <br /> <br />
                        Delivering work within time and budget which meets client’s requirements is my moto.
                    I belive in hard work and team work.</p>
                </div>
                <div className=" md:text-lg space-y-4">
                    <h1 className='text-[#20c997]'><span className='font-bold text-white'>Name:</span> Md. Eleush Zahan Shimul</h1>
                    <hr className='h-[1px] border-[#3e444b]' />
                    <h1 className='text-[#20c997]'><span className='font-bold text-white'>Email:</span> shimulzahan636@gmail.com</h1>
                    <hr className='h-[1px] border-[#3e444b]' />
                    <h1><span className='font-bold'>Age:</span> 23</h1>
                    <hr className='h-[1px] border-[#3e444b]' />
                    <h1><span className='font-bold'>From:</span> Rajshahi, Bangladesh</h1>
                    <button className='py-3 px-6 bg-[#20c997] hover:bg-[#1baa80] transition-all transition-0.5s ease-in text-white rounded-full'>Download CV</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-8 p-10 py-20">
                <div className="h-32 flex justify-center items-center border-r-[#3e444b] border-r-2">
                    <div className="flex flex-col justify-center items-center p-2 text-lg text-[#dee3e4]">
                        <span className="text-center font-bold text-5xl md:text-6xl text-[#909294] pb-2">
                            <span>00+</span>
                        </span>
                        Years Experience
                    </div>
                </div>
                <div className="h-32 flex justify-center items-center lg:border-r-[#3e444b] lg:border-r-2">
                    <div className="flex flex-col justify-center items-center p-2 text-lg text-[#dee3e4]">
                        <span className="text-center font-bold text-5xl md:text-6xl text-[#909294] pb-2">
                            <span>55+</span>
                        </span>
                        Total Projects
                    </div>
                </div>
                <div className="h-32 flex justify-center items-center border-r-[#3e444b] border-r-2">
                    <div className="flex flex-col justify-center items-center p-2 text-lg text-[#dee3e4]">
                        <span className="text-center font-bold text-5xl md:text-6xl text-[#909294] pb-2">
                            <span>01+</span>
                        </span>
                        Team Projects
                    </div>
                </div>
                <div className="h-32 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center p-2 text-lg text-[#dee3e4]">
                        <span className="text-center font-bold text-5xl md:text-6xl text-[#909294] pb-2">
                            <span>03+</span>
                        </span>
                        Current Projects
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe