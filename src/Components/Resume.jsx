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
                        <p className='bg-[#] md:w-[27%] text-base py-1 px-3 rounded-md'>2020-2024 Btech</p>

                        <p className='text-white md:text-2xl py-1 rounded-md'>Computer Science</p>
                        <p className='text-[#20c997] md:text-xl py-1 rounded-md'>LNCT bhopal</p>
                        <p className='text-white textlg-xl py-1 rounded-md'>I am a btech student majoring in computer science. and 
                        i am skilled in C++,java,python language and Proficient in cpp.
                        also i have a keen Intrest in web development, i know MERN stack development also learning
                        Next.js , typescript , Machine learning for future growth.
                         </p>
                    </div>
                    {/* <div className="space-y-1 bg-[#111418] p-4 rounded-lg">
                        <p className='bg-[#] md:w-[27%] text-base py-1 px-3 rounded-md'>Intrest</p>
                        <p className='text-white md:text-2xl py-1 rounded-md'>coding</p>
                        <p className='text-[#20c997] md:text-xl py-1 rounded-md'>Mohabbatpur Khanpur Degree Collage</p>
                        <p className='text-white textlg-xl py-1 rounded-md'>I am completed my Higher Secondary education from MKDC in 2019.</p>
                    </div> */}
                </div>
                <div className='relative'>
                    <Title Children={'EXPERIENCE'} />
                    <div className='flex justify-center items-center py-20 z-20 relative'>
                        <SubTitle Children={'My Experience'} />
                    </div>
                    <div className="text-2xl font-bold md:px-10 text-white">My Experiences</div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 md:px-10">
                        <div className="space-y-1 bg-[#111418] p-4 rounded-lg">
                            <p className='bg-[#] md:w-[27%] text-base py-1 px-3 rounded-md'>2022-2023</p>
                            <p className='text-white md:text-2xl py-1 rounded-md'> Full Stack Development</p>
                            <p className='text-[#20c997] md:text-xl py-1 rounded-md'>Young indians</p>
                            <p className='text-white textlg-xl py-1 rounded-md'>Developed adaptive and scalable Web Applications with MERN Technologies by implementing OOPS based
concepts. Designed 50+ effcient Rest-APIs and controller functions that improved the response time by 20 percent
<br />Developed Responsive and Dynamic UI Screens using React lib. and MUI . Utilized Swagger to Document
Rest-API </p>
                        </div>
                        <div className="space-y-1 bg-[#111418] p-4 rounded-lg">
                            <p className='bg-[] md:w-[27%] text-base py-1 px-3 rounded-md'>2024</p>
                            <p className='text-white md:text-2xl py-1 rounded-md'>Mern developer</p>
                            <p className='text-[#20c997] md:text-xl py-1 rounded-md'>Fiver </p>
                            <p className='text-white textlg-xl py-1 rounded-md'>
                                Worked as a freelancer. Making a Quiz application. where user Authenticate and access to give quiz.
                                made admin panel to add quiz.
                             </p>
                            {/* <p className='text-white textlg-xl py-1 rounded-md'>I am working as a ui/ux designer at Embisom for 2 month project based duration.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume