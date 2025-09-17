import * as React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Highlights from "./components/Highlights";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import WhyAttend from "./components/WhyAttend";
import Slider from "./components/Slider";
import Register from "./components/Register";
import Tickets from "./components/Tickets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";








function App() {


  return (
    <>
      <div className="bg-black min-h-screen text-white font-syne px-12">
        <Navbar />
        <Hero />
        <Sponsors />
        <Highlights />
        <Agenda />
        <Speakers />
        <WhyAttend />
        <Slider />
        <Register />
        <Tickets />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
