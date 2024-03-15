import { Typewriter } from 'react-simple-typewriter'
import bgImage from '../assets/778 (2).jpg'
// import pdf from '../assets/MdEleushZahanShimulResume_5.pdf'
import harshit_pdf from "../assets/harshit_resume (1).pdf"
import TsParticle from './TsParticle'


const Hero = () => {

    return (
        <div id='#' className=" w-full h-screen bg-fixed"
           >

            <TsParticle></TsParticle>

            <div className=" flex justify-center items-center h-screen text-center text-neutral-content">
                <div className="">
                    <h1 className='text-lg md:text-2xl font-medium'>Welcome to My Portfolio</h1>

                    <h1 style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '10px' }}>
                        {' '}
                        <span style={{ color: '#20c997', fontWeight: 'bold' }}>
                            <Typewriter
                                words={
                                    ['I am Harshit Sharma',
                                        'I am Web Developer',
                                        'I am a 🚀 MERN Stack Enthusiast']
                                }
                                loop={Infinity}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <h1 className='text-base md:text-xl font-medium mb-10'>I am a 🚀 MERN Stack Enthusiast <br /> Architecting Robust and Responsive Web Experiences.</h1>

                    <div className='space-x-4 flex flex-col justify-center items-center gap-5 md:gap-2 md:flex-row'>
                        <a href='#contact' className='border-2 hover:bg-[#20c997] hover:text-white text-[#20c997] border-[#20c997] py-2 px-6 rounded-full'>Hire Me</a>
                        <a href={harshit_pdf} download className='border-2 hover:bg-[#20c997] hover:text-white text-[#20c997] border-[#20c997] py-2 px-6 rounded-full'>Download Resume</a>

                        <a href='#contact' className='border-2 hover:bg-[#20c997] hover:text-white text-[#20c997] border-[#20c997] py-2 px-6 rounded-full'>Contact Me</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero