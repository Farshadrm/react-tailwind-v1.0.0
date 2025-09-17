import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



function Tickets() {

    const tickets = [
  { title: "EARLY BIRD PASS", description:"Limited time offer!", price: "€299",},
  { title: "STANDARD PASS", description:"Includes exclusive speaker meetups & front-row seating", price: "€399" },
  { title: "VIP EXPERIENCE", description:"Includes exclusive speaker meetups & front-row seating, lorem impsum dollar lorem dollar include", price: "€699" },
];


  return (
    <>
    <section id="tickets" className="bg-black text-white px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-5xl text-left font-bold mb-12">Ticket Options</h2>
      <div className="grid grid-cols-3 gap-6">
        {tickets.map((t, i) => (
          <div
            key={i}
            className="group border-2 rounded-4xl py-12 px-12 grid grid-rows-4 gap-8 hover:bg-myBlue hover:border-myBlue hover:scale-110 transition"
          >
            <p className="text-2xl text-left font-bold">{t.title}</p>
            <p className="text-sm text-left">{t.description}</p>
            <p className="text-3xl font-bold text-left">{t.price}</p>
            <button className="bg-black bg-myBlue cursor-pointer text-lg text-white rounded-full group-hover:bg-gray-300 group-hover:text-black transition">
              Get your ticket <FontAwesomeIcon icon={faArrowRight} className="pl-4"/>

            </button>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Tickets