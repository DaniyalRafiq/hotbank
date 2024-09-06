import React from 'react'
import { Hero } from './components/Hero/Hero'
import Header from './components//Header/Header'
import AboutUs from './components/About/AboutUs'
import Features from './components/Features/Features'
import Solution from './components/Solution/Solution'
import Testimonial from './components/Testimonial/Testimonial'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Features />
      <Solution />
      <Testimonial />
      <Subscribe />
      <Footer />
      
    </div>
  )
}

export default App