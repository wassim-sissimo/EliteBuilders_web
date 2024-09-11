import React from 'react'
import { SNavbar } from '../Components/Nav'
import { SCard } from '../Components/ServicesCard'
import { PCard } from '../Components/ProjectsCard'
import { TCard } from '../Components/TeamCard'
import { LandingCarousel } from '../Components/Carousel'
import Hero from '../Components/SectionComponents/Hero'
import Team from '../Components/SectionComponents/Team'
import { FAQ } from '../Components/SectionComponents/FAQ'
import Contact from '../Components/SectionComponents/Contact'



const LandingPage = () => {
  return (
    <div className='bg-[#073a68]'>
      <SNavbar/>
        <Hero/>
        <Team/>
        <FAQ/>
        <Contact/>

        </div>

  )
}

export default LandingPage
