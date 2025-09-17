import React from 'react'
import Countdown from 'react-countdown';
import Vector from"../assets/Vector.svg?react"

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <p className="text-5xl">Time's up</p>;
  } else {
    return (
      <div className="flex text-center text-[100px] pl-10">
        <div className="flex flex-col justify-center">
          <div className="px-2">{days}</div>
          <div className="text-[13px]">Days</div>
        </div>
        <p>:</p>
        <div className="flex flex-col justify-center">
          <div className="px-2">{hours}</div>
          <div className="text-[13px]">Hours</div>
        </div>
        <p>:</p>
        <div className="flex flex-col justify-center">
          <div className="px-2">{minutes}</div>
          <div className="text-[13px]">Minutes</div>
        </div>
        <p>:</p>
        <div className="flex flex-col justify-center">
          <div className="px-2">{seconds}</div>
          <div className="text-[13px]">Seconds</div>
        </div>
      </div>
    );
  }
};

function Register() {

  return (
    <>
     <section className=" grid bg-black text-white px-6 py-16">

      <div className="flex justify-between ">
        <p className="text-6xl font-bold w-100 text-left">REGISTER NOW</p>
        <p className="text-sm w-52 text-left px-5">Secure your spot at the Next-Gen AI Summit 2052 and join the future of AI innovation.</p>
      </div>

      <div className="relative bg-myBackground rounded-4xl py-15 px-15">
        <p className="text-sm text-left">Early Bird Pricing Ends In:</p>
        
        <Countdown 
        date={Date.now() + 1000 * 60 * 50 * 21 * 12}
        renderer={renderer} 
        />       
        <Vector className="absolute -bottom-0 right-0 w-70 h-70 rounded-br-4xl"/>
      </div>


    </section>
    </>
  )
}

export default Register