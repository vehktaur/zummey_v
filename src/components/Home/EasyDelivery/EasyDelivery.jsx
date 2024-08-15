import easyDelivery from '../../../assets/easy_delivery.jpg';
import ellipse from '../../../assets/ellipse.svg';

const EasyDelivery = () => {
  return (
    <div className="px-5 py-10">
      <div className="flex flex-col md:flex-row-reverse justify-between ~gap-10/20 items-center flex-nowrap text-black max-w-[70rem] mx-auto text-center md:text-start">
        <div className="max-w-[34.9rem]">
          <p className="font-semibold text-base">Easy and Cheap Logistics</p>
          <h2 className="heading relative">
            Delivery Nor Suppose Stress You!
            <span className="absolute block h-full left-0 top-0 z-[-1]">
              <img src={ellipse} alt="ellipse" />
            </span>
          </h2>
          <p className="mt-8">
            We enable you send and receive packages comfortably and at low
            prices. From food to clothes to drugs to gadgets, make the order and
            Zummey will deliver.
          </p>

          <div className="flex justify-center md:justify-start mt-8">
            <a
              className="block text-center bg-zummey-orange text-white px-1 py-3 rounded-[3.5rem] w-full max-w-[17.19rem] ~text-md/base"
              href="#"
            >
              Send or Receive a Package
            </a>
          </div>
        </div>

        <div className="md:min-w-[22rem]">
          <img
            className="block w-full max-w-[28rem] rounded-md border-2 shadow-blue-300 shadow-lg border-zummey-orange"
            src={easyDelivery}
            alt="Easy Delivery"
          />
        </div>
      </div>
    </div>
  );
};
export default EasyDelivery;
