// import React from 'react'
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { imageLinks } from "../../assets/imageLinks"
import CustomButton from "../../components/customButton/customButton";
import { Link } from "react-router-dom";

const Driver = () => {
   const driverImages = imageLinks.driver;


   return (
      <div>
         <Header 
            isDriver
         />

         <main className='d-flex flex-column'>
            <section className="first-section d-flex justify-content-center">
               <div className='first-section-container d-flex align-self-center justify-content-center  gap-4'>
                  <div className="first-section-img">
                     <img src={driverImages.img1} className='w-100' alt="A trip ride" />
                  </div>
                  <div className="hero d-flex flex-column justify-content-center gap-4">
                     <h1 className=''>Make every day payday</h1>
                     <div className='d-flex flex-column gap-4'>
                        <input 
                           className='w-75'
                           type='phone' 
                           placeholder='Enter mobile phone number*' 

                        />
                        <span className='info-text'>
                           By providing your phone number and clicking “Apply to drive”, you consent to receive text messages from Lyft. Text messages may be autodialed, and data rates may apply. The frequency of text messages varies. You may text STOP to cancel any time.
                        </span>
                        <div className='d-flex align-items-center gap-5'>
                           <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                           <div className='d-flex align-items-center gap-3'>
                              <input type='checkbox' />
                              <label>{"I agree to Trip's Terms of services"}</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="second-section d-flex justify-content-center">
               <div className='section-container d-flex flex-column align-self-center justify-content-center gap-5'>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                     <div className="section-info d-flex flex-column gap-3">
                        <h2>Cash out right away</h2>
                        <p className="">
                           Want your cash fast? Get paid in just around an hour or two with Express Pay. Or sign up for a <Link>Trip Direct</Link> debit card for instant access to earnings, after every ride.
                        </p>
                        <div className='d-flex gap-3'>
                           <p className="fw-semibold">Read all about driver pay</p>
                           <i className='fa-solid fa-arrow-right'></i> 
                        </div>
                     </div>
                     <div className="rider-image-container d-flex align-items-end justify-content-end">
                        <img src={driverImages.img2} alt="" />
                     </div>
                  </div>
               </div>
            </section>

         </main>
   
         <Footer />
      </div>
   )
}

export default Driver