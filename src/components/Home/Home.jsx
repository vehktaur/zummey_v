import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Registration from './Registration/Registration';
import Order from './Order/Order';
import Notified from './Notified/Notified';
import ReactGA from 'react-ga';
import EasyDelivery from './EasyDelivery/EasyDelivery';
import PremiumService from './PremiumService';
import ComingSoon from './ComingSoon';
import SmartBusiness from './SmartBusiness';

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <div className="Home">
      <Hero />
      <EasyDelivery />
      <PremiumService />
      <Registration />
      <SmartBusiness />
      <ComingSoon />
    </div>
  );
};

export default Home;
