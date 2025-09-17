import React from 'react'
import Facebook from "/src/assets/Facebook.svg?react"
import Linkedin from "/src/assets/Linkedin.svg?react"
import Insta from "/src/assets/Insta.svg?react"
import Youtube from "/src/assets/Youtube.svg?react"





function Footer() {
  return (
    <>
    <footer className="grid grid-cols-2  bg-gray-300 rounded-4xl mt-18">
      
      {/* left section */}
      <div className="flex flex-col">
          <p className="text-black text-left pt-10 pl-16 text-3xl col-span-2 font-bold">Next-Gen AI Summit 2052</p>
        <div className="text-gray-800 text-left py-10 px-16 grid grid-cols-2 grid-rows-5 gap-y-3">
          <p className="text-lg">Agenda</p>
          <p className="text-lg">Terms & Conditions</p>
          <p className="text-lg">Speaker</p>
          <p className="text-lg">Privacy Policy</p>
          <p className="text-lg">Register</p>
          <p className="text-lg">Cookie Policy</p>
          <p className="text-lg">Venue</p>
          <p className="text-lg col-span-2">FAQ</p>
        </div>
        <p className="text-base text-gray-500 col-span-2 px-16 pb-15 self-start">© 2052 Next-Gen AI Summit. All rights reserved.</p>
      </div>

      {/* right section */}
      <div className=" rounded-4xl font-blod bg-myBlue text-left py-10 px-14">
        <p className="text-xl font-bold">STAY UPDATED</p>
        <p className="text-sm mt-2">Subscribe for event updates & exclusive content.</p>
        <input type="text" placeholder='Email' className="w-full mt-7 border-b-1 py-2 focus:outline-none" />
        <button className="mt-7 text-black rounded-full w-40 cursor-pointer px-3 py-3 bg-white">Stay updated</button>
        <p className="text-xl font-bold mt-12">FOLLOW US</p>
          <p className="mt-2 flex gap-4 content-center">
            <Facebook className="w-5"/>
            <Linkedin className="w-5"/>
            <Insta className="w-5"/>
            <Youtube className="w-5"/>
          </p>
      </div>
    </footer>
    </>
  )
}

export default Footer