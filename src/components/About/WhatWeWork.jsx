import underline from '../../assets/underline_bd.svg';
import arrow from '../../assets/wwwf_d_arrow.svg';
import sparkle from '../../assets/sparkle.svg';

const WhatWeWork = () => {
  const values = [
    {
      title: 'Accessibility',
      description:
        "We're passionate about making delivery accessible to everyone, regardless of their walk of life"
    },
    {
      title: 'Trustworthiness',
      description:
        'Our commitment to trust ensures that our customers feel confident in our services'
    },
    {
      title: 'Affordability',
      description: 'We strive to keep our delivery services affordable for all'
    },
    {
      title: 'Sustainability',
      description:
        'Eco-friendly bikes and packaging with a communal focus for growth and development'
    }
  ];

  return (
    <div className="px-5 sm:~px-8/16 ~pt-[5.5rem]/[7.5rem] relative">
      <span className="absolute ~top-[-3rem]/[-1.5rem] z-[-2] left-[50%]">
        <img src={arrow} alt="arrow" />
      </span>
      <div className="relative max-w-[80rem] mx-auto text-center">
        <span className="absolute -top-10 left-0 [rotate:_y_-180deg] ~w-[2.75rem]/[4.56rem]">
          <img src={sparkle} alt="sparkle" />
        </span>

        <h2 className="relative ~text-[2rem]/[2.875rem] font-bold">
          What we Work For?
          <span className="block absolute left-[50%] translate-x-[-50%] top-[100%]">
            <img src={underline} alt="underline" />
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-items-center ~gap-[1.83rem]/8 ~mt-12/20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#FF6B0038] rounded-lg sm:rounded-[1.22rem] ~px-6/8 pt-8 pb-16 max-w-[21rem]"
            >
              <h3 className="text-[1.52rem] font-semibold ~mb-6/8">
                {value.title}
              </h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhatWeWork;
