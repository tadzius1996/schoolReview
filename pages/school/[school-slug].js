import { sanityClient } from "../../sanity";
import { isMultiple } from "../../utils";
import Image from "../../components/Image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from '../../components/Header';
import {MdLocationOn} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/cg';
import {BsPencil} from 'react-icons/bs';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Gallery } from "react-grid-gallery";
import Review from '../../components/Review'
import styles from '../../styles/Home.module.css';

const School = ({
  title,
  location,
  phone,
  website,
  stringLocation,
  propertyType,
  mainImage,
  images,
  description,
  reviews,
}) => {
  const reviewAmount = reviews?.length || 0;

  const [mainImageUrl, setMainImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      const response = await sanityClient.fetch(
        `*[_id == "${mainImage._ref}"][0].asset.url`
      );
      setMainImageUrl(response);
    };
    fetchImageUrl();
  }, [mainImage]);


  const imagesGallery = [
    {
       image: mainImage,
       width: 1000,
       height: 800,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
 
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
    },
 ];
 console.log(reviews);

  return (
    <div className={styles.home}>
    <div className="md:px-32 bg-gradient-to-t  ">
    <Header/>
    <div className="mt-10">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <p className="text-gray-300 font-thin mt-1">
        {reviewAmount} review{isMultiple(reviewAmount)}
      </p>
      <div className="flex justify-between">
      <div className="flex">
        <p className="flex items-center mt-2"><MdLocationOn className="text-2xl mx-2"/>{stringLocation}</p>
        <div class=" ml-3 w-0.5 h-7 bg-gray-200 mt-4"></div>
        <p  className="flex items-center mt-2"><AiOutlinePhone className="text-2xl mx-2 "/>{phone}</p>
        <div class=" ml-3 w-0.5 h-7 mt-4 bg-gray-200"></div>
        <a href={website}  className="flex items-center mt-2 font-semibold"><CgWebsite className="text-2xl mx-2 "/>Visit Website</a>
      </div>
  
      </div>

      <div className="mt-8 flex justify-between m-auto bg-gradient-to-r from-rose-400 to-orange-300 p-2 py-7 px-7">
        <div>
          <h1 className="text-4xl font-semibold ">About</h1>
          <h4 className="flex-1 text-lg mt-3 w-1/2">{description}</h4>
        </div>
        <div className="w-full h-auto ">
          <Image identifier="main-image" image={mainImage} alt='main-image'/>
        </div>
      </div>

     <div className="mt-10 bg-gradient-to-r from-rose-400 to-orange-300 w-full p-2 py-7 px-7 m-auto">
      <div className="flex justify-between">
      <h1 className="text-4xl font-semibold">Reviews</h1>
      <a href="#_" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
        <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-800 opacity-0 group-hover:opacity-100"></span>
        <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Review</span>
      </a>
      </div>
      {reviewAmount > 0 &&
        reviews.map((review) => <Review key={review._key} review={review} />)}
      </div>
    </div>
    </div>

    <form className="flex flex-col p-5 max-w-2xl mx-auto mt-7">
      <h4 className="text-3xl font-bold">Leave a comment</h4>
      <hr className="py-3 mt-2"/>
        <label className="block mb-5">
           <span className="text-gray-700">Name</span>
           <input type="text" placeholder="Enter your name" className="ring shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500"/>
         </label>
         <label className="block mb-5">
           <span className="text-gray-700">Comment</span>
           <textarea placeholder="comment..." rows={8} className='shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring'/>
         </label>
         
      </form>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[ _type == "school" ]{ slug }`;

  const schools = await sanityClient.fetch(query);

  const paths = schools.map((school) => ({
    params: { "school-slug": school?.slug?.current || "" }, // add the school-slug parameter
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { "school-slug": slug } = params || {}; // change `slug` to `school-slug`

  const query = `*[ _type == "school" && slug.current == $slug][0]{
      title,
      location,
      phone,
      website,
      stringLocation,
      propertyType,
      mainImage,
      images,
      description,
      reviews[]{
        ...,
      }
    }`;

  const school = await sanityClient.fetch(query, { slug });

  return {
    props: {
      title: school.title,
      location: school.location,
      website: school.website,
      phone: school.phone,
      stringLocation: school.stringLocation,
      propertyType: school.propertyType,
      mainImage: school.mainImage,
      images: school.images,
      description: school.description,
      reviews: school.reviews,
    },
  };
};

export default School;