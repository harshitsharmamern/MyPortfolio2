import React, { useEffect, useState } from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './portfolio.css'
import ImageComponents from './ImageComponents';

const Portfolio = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('../../public/projects.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <div id='skills' className='bg-[#212529] min-h-screen relative pb-10'>
            <Title Children={'PORTFOLIO'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'My Portfolio'} />
            </div>
            <div className='text-white text-center mt-10'>
                <Tabs>
                    <TabList className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <Tab className="px-6 py-2 border-[#20c997] border-2 rounded-full cursor-pointer focus:bg-[#20c997]">All Projects</Tab>
                        <Tab className="px-6 py-2 border-[#20c997] border-2 rounded-full cursor-pointer focus:bg-[#20c997]">Current Projects</Tab>
                        <Tab className="px-6 py-2 border-[#20c997] border-2 rounded-full cursor-pointer focus:bg-[#20c997]">Team Projects</Tab>
                    </TabList>
                    <TabPanel>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 md:px-10">
                            {
                                data?.map((skill, index) =>
                                    <div className="group block overflow-hidden">
                                        <div className="relative h-[280px] sm:h-[280px]">
                                            <img
                                                src={skill?.images[0]}
                                                alt=""
                                                className="absolute inset-0 h-[280px] w-full rounded-lg opacity-100 group-hover:opacity-0"
                                            />

                                            <img
                                                src={skill?.images[0]}
                                                alt=""
                                                className="absolute inset-0 h-[280px] w-full rounded-lg opacity-0 group-hover:opacity-100"
                                            />
                                            <div className='absolute bottom-2 space-x-3'>
                                                <a href={skill?.git} className='py-2 px-6 border-2 hover:bg-[#29ad85] bg-[#20c997] rounded-full'>Github Code</a>
                                                <a href={skill?.Live} className='py-2 px-6 border-2 hover:bg-[#29ad85] bg-[#20c997] rounded-full'>Visit Site</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 md:px-10">
                            No Projects yet
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 md:px-10">
                            No Projects yet
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Portfolio