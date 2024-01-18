// import React from 'react'
import './header.scss'
import CustomButton from '../customButton/customButton'
import Line from '../line'
import { Link } from 'react-router-dom'

const Header = ({isHome, isDriver, isEarning, isCities, isRider}) => {
   return (
      <header className='w-100 d-flex justify-content-center'>
         <div className='header-container d-flex justify-content-between align-items-center gap-5'>
            <span className="lyft-logo fs-1 fw-bold">Trip</span> 

            <nav 
               className={`
                  main-nav w-100 h-100 d-flex
                  ${isDriver ? '' : 'justify-content-end'} 
               `}
            >
               <div 
                  className={`
                     d-flex gap-4 align-items-center
                     ${isDriver ? 'w-100' : ''}
                  `}
               >
                  {/* <span className="mobile-menu">
                     <i className="fa-solid fa-bars"></i>
                  </span> */}
                  {
                     isHome && (
                        <CustomButton isPurpleBtn>Get a ride</CustomButton>
                     )
                  }
                  <div className="links-container d-flex w-100 h-100 align-items-center">
                     <Line/>
                     {
                        isDriver ? (
                           <div className='sub-links-container d-flex align-items-center h-100 w-100'>
                              <Link className='nav-links' to='/driver' >DRIVER</Link>
                              <Link className={`sub-links ${isEarning ? 'active-sub-link' : ''}`} to={'/driver/pay'}>Earnings</Link>
                              <Link className={`sub-links ${isCities ? 'active-sub-link' : ''}`} to={'/driver/cities'}>Cities</Link>
                              <Link className='sub-links' to={''}>Help</Link>

                              {
                                 isEarning && (
                                    <CustomButton isPurpleBtn>Become a driver</CustomButton>
                                 )
                              }
                           </div>
                        ) : (
                           <Link className='nav-links' to='/driver' >DRIVER</Link>
                        )
                     }
                     <Line/>
                     {
                        isRider ? (
                           <div className='sub-links-container margin-right d-flex align-items-center h-100'>
                              <Link className='nav-links' to='/rider'>RIDER</Link>
                              <Link className={`sub-links ${isCities ? 'active-sub-link' : ''}`} to={'/rider/cities'}>Cities</Link>
                              <Link className='sub-links'>For Business</Link>
                              <Link className='sub-links'>Help</Link>

                              <CustomButton isPurpleBtn>Get a ride</CustomButton>
                           </div>
                        ) : (
                           <Link className='nav-links' to='/rider'>RIDER</Link>
                        )
                     }
                     <Line/>
                     <Link className='nav-links' to='/business'>BUSINESS</Link>
                     <Line/>
                     <Link className='nav-links' to='/login'>LOG IN</Link>
                     <Line/>
                     <Link className='nav-links' to='/signup'>SIGN UP</Link>
                  </div>
               </div>
            </nav>
         </div>
      </header>
   )
}

export default Header