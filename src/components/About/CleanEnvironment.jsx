import underline from '../../assets/underline_bu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bike from '../../assets/clean_bike.png';
import curve from '../../assets/clean_vector.svg';
import { Link } from 'react-router-dom';

const CleanEnvironment = () => {
  return (
    <div className="px-5 sm:~px-8/16 ~pt-[5.5rem]/[7.5rem] relative py-12">
      <div className="relative max-w-[80rem] mx-auto text-center">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:h-[30rem]">
          <div className="max-w-[40rem] flex flex-col justify-end">
            <h2 className="relative ~text-[2rem]/[2.3125rem] font-semibold ~mb-6/8">
              <span className="block absolute left-[50%] translate-x-[-50%] bottom-[100%]">
                <img src={underline} alt="underline" />
              </span>
              Promoting a Cleaner Environment
            </h2>

            <div className="max-w-[33.4rem] mx-auto">
              <p>
                At Zummey, we are not just delivering packages; we are
                delivering a greener future. We believe that delivery services
                should not come at the cost of our environment. That’s why we
                use electric bicycles for our deliveries, significantly reducing
                carbon footprints while maintaining fast and efficient service.
              </p>
              <Link
                className="btn-flex max-w-[15.625rem] ~mt-8/14 mx-auto md:mx-0"
                to="/location"
              >
                Make a Delivery Now
                <FontAwesomeIcon
                  icon={faArrowRight}
                  bounce
                  size="sm"
                  style={{ color: '#ffffff' }}
                />
              </Link>
            </div>
          </div>

          <div className="rounded-[0.625rem] border-[length:3px] border-zummey-orange xl:max-w-[26.82rem] shadow-zummey-blue max-h-[26rem] mx-auto md:mx-0 md:me-auto relative">
            <img
              className="hidden xl:block absolute left-[83%] -bottom-[6.5rem] w-[25rem] h-[23rem]"
              src={curve}
              alt="vector"
            />
            <img
              className="block w-full object-cover h-full rounded-[0.6rem]"
              src={bike}
              alt="bike"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CleanEnvironment;
