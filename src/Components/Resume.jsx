import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

const Resume = () => {
    return (
        <div id='resume' className='min-h-screen bg-[#212529] relative'>
            <Title Children={'EDUCATION'} />
            <div className='flex justify-center items-center py-20 z-20 relative'>
                <SubTitle Children={'My Education'} />
            </div>
            <div className='space-y-6 px-5'>
                <div className="text-2xl font-bold md:px-10 text-white">My Education</div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 md:px-10">
                    <div className="space-y-1 bg-[#111418] p-4 rounded-lg">
                        <p className='bg-[#20c997] md:w-[27%] text-base py-1 px-3 rounded-md'>2020-Ongoing</p>
                        <p className='text-white md:text-2xl py-1 rounded-md'>Computer Science</p>
                        <p className='text-[#20c997] md:text-xl py-1 rounded-md'>BSMRSTU</p>
                        <p className='text-white textlg-xl py-1 rounded-md'>I am student of Computer Science and Engineering 3<sup>rd</sup> year 2<sup>nd</sup> semester. I don't finished my B'sc Engineering course yet.</p>
                    </div>
                    <div className="space-y-1 bg-[#111418] p-4 rounded-lg">
                        <p className='bg-[#20c997] md:w-[27%] text-base py-1 px-3 rounded-md'>2017-2019</p>
                        <p className='text-white md:text-2xl py-1 rounded-md'>Science Group</p>
                        <p className='text-[#20c997] md:text-xl py-1 rounded-md'>Mohabbatpur Khanpur Degree Collage</p>
                        <p className='text-white textlg-xl py-1 rounded-md'>I am completed my Higher Secondary education from MKDC in 2019.</p>
                    </div>
                </div>
                <div className='relative'>
                    <Title Children={'EXPERIENCE'} />
                    <div className='flex justify-center items-center py-20 z-20 relative'>
                        <SubTitle Children={'My Experience'} />
                    </div>
                    <div className="text-2xl font-bold md:px-10 text-white">My Experiences</div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 md:px-10">
                        <div className="space-y-1 bg-[#111418] p-4 rounded-lg">
                            <p className='bg-[#20c997] md:w-[27%] text-base py-1 px-3 rounded-md'>2022-2023</p>
                            <p className='text-white md:text-2xl py-1 rounded-md'>Frontend Developer</p>
                            <p className='text-[#20c997] md:text-xl py-1 rounded-md'>Fiverr</p>
                            <p className='text-white textlg-xl py-1 rounded-md'>I am work as a freelancar in a short time. For completing my Web Development Courses i can't continue my freelancing career cause Developing is my passion.</p>
                        </div>
                        <div className="space-y-1 bg-[#111418] p-4 rounded-lg">
                            <p className='bg-[#20c997] md:w-[27%] text-base py-1 px-3 rounded-md'>2023-2023</p>
                            <p className='text-white md:text-2xl py-1 rounded-md'>UI/UX Designer</p>
                            <p className='text-[#20c997] md:text-xl py-1 rounded-md'>Embisom IT</p>
                            <p className='text-white textlg-xl py-1 rounded-md'>I am working as a ui/ux designer at Embisom for 2 month project based duration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume