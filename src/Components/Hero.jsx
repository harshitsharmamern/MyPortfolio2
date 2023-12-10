import { Typewriter } from 'react-simple-typewriter'
import bgImage from '../assets/778 (2).jpg'


const Hero = () => {

    return (
        <div className="bg-black bg-blend-overlay bg-opacity-70 w-full h-screen bg-fixed"
            style={{ backgroundImage: `url('${bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className=" flex justify-center items-center h-screen text-center text-neutral-content">
                <div className="">
                    <h1 className='text-2xl font-medium'>Welcome to My Portfolio</h1>
                    
                    <h1 style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '10px' }}>
                        {' '}
                        <span style={{ color: '#20c997', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={
                                    ['I am Shimul Zahan',
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

                    <h1 className='text-xl font-medium mb-10'>I am a 🚀 MERN Stack Enthusiast <br /> Architecting Robust and Responsive Web Experiences.</h1>

                    <div className='space-x-4'>
                        <button className='border-2 hover:bg-[#20c997] hover:text-white text-[#20c997] border-[#20c997] py-2 px-6 rounded-full'>Hire Me</button>
                        <button className='border-2 hover:bg-[#20c997] hover:text-white text-[#20c997] border-[#20c997] py-2 px-6 rounded-full'>Download Resume</button>
                        
                        <button className='border-2 hover:bg-[#20c997] hover:text-white text-[#20c997] border-[#20c997] py-2 px-6 rounded-full'>Contact Me</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero