import React from 'react'
import Header from "../components/Header";
import { Core } from "../components/Core";
import { AboutUs } from "../components/AboutUs";
import { Contacts } from "../components/Contacts";
import { Footer } from "../components/Footer";
import { Industries  } from "../components/Industries";
import { Services } from '../components/Services';

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Core /> */}
      <Services />
      <Industries  />
      {/* <AboutUs /> */}
      <Contacts />
      <Footer />
    </div>
  )
}

export { Home };