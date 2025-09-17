import React from 'react'
import Facebook from "/src/assets/Facebook.svg?react"
import Linkedin from "/src/assets/Linkedin.svg?react"
import Insta from "/src/assets/Insta.svg?react"
import Youtube from "/src/assets/Youtube.svg?react"
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const AnyReactComponent = ({ text }) => <div className="text-base text-black">{text}</div>;

function Contact() {

  const defaultProps = {
    center: {
      lat: 38.909236,
      lng: -77.017230
    },
    zoom:18
  };


const Marker = ({ text }) => {
  return (
    <div className="flex flex-col items-center">
      {/* icon */}
      <FontAwesomeIcon icon={faLocationDot} className="text-3xl text-red-700"/>
      {/* text */}
      {text && <span className="text-xs mt-1 text-black font-bold">{text}</span>}
    </div>
  );
};




  return (
    <>
    <section className="grid grid-cols-2 gap-5 py-18 px-15 bg-myBackground rounded-4xl">
      {/* first section */}
      <div className="rounded-4xl grid gap-10">
        <div className="w-90">
          <p className="text-4xl text-left font-bold mb-5">We’re here to connect and assist you</p>
          <p className="text-sm text-left">Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-4 text-left">
          <p className="text-lg font-bold">CONTACT US</p>
          <p className="text-lg font-bold">EVENT LOCATION</p>
          <p className="text-sm -mt-3 italic">+31 20 123 4567</p>
          <p className="text-sm -mt-3 italicsyne">Horizon Convention Center Amsterdam, Netherlands</p>
          <p className="text-lg font-bold mt-5">EMAIL</p>
          <p className="text-lg font-bold mt-4">FOLLOW US</p>
          <p className="text-sm mt-2">info@nexus.com</p>
          <p className="mt-2 flex gap-2 content-center">
            <Facebook className="w-5 cursor-pointer" href="https://www.varzesh3.com"/>
            <Linkedin className="w-5 cursor-pointer"/>
            <Insta className="w-5 cursor-pointer"/>
            <Youtube className="w-5 cursor-pointer"/>
          </p>
        </div>
      </div>

      {/* secont section */}
      <div className="bg-gray-300 rounded-4xl text-black py-12 px-10">
        <div className="w-90">
          <p className="text-2xl text-left font-bold mb-5">GET IN TOUCH</p>
          <p className="text- text-left w-70">Reach out with inquiries about tickets, partnerships, or event details.</p>
        </div>

      </div>
      {/* map section */}
      <div className="col-span-2 h-100 rounded-4xl mt-15 overflow-hidden">
        <div className="w-full h-full">
          <GoogleMapReact
            
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            
          >
          
            <Marker lat={38.909236} lng={-77.017230} text="Nexus" />
          </GoogleMapReact>
        </div>
      </div>

    </section>
    </>
  )
}

export default Contact