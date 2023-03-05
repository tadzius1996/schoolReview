import React from 'react'
import Image from 'next/image'
import goatLogo from '../public/goatLogo.png'
import scouter from '../public/scouter.png'
import {
    MenuIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline";
import Link from 'next/link';

function Header() {
  return (
    <div className='flex justify-between pt-5  '>
      <Link href='/'><div className='flex items-center'>
      <Image src={scouter} alt='logo' className='w-24 h-auto cursor-pointer'/>
      <h1 className='text-4xl font-semibold ml-[-0.7rem]'>School<span className='text-blue-900'>Scout</span></h1>
      </div>
      </Link>
        <div className='flex items-center gap-5'>
        <div className=" relative hidden lg:hidden items-center h-10 flex-grow cursor-pointer ">
          <input placeholder='Search for Schools' className="relative rounded-xl bg-white  p-2 h-full w-60 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
          <MagnifyingGlassIcon className="absolute right-0 h-10 p-3 bg-white rounded-xl" />
        </div>
        <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Login</span>
        </a>
        <Link href='/schools'><button href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Scout</span>
        </button></Link>   
        </div>
    </div>
  )
}

export default Header