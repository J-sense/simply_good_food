import React from 'react'
import HeroSection from './HeroSection'
import Why from './Why'
import Carousel from './Carousel'
import Gallary from './Gallary'
import Accordion from './Accordion'

const Home = () => {
  return (
    <>
    <div className=' w-[80%] mx-auto'>
      <HeroSection />
      <Why />
      <Carousel />
    </div>
      <Gallary />
      <div  className=' w-[80%] mx-auto'>
        <Accordion />
      </div>
    </>
  )
}

export default Home
