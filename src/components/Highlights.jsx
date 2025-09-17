import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import avatar1 from "../assets/i1.jpg"
import avatar2 from "../assets/i2.jpg"
import avatar3 from "../assets/i3.jpg"
import avatar4 from "../assets/i4.jpg"

function Highlights() {
  return (
    <>
     <section className="grid md:grid-cols-2 grid-rows-2 gap-6 px-6 py-12 /* max-w-6xl mx-auto */">
      <div className="grid grid-cols-2 group row-span-2 bg-myBlue rounded-4xl py-8 px-10 text-white hover:bg-gray-300 hover:text-black transition">
        <p className="col-span-2 text-3xl font-bold text-left">Speakers</p>
        <div className="group-hover:border-1 group-hover:border-black group-hover:text-black bg-gray-300 w-15 h-15 rounded-full text-myBlue cursor-pointer hover:scale-110 hover:bg-myBlue hover:text-white hover:border-none transition"><FontAwesomeIcon icon={faArrowRight} className="text-xl mt-5"/></div>
        <p className="mt-2 text-sm text-left">Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.</p>
      <div className="col-span-2 grid grid-cols-2 place-content-center">
        <div className="relative">
          <div className="absolute bg-gray-300 w-15 h-15 rounded-full"><img className="w-full h-full rounded-full object-cover hover:scale-110 transition" src={avatar1} /></div>
          <div className="absolute bg-gray-300 w-15 h-15 rounded-full left-8"><img className="w-full h-full rounded-full object-cover hover:scale-110 transition" src={avatar2} /></div>
          <div className="absolute bg-gray-300 w-15 h-15 rounded-full left-16"><img className="w-full h-full rounded-full object-cover hover:scale-110 transition" src={avatar3} /></div>
          <div className="absolute bg-gray-300 w-15 h-15 rounded-full left-24"><img className="w-full h-full rounded-full object-cover hover:scale-110 transition" src={avatar4} /></div>
        </div>
        <button className="w-50 h-15 border border-1 rounded-full px-5 py-2 cursor-pointer hover:scale-110 hover:bg-myBlue hover:text-white transition">And more <FontAwesomeIcon icon={faArrowRight} className="text-sm pl-2"/></button>
      </div>
      </div>
      <div className="bg-myBlue rounded-4xl py-8 px-10 text-white hover:bg-gray-300 hover:text-black transition">
        <p className="text-3xl font-bold text-left pb-7">Technologies</p>
        <p className="text-base text-left">Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.</p>
      </div>
      <div className="bg-myBlue rounded-4xl py-8 px-10 text-white hover:bg-gray-300 hover:text-black transition">
        <p className="text-3xl font-bold text-left pb-10">Networking Opportunities</p>
        <p className="text-base text-left">Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.</p>
      </div>
    </section>

    </>
  )
}

export default Highlights