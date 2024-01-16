// import React from 'react'
import './header.scss'
import NavBar from "../navBar/navBar"

const Header = () => {
   return (
      <header className='w-100 d-flex justify-content-between align-items-center'>
         <span className="lyft-logo fs-1 fw-bold">Trip</span> 

         <nav className="main-nav h-100 d-flex justify-content-center">
            <NavBar />
         </nav>
      </header>
   )
}

export default Header