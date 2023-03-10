import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1
};

const Options = () => {
  return (
    <Slider {...settings} className="w-1/3 m-auto mt-5 lg:m-0 absolute left-0 bottom-16">
      <div className="text-center">
        <a href="#" className="block p-2 mx-5 px-5 lg:bg-gray-200 rounded-full">Reviews</a>
      </div>
      <div className="text-center">
        <a href="#" className="block p-2 mx-5 px-5 lg:bg-gray-200 rounded-full">Teachers</a>
      </div>
      <div className="text-center"> 
        <a href="#" className="block p-2 mx-5 px-5 lg:bg-gray-200 rounded-full">Application</a>
      </div>
      <div className="text-center">
        <a href="#" className="block p-2 mx-5 px-5 lg:bg-gray-200 rounded-full">Contact</a>
      </div>
      <div className="text-center">
        <a href="#" className="block p-2 mx-5 px-5 lg:bg-gray-200 rounded-full">Social</a>
      </div>
    </Slider>
  );
};

export default Options;