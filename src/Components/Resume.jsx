import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

const Resume = () => {
    return (
        <div className='min-h-screen bg-[#212529] relative'>
            <Title Children={'RESUME'} />
            <div className='flex justify-center items-center py-20 z-20 relative'>
                <SubTitle Children={'My Resume'} />
            </div>
            <div className='space-y-6 px-5'>
                <div className="text-2xl font-bold text-white">My Education</div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 md:px-10">
                    <div className="space-y-2 bg-[#111418] p-4 rounded-lg">
                        <p className='bg-[#20c997] md:w-[27%] text-base py-1 px-3 rounded-md'>2020-Ongoing</p>
                        <p className='text-white md:text-2xl py-1 rounded-md'>Computer Science</p>
                        <p className='text-[#20c997] md:text-xl py-1 rounded-md'>BSMRSTU</p>
                        <p className='text-white textlg-xl py-1 rounded-md'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                    <div className="space-y-2 bg-[#111418] p-4 rounded-lg">
                        <p className='bg-[#20c997] md:w-[27%] text-base py-1 px-3 rounded-md'>2020-Ongoing</p>
                        <p className='text-white md:text-2xl py-1 rounded-md'>Computer Science</p>
                        <p className='text-[#20c997] md:text-xl py-1 rounded-md'>BSMRSTU</p>
                        <p className='text-white textlg-xl py-1 rounded-md'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className="text-2xl font-bold text-white">My Experiences</div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 md:px-10">
                    <div className="space-y-2 bg-[#111418] p-4 rounded-lg">
                        <p className='bg-[#20c997] md:w-[27%] text-base py-1 px-3 rounded-md'>2022-2023</p>
                        <p className='text-white md:text-2xl py-1 rounded-md'>Frontend Developer</p>
                        <p className='text-[#20c997] md:text-xl py-1 rounded-md'>Fiverr, Upwork</p>
                        <p className='text-white textlg-xl py-1 rounded-md'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                    <div className="space-y-2 bg-[#111418] p-4 rounded-lg">
                        <p className='bg-[#20c997] md:w-[27%] text-base py-1 px-3 rounded-md'>2022-2023</p>
                        <p className='text-white md:text-2xl py-1 rounded-md'>Frontend Developer</p>
                        <p className='text-[#20c997] md:text-xl py-1 rounded-md'>Fiverr, Upwork</p>
                        <p className='text-white textlg-xl py-1 rounded-md'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume