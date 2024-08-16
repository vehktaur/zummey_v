import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import box from '../../assets/delivery_box.png';
import { Link } from 'react-router-dom';

const SmartBusiness = () => {
  return (
    <div className="bg-[#02020A] px-5 ~pt-12/[4.5rem] ~pb-12/[4.55rem] ~mt-16/36">
      <div className="max-w-[70rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between ~gap-10/20">
          <div className="text-white max-w-[40.13rem] grid ~gap-10/[3.69rem]">
            <h2 className="text-[2rem] md:~text-[2rem]/[4.21rem] md:~leading-[2.5rem]/[5rem] ">
              Smart Businesses use{' '}
              <span className="inline-block text-zummey-orange">Zummey</span>
            </h2>
            <p>
              Give yourself and your customers peace of mind. Partner with
              Zummey to give your customers sure delivery at cheap prices.
            </p>
            <Link
              to="/location"
              className="flex gap-2 items-center rounded-[3.5rem] bg-zummey-orange max-w-[12.94rem] px-4 py-[0.9rem]"
            >
              Make a Delivery
              <FontAwesomeIcon
                icon={faArrowRight}
                bounce
                size="sm"
                style={{ color: '#ffffff' }}
              />
            </Link>
          </div>
          <div className="max-w-[38rem]">
            <img
              className="block md:~mt-[-5rem]/[-10rem] ~w-[28rem]/[30rem] mx-auto md:mx-0"
              src={box}
              alt="Delivery Box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SmartBusiness;
