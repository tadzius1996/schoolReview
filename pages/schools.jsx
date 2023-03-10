import React from 'react';
import Header from '../components/Header';
import styles from '@/styles/Home.module.css';
import searchSchool from '../public/searchSchool.jpg';
import meerkats from '../public/meerkats.png';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import haLong from '../public/haLong.jpg';
import haLongg from '../public/haLongg.jpg';
import daNang from '../public/daNang.jpg';
import haNoi from '../public/haNoi.jpg';
import saigon from '../public/saigon.jpg';
import daLat from '../public/daLat.jpg';
import { sanityClient } from '../sanity';
import imageUrlBuilder from '@sanity/image-url';


const builder = imageUrlBuilder(sanityClient);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  
};

function schools({schools}) {
  console.log(schools)
  return (
    <div className={styles.home}>
    <div className='px-32 '>
    
      <Header />
      <div className='h-auto  mt-3 flex justify-center items-center'>
        <div className='relative'>
          <Image
            src={meerkats}
            alt='logo'
            className='m-auto'
            width={650}
            height={300}
            objectFit='contain'
            objectPosition='center'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='relative'>
              <div className='absolute top-4 left-3'>
                <i className='fa fa-search text-gray-400 z-20 hover:text-gray-500'></i>
              </div>
              <input
                type='text'
                className='h-14 w-[30rem] pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
                placeholder='Search Schools...'
              />
              <div className='absolute top-2 right-2'>
                <button className='h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600'>
                  Search
                </button>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div className='mt-24'>
        <h1 className='text-3xl font-semibold'>Places teachers love</h1>
        <span className='text-gray-800'>Spots at the top of expat's must go lists</span>
      </div>
      <div className='flex justify-center'>
  <Slider {...settings} className="w-full pt-5 lg:m-0">
    <div className="text-center px-3 relative">
      <Image src={haLongg} alt='ha long poster' className='cursor-pointer h-80 w-auto transition-all duration-100 ease-in-out hover:brightness-110 shadow-lg'/>
      <h1 className='absolute bottom-5 left-10 text-3xl font-bold text-white'>Ha Long</h1>
    </div>
    <div className="text-center px-3 relative">
      <Image src={daNang} alt='ha long poster' className='cursor-pointer h-80 w-auto transition-all duration-100 ease-in-out hover:brightness-110 shadow-lg'/>
      <h1 className='absolute bottom-5 left-10 text-3xl font-bold text-white'>Da Nang</h1>
    </div>
    <div className="text-center px-3 relative"> 
      <Image src={haNoi} alt='ha long poster' className='cursor-pointer h-80 w-auto transition-all duration-100 ease-in-out hover:brightness-110 shadow-lg'/>
      <h1 className='absolute bottom-5 left-10 text-3xl font-bold text-white'>Ha Noi</h1>
    </div>
    <div className="text-center px-3 relative">
      <Image src={saigon} alt='ha long poster' className='cursor-pointer h-80 w-auto transition-all duration-100 ease-in-out hover:brightness-110 shadow-lg'/>
      <h1 className='absolute bottom-5 left-10 text-3xl font-bold text-white'>Ho Chi Minh</h1>
    </div>
    <div className="text-center px-3 relative">
      <Image src={daLat} alt='ha long poster' className='cursor-pointer h-80 w-auto transition-all duration-100 ease-in-out hover:brightness-110 shadow-lg'/>
      <h1 className='absolute bottom-5 left-10 text-3xl font-bold text-white'>Da Lat</h1>
    </div>
  </Slider>
</div>


<div className='mt-20'>
  <h1 className='text-3xl font-semibold'>You may find these appealing</h1>
  <span className='text-gray-800'>Schools to put on your watchlist</span>
</div>

      <div className='flex justify-center'>
  <Slider {...settings} className="w-full pt-5 lg:m-0">
  
    {schools.map((school) => (
      <div className="text-center px-3 relative">
        <a href={`/school/${school.slug.current}`}>
      <Image
        identifier="main-image"
        width={100}
        height={100}
        src={school?.mainImage?.asset && builder.image(school?.mainImage?.asset?._ref).url()}
        alt='ha long poster'
        className='cursor-pointer h-80 w-auto transition-all duration-100 ease-in-out hover:brightness-110 shadow-lg'
/>
      <h1 className='text-left pt-2 text-2xl font-semibold text-gray-900'>{school.title}</h1>
      </a>
    </div>
    ))}

  
  </Slider>
</div>
    </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "school" ]'
  const schools = await sanityClient.fetch(query)

  if (!schools.length) {
    return {
      props: {
        schools: [],
      },
    }
  } else {
    return {
      props: {
        schools,
      },
    }
  }
}

export default schools;