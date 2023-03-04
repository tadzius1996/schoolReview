import React from 'react'
import banner from '../public/banner.png'
import Options from '../components/Options'
import Image from 'next/image'
import schoollogoo from '../public/schoollogoo.png'

function Hero() {
  return (
    <>
    <div className='h-[93vh] lg:h-[76vh] mt-12 flex flex-col lg:flex-row'>
      <div className="mx-auto text-center lg:text-left">
  <h1 className='text-6xl font-thin text-white text-center mb-5 lg:text-left'>Scouting Out The<br/><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-200 font-semibold text-8xl'>Best Schools</span><br/> <span className=' '>In Your Area</span><br/></h1>
  <p className='mt-7 lg:w-3/4 w-11/12 text-center lg:text-left text-lg font-semibold m-auto lg:m-0'>Discover a World of Possibilities, Where You Can Explore, Compare, and Choose from the Best Schools in Your Area - Let SchoolScout Help You Make Informed Decisions and Find the Perfect Fit for Your Aspirations.</p>
  <a href="#_" className="mt-5 relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
    </span>
    <span className="relative text-white">Search Schools</span>
  </a>
</div>
      <Image src={schoollogoo} alt='banner' className='hidden md:block  w-[30rem] lg:w-[40rem] h-auto mb-10 ml-10 lg:ml-0 mt-10 lg:mt-0'/>
    </div>
    <Options />
    </>
  )
}

export default Hero