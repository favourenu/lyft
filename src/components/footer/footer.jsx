// import React from 'react'
import { useState } from "react"
import CustomButton from "../customButton/customButton"
import { Link } from "react-router-dom"

const Footer = ({isMobileView}) => {
   const [toggleDriver, setToggleDriver] = useState(false);
   const [toggleRider, setToggleRider] = useState(false);
   const [toggleTrip, setToggleTrip] = useState(false);

   const toggleDriverDropdown = () => {
      isMobileView ? setToggleDriver(!toggleDriver) : null;
   }

   const toggleRiderDropdown = () => {
      isMobileView ? setToggleRider(!toggleRider) : null;
   }

   const toggleTripDropdown = () => {
      isMobileView ? setToggleTrip(!toggleTrip) : null;
   }

   return (
      <footer className='d-flex justify-content-center'>
            <div className={`footer-container d-flex flex-column ${isMobileView ? 'gap-4' : 'mt-3 gap-2'} `}>
               <div className={`d-flex ${isMobileView ? 'flex-column' : ''} gap-2`}>
                  <ul className='d-flex flex-column gap-2'>
                     <p onClick={toggleDriverDropdown} className={`${isMobileView ? 'd-flex justify-content-between align-items-center' : ''} py-3 fs-6 fw-semibold`}>
                        Driver
                        {
                           isMobileView && (
                              <>
                                 {
                                    toggleDriver ? (
                                       <i className="fa-solid fa-angle-up"></i>
                                    ) : (
                                       <i className="fa-solid fa-angle-down"></i>
                                    )
                                 }
                              </>
                           )
                        }
                     </p>
                     {
                        isMobileView ? (
                           <>
                              {
                                 toggleDriver && (
                                    <>
                                       <li>Become a driver</li>
                                       <li>New driver guide</li>
                                       <li>Earnings</li>
                                       <li>Cities</li>
                                       <li>Help</li>
                                       <li>Safety</li>
                                       <li>Application requirement</li>
                                       <li>Express drive</li>
                                       <li>Bonus</li>
                                       <li>Trip rewards</li>
                                       <li>Driving opportunities</li>
                                       <li>Go electric</li>
                                       <li>Insurance</li>
                                       <li>Driver Blog</li>
                                    </>
                                 )
                              }
                           </>
                        ) : (
                           <>
                              <li>Become a driver</li>
                              <li>New driver guide</li>
                              <li>Earnings</li>
                              <li>Cities</li>
                              <li>Help</li>
                              <li>Safety</li>
                              <li>Application requirement</li>
                              <li>Express drive</li>
                              <li>Bonus</li>
                              <li>Trip rewards</li>
                              <li>Driving opportunities</li>
                              <li>Go electric</li>
                              <li>Insurance</li>
                              <li>Driver Blog</li>
                           </>
                        )
                     }
                     
                  </ul>
                  <ul className='d-flex flex-column gap-2'>
                     <p onClick={toggleRiderDropdown} className={`${isMobileView ? 'd-flex justify-content-between align-items-center' : ''} py-3 fs-6 fw-semibold`}>
                        Rider
                        {
                           isMobileView && (
                              <>
                                 {
                                    toggleRider ? (
                                       <i className="fa-solid fa-angle-up"></i>
                                    ) : (
                                       <i className="fa-solid fa-angle-down"></i>
                                    )
                                 }
                              </>
                           )
                        }
                     </p>
                     {
                        isMobileView ? (
                           <>
                              {
                                 toggleRider && (
                                    <>
                                       <li>Sign Up To Ride</li>
                                       <li>Trip Pink</li>
                                       <li>Cities</li>
                                       <li>Help</li>
                                       <li>Safety</li>
                                       <li>Business Profile</li>
                                       <li>Rewards</li>
                                       <li>Events</li>
                                       <li>Airports</li>
                                       <li>Gift Cards</li>
                                       <li>Trip Family</li>
                                       <li>Donate</li>
                                    </>
                                 )
                              }
                           </>
                        ) : (
                           <>
                              <li>Sign Up To Ride</li>
                              <li>Trip Pink</li>
                              <li>Cities</li>
                              <li>Help</li>
                              <li>Safety</li>
                              <li>Business Profile</li>
                              <li>Rewards</li>
                              <li>Events</li>
                              <li>Airports</li>
                              <li>Gift Cards</li>
                              <li>Trip Family</li>
                              <li>Donate</li>
                           </>
                        )
                     }
                  </ul>
                  <ul className='d-flex flex-column gap-2'>
                  <p onClick={toggleTripDropdown} className={`${isMobileView ? 'd-flex justify-content-between align-items-center' : ''} py-3 fs-6 fw-semibold`}>
                        Trip
                        {
                           isMobileView && (
                              <>
                                 {
                                    toggleTrip ? (
                                       <i className="fa-solid fa-angle-up"></i>
                                    ) : (
                                       <i className="fa-solid fa-angle-down"></i>
                                    )
                                 }
                              </>
                           )
                        }
                     </p>
                     
                     {
                        isMobileView ? (
                           <>
                              {
                                 toggleTrip && (
                                    <>
                                       <li>Careers</li>
                                       <li>Trip Up</li>
                                       <li>Business</li>
                                       <li>Healthcare</li>
                                       <li>Bikes</li>
                                       <li>Scooters</li>
                                       <li>Autonomous</li>
                                       <li>Trip Media</li>
                                       <li>Developers</li>
                                       <li>Newsroom</li>
                                       <li>Press</li>
                                       <li>Investor Relations</li>
                                    </>
                                 )
                              }
                           </>
                        ) : (
                           <>
                              <li>Careers</li>
                              <li>Trip Up</li>
                              <li>Business</li>
                              <li>Healthcare</li>
                              <li>Bikes</li>
                              <li>Scooters</li>
                              <li>Autonomous</li>
                              <li>Trip Media</li>
                              <li>Developers</li>
                              <li>Newsroom</li>
                              <li>Press</li>
                              <li>Investor Relations</li>
                           </>
                        )
                     }
                     
                  </ul>
                  <ul className={`d-flex flex-column ${isMobileView ? 'w-100 align-items-center' : 'align-items-start'}  gap-3`}>
                     <CustomButton isWhiteBtn>Trip driver app</CustomButton>
                     <CustomButton isWhiteBtn>Trip rider app</CustomButton>
                  </ul>
               </div>

               <div className='socials-and-terms w-100 d-flex justify-content-end gap-3'>
                  <div className={`d-flex ${isMobileView ? 'flex-wrap' : ''} gap-3`}>
                     <Link>Terms</Link>
                     <Link>Privacy</Link>
                     <Link>Accessibility statement</Link>
                     <Link>Your privacy choices</Link>
                     <span>2024 Trip, Inc</span>
                     <span>CPUD ID No. TC74936374-Y</span>
                  </div>

                  <div>

                  </div>
               </div>
            </div>
         </footer>

   )
}

export default Footer