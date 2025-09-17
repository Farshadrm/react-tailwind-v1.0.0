import React from 'react'
import AmazonLogo from "../assets/AmazonLogo.svg?react"
import DribbleLogo from "../assets/DribbleLogo.svg?react"
import HubspotLogo from "../assets/HubspotLogo.svg?react"
import NotionLogo from "../assets/NotionLogo.svg?react"
import GumroadLogo from "../assets/GumroadLogo.svg?react"


function Sponsors() {
  return (
    <>
    <section className="bg-black py-12 ">
      <div className="grid grid-cols-5">
      <AmazonLogo className="place-self-center" />
      <DribbleLogo className="place-self-center" />
      <HubspotLogo className="place-self-center" />
      <NotionLogo className="place-self-center" />
      <GumroadLogo className="place-self-center" />
      </div>
    </section>
    </>
  )
}

export default Sponsors