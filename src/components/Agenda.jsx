import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MarkIcon from '../assets/Mark.svg?react'



function Agenda() {

    const days = [
    { day: "Day 1", time: "09:00 - 19:00", title: "AI Innovations & Trends", description:`The summit kicks off with a keynote, expert panels, and discussions on AI’s impact, ethics, and automation. Hands-on workshops and a networking event wrap up the day.`},
    { day: "Day 2", time: "09:00 - 18:00", title: "AI Technologies & Applications", description:`Explore the latest in generative AI, robotics, and NLP, with industry-led discussions and tech demos. A startup showcase and investor insights highlight AI’s business potential.` },
    { day: "Day 3", time: "09:30 - 16:00", title: "Future of AI & Networking", description:`Dive into AI’s long-term impact, attend expert-led workshops, and watch the startup pitch competition. The event closes with a visionary keynote and final networking sessions.`},
  ];

  return (
    <>
     <section id="agenda" className="bg-black text-white px-6 py-">
      <div className="grid grid-cols-2">
        <p className="text-5xl font-bold mb-8 text-start">AGENDA</p>
        <p className="w-50 h-20 text-sm text-left place-self-end">October 15-17, 2052 | Horizon Convention Center, Amsterdam</p>
      </div>

        <div className="relative grid grid-cols-2 grid-rows-3 bg-myBackground rounded-4xl py-30 px-20">
        {days.map((sub, i) => (
          <div key={i} className="grid grid-cols-2 mb-25 rounded-xl col-span-2">
              <div className="text-left">
                <p className="text-4xl font-bold">{sub.day}</p>
                <p className="text-4xl font-bold">{sub.time}</p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold">{sub.title}</p>
                <p className="text-[15px] mt-7">{sub.description}</p>
              </div>
            </div>
        ))}

        <div className="col-start-2">
          <button className="w-full h-15 rounded-full text-xl bg-gradient-to-r from-myBlue to-myDarkblue cursor-pointer hover:text-black hover:from-gray-300 hover:to-gray-300 hover:scale-110 transition">View detailed schedule<FontAwesomeIcon icon={faArrowRight} className="text-lg pl-6"/></button>
        </div>
        <MarkIcon className="absolute bottom-0 left-0" />
      </div>

    </section>
    </>
  )
}

export default Agenda