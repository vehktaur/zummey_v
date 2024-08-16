import appPreview from '../../assets/app_preview.png';
import appPreview2 from '../../assets/preview_2.png';
import appPreview3 from '../../assets/preview_3.png';
import appPreview4 from '../../assets/preview_4.png';
import sparkle from '../../assets/sparkle.svg';
import arrow from '../../assets/down_arrow_coming.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ComingSoon = ({ heading }) => {
  return (
    <div className=" px-5 ~pt-12/[4.5rem] ~pb-12/[4.55rem] bg-zummey bg-no-repeat bg-cover mt-16">
      <div className="max-w-[70rem] mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-around">
          <div>
            <h2 className="font-bold relative text-[2.5rem] md:~text-[2.5rem]/[4.37rem] md:~leading-[2.5rem]/[5rem] z-[1]">
              {heading}
              <span className="absolute bottom-0 -top-[4rem] -right-12 z-[-1] ~w-[2rem]/[4.56rem]">
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
            <button className="btn-flex">
              Get notified when we Launch our Mobile App
              <FontAwesomeIcon
                icon={faArrowRight}
                bounce
                size="sm"
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2000 }}
            centeredSlides={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="relative max-w-[20rem] pb-16"
          >
            <span className=" hidden md:block z-[-1] absolute -top-12 left-[20%] w-[35rem]">
              <img src={arrow} alt="down arrow" />
            </span>
            <SwiperSlide>
              <div>
                <img
                  className="block relative z-[1]"
                  src={appPreview2}
                  alt="Mobile App"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="block relative z-[1]"
                  src={appPreview3}
                  alt="Mobile App"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="block relative z-[1]"
                  src={appPreview4}
                  alt="Mobile App"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
