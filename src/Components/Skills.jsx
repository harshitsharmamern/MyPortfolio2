import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
    return (
        <div className='bg-[#343a40] min-h-screen relative'>
            <Title Children={'MY SKILLS'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'The Technology I am Know'} />
            </div>

            <div className='pt-10 px-5 text-center'>
                <div className='text-lg text-white w-[80%] mx-auto mb-10'>I'm Versatile MERN Stack Developer | Proficient in HTML, CSS, Tailwind CSS, React, and JavaScript for Frontend | Comfortable with Backend Technologies: Node.js, Express.js, MongoDB | Experienced in Firebase for Deployment | Eager to Contribute and Learn in a Dynamic Development Environment</div>
                <div className='flex justify-center items-center gap-10 flex-wrap'>
                    <div>
                        <div className="radial-progress" style={{ "--value": "70", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <TiHtml5 className='text-5xl text-yellow-600' />
                        </div>
                        <h1 className='text-white text-xl'>70%<br /></h1>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": "65", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <FaCss3 className='text-5xl text-blue-500' />
                        </div>
                        <h1 className='text-white text-xl'>65%<br /></h1>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": "80", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <SiTailwindcss className='text-5xl text-[#3abdf8]' />
                        </div>
                        <h1 className='text-white text-xl'>80%<br /></h1>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": "70", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <IoLogoJavascript className='text-5xl text-yellow-500' />
                        </div>
                        <h1 className='text-white text-xl'>70%<br /></h1>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": "80", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <FaReact className='text-5xl text-[#3abdf8]' />
                        </div>
                        <h1 className='text-white text-xl'>80%<br /></h1>
                    </div>
                </div>


                <div className='flex justify-center items-center gap-10 flex-wrap mt-10'>
                    <div>
                        <div className="radial-progress" style={{ "--value": "65", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <SiExpress className='text-5xl text-[#ffff]' />
                        </div>
                        <h1 className='text-white text-xl'>65%<br /></h1>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": "50", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <IoLogoNodejs className='text-5xl text-[#58a846]' />
                        </div>
                        <h1 className='text-white text-xl'>55%<br /></h1>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": "60", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <DiMongodb className='text-5xl text-green-500' />
                        </div>
                        <h1 className='text-white text-xl'>60%<br /></h1>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": "60", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <IoLogoFirebase className='text-5xl text-[#ffcb2b]' />
                        </div>
                        <h1 className='text-white text-xl'>50%<br /></h1>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": "70", color: '#20c997', "--size": "7rem", "--thickness": "0.7rem" }} role="progressbar">
                            <SiJsonwebtokens className='text-5xl text-[#dc3bfe]' />
                        </div>
                        <h1 className='text-white text-xl'>70%<br /></h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills