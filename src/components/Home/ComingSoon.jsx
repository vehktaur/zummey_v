import appPreview from '../../assets/app_preview.png';
import sparkle from '../../assets/sparkle.svg';
import arrow from '../../assets/down_arrow_coming.svg';

const ComingSoon = () => {
  return (
    <div className=" px-5 ~pt-12/[4.5rem] ~pb-12/[4.55rem] mt-16">
      <div className="max-w-[70rem] mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-around">
          <div>
            <h2 className="heading relative text-[2rem] md:~text-[2rem]/[4.37rem] md:~leading-[2.5rem]/[5rem]">
              Coming{' '}
              <span className="relative inline-block z-[1]">
                soon!{' '}
                <span className="hidden md:block absolute bottom-0 -top-[4rem] -right-12 z-[-1] ~w-[2rem]/[4.56rem]">
                  <img
                    className="object-fit block w-full h-full"
                    src={sparkle}
                    alt="sparkle"
                  />
                </span>
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
            <button className="rounded-[3.5rem] bg-zummey-orange max-w-[28.625rem] px-4 py-[0.9rem] text-white">
              Get notified when we Launch our Mobile App
            </button>
          </div>
          <div className="relative z-[1]">
            <span className=" hidden md:block z-[-1] absolute -top-12 left-[20%] w-[35rem]">
              <img src={arrow} alt="down arrow" />
            </span>
            <img
              className="block relative z-[1]"
              src={appPreview}
              alt="Mobile App"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
