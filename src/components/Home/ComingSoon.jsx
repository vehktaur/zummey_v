import appPreview from '../../assets/preview_1.jpg';
import appPreview2 from '../../assets/preview_2.jpg';
import appPreview3 from '../../assets/preview_3.jpg';
import appPreview4 from '../../assets/preview_4.jpg';
import appPreview5 from '../../assets/preview_5.jpg';
import star from '../../assets/hero-star.png';
import sparkle from '../../assets/sparkle.svg';
import arrow from '../../assets/down_arrow_coming.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';

const ComingSoon = ({ heading }) => {
  const previews = [
    appPreview,
    appPreview2,
    appPreview3,
    appPreview4,
    appPreview5
  ];

  return (
    <div className=" px-5 ~pt-12/[4.5rem] ~pb-12/[4.55rem] bg-zummey bg-no-repeat bg-cover mt-16 relative">
      <img src={star} alt="" className='absolute ~w-[1.5rem]/[2.2rem] left-[4%] top-[2rem]'  />
      <img src={star} alt="" className='absolute ~w-[1.5rem]/[2.2rem] bottom-[30%] left-[2%]' />
      <img src={star} alt="" className='absolute ~w-[1.5rem]/[2.2rem] bottom-[20%] left-[45%]' />
      <img src={star} alt="" className='absolute ~w-[1.5rem]/[2.2rem] right-[5%] bottom-[8rem]' />
      <div className="max-w-[80rem] mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-around">
          <div className="~pe-0/12">
            <h2 className="font-bold relative text-[2rem] md:~text-[2rem]/[4.37rem] md:~leading-[2rem]/[5rem] z-[1]">
              {heading}
              <span className="absolute bottom-0 -top-[4rem] ~right-[5rem]/[-3rem] z-[-1] ~w-[2rem]/[4.56rem]">
                <img
                  className="object-fit block w-full h-full"
                  src={sparkle}
                  alt="sparkle"
                />
              </span>
            </h2>
            <div className="py-8">
              <p>
                <strong>With the Zummey App, you get:</strong>
              </p>
              <ul className="ps-8 list-disc mt-8 space-y-2">
                <li>Automatic Connection to riders</li>
                <li>Real-Time tracking from Pickup to delivery</li>
                <li>Order from your favourite vendors in minutes</li>
                <li>Promos and freebies</li>
              </ul>
            </div>
            <Link to="/#notify" className="btn-flex text-center w-full md:w-[95%] mx-auto mt-6">
              Get notified when we Launch our Mobile App
              <FontAwesomeIcon
                icon={faArrowRight}
                bounce
                size="sm"
                style={{ color: '#ffffff' }}
              />
            </Link>
          </div>
          <div className="max-w-[100%]">
            <Swiper
              spaceBetween={50}
              autoplay={{ delay: 2000 }}
              centeredSlides={true}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="relative max-w-[20rem] pb-16"
            >
              <span className=" hidden md:block z-[-1] absolute -top-12 left-[20%] w-[35rem]">
                <img src={arrow} alt="down arrow" />
              </span>
              {previews.map((preview, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-3xl shadow-md overflow-hidden border-[length:2px] border-black">
                    <img
                      className="block relative z-[1]"
                      src={preview}
                      alt="Mobile App"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
