import React from 'react'
import Text01 from "/src/assets/text01.svg?react"
import Text02 from "/src/assets/text02.svg?react"
import Text03 from "/src/assets/text03.svg?react"
import Text04 from "/src/assets/text04.svg?react"




function WhyAttend() {

    const points = [
      {title:"Cutting-Edge Insights" , description:"Gain firsthand knowledge from top AI experts and pioneers shaping the industry."},
      {title:"Hands-On Learning" , description:"Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills."},
      {title:"Exclusive Networking" , description:"Connect with AI leaders, investors, startups, and fellow professionals at curated networking events."},
      {title:"Innovation Showcase" , description:"Explore groundbreaking AI solutions, from emerging startups to tech giants redefining the future."}
];

  return (
    <>
      <section className=" grid bg-black text-white px-6 py-16">
        <div className="grid grid-cols-2 mb-15">
          <p className="text-6xl font-bold text-left">WHY ATTEND?</p>
          <p className=" w-60 justify-self-end text-left">Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders.</p>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="relative h-60 grid grid-cols-2 py-6 px-12  grid-rows-2 bg-myBackground rounded-4xl hover:text-black hover:bg-gray-300 transition">
            <div className="col-span-2 text-lg font-bold text-left select-none">{points[0].title.toUpperCase()}</div>
            
            <Text01 className="absolute bottom-0 left-5"/>
            
            <div className="text-sm/6 w-50 text-left justify-self-end col-span-2 select-none">{points[0].description}</div>
          </div>


          <div className="relative h-60 grid grid-cols-2 py-6 px-12 grid-rows-2 bg-myBackground rounded-4xl hover:text-black hover:bg-gray-300 transition">
            <div className="col-span-2 text-lg font-bold text-left select-none">{points[1].title.toUpperCase()}</div>
            <Text02 className="absolute bottom-0 left-5"/>
            <div className="text-sm/6 w-40 text-left justify-self-end col-span-2 select-none ">{points[1].description}</div>
          </div>

          <div className="relative h-60 grid grid-cols-2 py-6 px-12 grid-rows-2 bg-myBackground rounded-4xl hover:text-black hover:bg-gray-300 transition">
            <div className="col-span-2 text-lg font-bold text-right select-none">{points[2].title.toUpperCase()}</div>
            <Text03 className="absolute bottom-0 right-2 rounded-br-3xl"/>
            <div className="text-sm/6 w-50 text-left justify-self-start col-span- select-none">{points[2].description}</div>
          </div>

          <div className="relative h-60 grid grid-cols-2 py-6 px-12 grid-rows-2 bg-myBackground rounded-4xl hover:text-black hover:bg-gray-300 transition">
            <div className="col-span-2 text-lg font-bold text-right select-none">{points[3].title.toUpperCase()}</div>
            <Text04 className="absolute bottom-0 right-2"/>
            <div className="text-sm/6 w-50 text-left justify-self-start col-span-2 select-none">{points[3].description}</div>
          </div>

        </div>
      </section>



    </>
  )
}

export default WhyAttend