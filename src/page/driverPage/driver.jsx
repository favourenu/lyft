// import React from 'react'
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { imageLinks } from "../../assets/imageLinks"

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
                     <div className='buttons d-flex gap-3'>
                        {/* <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                        <CustomButton isWhiteBtn>Sign up to drive</CustomButton> */}
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