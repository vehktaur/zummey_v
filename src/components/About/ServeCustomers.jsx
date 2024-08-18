import sparkle from '../../assets/sparkle.svg';
import cycle from '../../assets/street_cycle.png';
import girl from '../../assets/not_an_iphone.png';
import girls from '../../assets/girls_just_wanna_have_fun.png';
import gabe from '../../assets/gabe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServeCustomers = () => {
  const images = [cycle, girls, girl, gabe];

  return (
    <div className="px-5 sm:~px-8/16 py-12 mt-10">
      <div className="max-w-[80rem] mx-auto">
        <div className="flex flex-col items-center md:flex-row justify-between ~gap-12/16 text-center md:text-left">
          <div className="md:max-w-[30rem]">
            <h1 className="font-semibold ~text-[2rem]/[2rem] relative ~mb-6/8">
              We help you serve your customers better
              <span className="absolute -top-6 ~right-[0.5rem]/[-3rem] z-[-1] ~w-[2.75rem]/[4.56rem]">
                <img
                  className="object-fit block w-full h-full"
                  src={sparkle}
                  alt="sparkle"
                />
              </span>
            </h1>
            <p className="md:max-w-[28.5rem] mx-auto md:mx-0">
              Your customers deserve the best service without having to pay so
              much for delivery. We believe that getting orders delivered should
              be affordable and convenient, ensuring that your customers have a
              positive experience every time they shop with you. Partner with
              Zummey to serve your customers better and help your business grow
            </p>

            <a href="/location" className="btn-flex max-w-[11.56rem] ~mt-8/12 mx-auto md:mx-0">
              Join Zummey
              <FontAwesomeIcon
                icon={faArrowRight}
                bounce
                size="sm"
                style={{ color: '#ffffff' }}
              />
            </a>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  className="shadow-zummey-blue rounded-lg overflow-hidden max-w-[15rem] last-of-type:h-[110%]"
                  key={index}
                >
                  <img
                    className="block w-full h-full object-cover"
                    src={image}
                    alt="service image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServeCustomers;
