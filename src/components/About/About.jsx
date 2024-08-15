import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import AboutWe from './AboutWe/AboutWe'
import AboutWhy from './AboutWhy/AboutWhy'
import AboutRegistration from './AboutRegistration/AboutRegistration'
import AboutRegister from './AboutRegister/AboutRegister'
import Order from '../Home/Order/Order'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Notified from '../Home/Notified/Notified'

const About = () => {
  return (
    <div className="about">
        <AboutHero aos={AOS} />
        <AboutWe aos={AOS}/>
        <AboutWhy aos={AOS}/>
        <AboutRegistration aos={AOS}/>
        <AboutRegister aos={AOS}/>
        <Order/>
        <Notified/>
    </div>
  )
}

export default About