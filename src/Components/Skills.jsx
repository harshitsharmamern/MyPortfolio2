import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

const Skills = () => {
  return (
      <div className='bg-[#343a40] min-h-screen relative'>
          <Title Children={'MY SKILLS'} />
          <div className='flex justify-center items-center pt-20 z-20 relative'>
              <SubTitle Children={'The Technology I am Know'} />
          </div>
      </div>
  )
}

export default Skills