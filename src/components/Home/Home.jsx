import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Registration from './Registration/Registration'
import Order from './Order/Order'
import Notified from './Notified/Notified'
import ReactGA from "react-ga"


const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  })
  return (
    <div className="Home">
        <Hero/>
        <Registration/>
        <Order/>
        <Notified/>
    </div>
  )
}

export default Home