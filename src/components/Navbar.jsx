import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="flex justify-between items-center py-6 text-sky-50">
      <div className="font-bold text-4xl">nexus</div>
      <ul className="flex gap-5 text-sm font-medium">
        <li><a href="#home" className="px-4 py-2 hover:border-1 border-white rounded-4xl">Home</a></li>
        <li><a href="#schedule" className="px-4 py-2 hover:border-1 border-white rounded-4xl">Schedule</a></li>
        <li><a href="#speakers" className="px-4 py-2 box-border hover:border-1 border-white rounded-4xl">Speakers</a></li>
        <li><a href="#tickets" className="px-4 py-2 box-border hover:border-1 border-white rounded-4xl">Tickets</a></li>
        <li><a href="#venue" className="px-4 py-2 box-border hover:border-1 border-white rounded-4xl">Venue</a></li>
        <li><a href="#sponsors" className="px-4 py-2 box-border hover:border-1 border-white rounded-4xl">Sponsors</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar