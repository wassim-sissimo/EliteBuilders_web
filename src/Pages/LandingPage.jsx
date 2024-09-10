import React from 'react'
import { SNavbar } from '../Components/Nav'
import { SCard } from '../Components/ServicesCard'
import { PCard } from '../Components/ProjectsCard'
import { TCard } from '../Components/TeamCard'
import { LandingCarousel } from '../Components/Carousel'


const LandingPage = () => {
  return (
    <div className='min-h-screen bg-[#F4E9B5] w-screen'>
        <SNavbar/>
        <div className='relative h-screen md:h-[75vh] w-full'>
            <LandingCarousel/>
        </div>
        <h1 className='text-4xl text-[#073A68] text-center font-CocoGothic font-bold my-11'>
            Nos services
        </h1>
        <div className='flex justify-center pb-6 flex-col  md:flex-row gap-6 drop-shadow-xl'>
            <SCard/>
            <SCard/>
            <SCard/>
        </div>
        <h1 className='text-4xl text-[#073A68] text-center font-CocoGothic font-bold my-11'>
            Nos Projets
        </h1>
        <div className='flex justify-center pb-6 flex-col  md:flex-row gap-6 drop-shadow-xl'>
            <PCard/>
            <PCard/>
            <PCard/>
        </div>
        <h1 className='text-4xl text-[#073A68] text-center font-CocoGothic font-bold my-11'>
            Notre Equipe
        </h1>
        <div className='flex justify-center pb-6 flex-col  md:flex-row gap-6 drop-shadow-xl'>
            <TCard/>
            <TCard/>
            <TCard/>
        </div>

    </div>
  )
}

export default LandingPage
