import React from 'react'
import imageOne from "/src/assets/ImageOne.png"
import imageTwo from "/src/assets/ImageTwo.png"
import imageThree from "/src/assets/ImageThree.png"
import imageFour from "/src/assets/ImageFour.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



function Speakers() {
    const speakers1 = [
  { name: "Dr. Emily Carter", role: "AI Researcher" },
  { name: "Elon Park", role: "Tech Visionary" },
];



  return (
    <>
      <section className="grid bg-black text-white px-6 py-16">
        <div className="grid grid-cols-2">
          <p className="w-75 text-6xl/15 font-bold mb-8 text-start">KEYNOTE SPEAKERS</p>
          <p className="w-50 h-20 text-sm text-left justify-self-end">Meet the industry leaders shaping the future of AI.</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-8" >
          

              <div className="grid grid-cols-2 gap-5">
                <div className="grid content-between py-10 px-8 bg-gray-300 text-black rounded-[43px] hover:bg-myBlue hover:text-white hover:scale-110  transition duration-500">
                  <p className="text-3xl font-bold text-left">Dr. Emily Carter</p>
                  <p className="text-lg text-left">Chief AI Scientist, OpenAI</p>
                </div>
                <img className="object-cover grayscale  hover:scale-110 hover:grayscale-0 transition duration-500" src={imageOne} />
              </div>

               <div className="grid grid-cols-2 gap-5">
                <div className="grid content-between py-10 px-8 bg-gray-300 text-black rounded-[43px] hover:bg-myBlue hover:text-white hover:scale-110  transition duration-500">
                  <p className="text-3xl font-bold text-left">Elon Park</p>
                  <p className="">CTO, DeepMind</p>
                </div>
                <img className="object-cover grayscale hover:scale-110 hover:grayscale-0 transition duration-500" src={imageTwo} />
              </div>

               <div className="grid grid-cols-2 gap-5">
                <img className="object-cover grayscale  hover:scale-110 hover:grayscale-0 transition duration-500" src={imageThree} />
                <div className="grid content-between py-10 px-8 bg-gray-300 text-black rounded-[43px] hover:bg-myBlue hover:text-white hover:scale-110  transition duration-500">
                  <p className="text-3xl font-bold text-left">Dr. Alan Foster</p>
                  <p className="text-lg text-left">AI Policy Advisor, EU Commission</p>
                </div>
              </div>

               <div className="grid grid-cols-2 gap-5">
                <img className="h-full object-cover grayscale  hover:scale-110 hover:grayscale-0 transition duration-500" src={imageFour} />
                <div className="grid content-between py-10 px-8 bg-gray-300 text-black rounded-[43px] hover:bg-myBlue hover:text-white hover:scale-110  transition duration-500">
                  <p className="text-3xl font-bold text-left">Laura Kim</p>
                  <p className="text-lg text-left">Stanford AI Lab</p>
                </div>
              </div>

          </div>

        <button className="w-50 mt-15 text-xl border border-1 rounded-full py-4 px-5 place=self-start cursor-pointer hover:bg-gray-300 hover:text-black hover:scale-110 transition">And more <FontAwesomeIcon icon={faArrowRight} className="text-lg pl-3"/></button>
      </section>

    </>
  )
}

export default Speakers