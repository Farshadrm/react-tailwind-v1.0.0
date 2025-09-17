import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import GearIcon from '../assets/Gear.svg?react'

function Hero() {
  return (
    <>
      <section className="relative grid grid-cols-2 gap-y-12 justify-start font-syne bg-myBackground rounded-4xl text-white py-17 px-12">
        <p className="text-xl font-bold place-self-start">OCTOBER 15-17,2025</p>
        <p className="text-xl font-bold place-self-start"> Horizon Convention center, TechCity, Utopolis</p>
        <p className="col-span-2 text-8xl text-left font-bold">NEXT-GEN AI SUMMIT</p>
        <div className="col-span-2 text-lg text-left mt-4">
          <p>Explore the cutting-edge innovations shaping the future of artificial intelligence.</p>
          <p>Join global leaders and visionaries for two days of insights, discussions, and breakthroughs.</p>
        </div>
        <button className="text-2xl cursor-pointer w-[350px] mt-8 px-4 py-6 rounded-full bg-gradient-to-r from-myBlue to-myDarkblue hover:scale-110 hover:text-black hover:from-gray-300 hover:to-gray-300 transition">
          Early bird tickets <FontAwesomeIcon icon={faArrowRight} className="text-lg pl-4"/>
        </button>
        <GearIcon className="absolute bottom-7 right-15" />
      </section>
    </>
  )
}

export default Hero