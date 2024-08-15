import bikeFast from '../../assets/bike_fast.svg';
import bikePark from '../../assets/park_bike.svg';
import tokenTrust from '../../assets/token_trust.svg';
import sparkle from '../../assets/sparkle.svg';

const PremiumService = () => {
  const services = [
    {
      title: 'Reliable Delivery Services',
      icon: tokenTrust,
      description:
        "We've handpicked the best logistic bike owners to ensure that your deliveries are in safe hands."
    },
    {
      title: 'Low Cost of Delivery',
      icon: bikeFast,
      description:
        'Delivery does not have to be expensive. With us, you can make deliveries for as low as 400 naira.'
    },
    {
      title: 'Fast Delivery Process',
      icon: bikePark,
      description:
        'We connect you to your driver in 2-3 minutes max, and we get your delivery done in 30 minutes max.'
    }
  ];

  return (
    <div className="bg-[#FFEFEC] px-5 ~pt-12/[4.5rem] ~pb-12/[4.55rem] mt-16">
      <div className="max-w-[70rem] mx-auto">
        <h2 className="heading text-center relative ">
          Premium Service that costs Much{' '}
          <span className="relative inline-block z-[1]">
            Less{' '}
            <span className="hidden md:block absolute bottom-0 -top-4 -right-12 z-[-1] ~w-[2rem]/[4.56rem]">
              <img
                className="object-fit block w-full h-full"
                src={sparkle}
                alt="sparkle"
              />
            </span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 ~gap-8/[3.44rem] mt-8 justify-items-center">
          {services.map((service, index) => (
            <div
              className="bg-[#FFF] relative gradient-border px-5 pt-6 ~pb-12/20 max-w-[20rem]"
              key={index}
            >
              <div className="flex justify-center">
                <img src={service.icon} alt={service.title} />
              </div>

              <h3 className="text-lg font-bold text-center mt-8">
                {service.title}
              </h3>

              <p className="text-center mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PremiumService;
