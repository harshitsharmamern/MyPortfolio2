import React, { useEffect, useState } from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './portfolio.css'
import ImageComponents from './ImageComponents';

const Portfolio = () => {

    const [data, setData] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState(null);


    useEffect(() => {
        fetch('../../public/projects.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    const openModal = (skill) => {
        setSelectedSkill(skill);
        document.getElementById('my_modal_3').showModal();
    };

    const closeModal = () => {
        setSelectedSkill(null);
        document.getElementById('my_modal_3').close();
    };

    return (
        <div id='skills' className='bg-[#212529] min-h-screen relative pb-10'>
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
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 md:px-10">
                            {
                                data?.map((skill, index) =>
                                    <div onClick={() => openModal(skill)}>
                                        <ImageComponents
                                            img1={skill?.images[0]}
                                            img2={skill?.images[1]}
                                        />
                                        <dialog id='my_modal_3' className='modal'>
                                            <div className='modal-box'>
                                                <form method='dialog'>
                                                    <button className='btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2' onClick={closeModal}>
                                                        ✕
                                                    </button>
                                                </form>
                                                {selectedSkill && (
                                                    <>
                                                        <div className="flow-root">
                                                            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                                                    <dt className="font-medium text-gray-900">Project Name</dt>
                                                                    <dd className="text-gray-700 sm:col-span-2">{selectedSkill?.projectName}</dd>
                                                                </div>

                                                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                                                    <dt className="font-medium text-gray-900">Project Details</dt>
                                                                    <dd className="text-gray-700 sm:col-span-2">
                                                                        {selectedSkill?.projectDetails}
                                                                    </dd>
                                                                </div>

                                                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                                                    <dt className="font-medium text-gray-900">Used Technology</dt>
                                                                    <dd className="text-gray-700 sm:col-span-2">

                                                                        {
                                                                            selectedSkill?.usedTechnology.map(tech => 
                                                                                <span>{tech}, </span>
                                                                            )
                                                                        }
                                                                    </dd>
                                                                </div>

                                                            </dl>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </dialog>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 md:px-10">
                            {
                                data?.map((skill, index) =>
                                    <div>
                                        <ImageComponents
                                            img1={skill?.images[0]}
                                            img2={skill?.images[1]}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Portfolio