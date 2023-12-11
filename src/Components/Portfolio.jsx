import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className='bg-[#212529] min-h-screen relative'>
            <Title Children={'PORTFOLIO'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'My Portfolio'} />
            </div>
            <div className='text-white text-center mt-10'>
                <Tabs >
                    <TabList className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <Tab className="px-6 py-2 border-[#20c997] border-2 rounded-full cursor-pointer focus:bg-[#20c997]">All Projects</Tab>
                        <Tab className="px-6 py-2 border-[#20c997] border-2 rounded-full cursor-pointer focus:bg-[#20c997]">Current Projects</Tab>
                        <Tab className="px-6 py-2 border-[#20c997] border-2 rounded-full cursor-pointer focus:bg-[#20c997]">Team Projects</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 py-10 gap-4">
                                <div className="grid gap-4">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                                    </div>
                                    <div onClick={() => document.getElementById('my_modal_3').showModal()}>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Portfolio