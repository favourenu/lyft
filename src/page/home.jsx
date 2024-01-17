import InfoList from "../components/infoList/InfoList"
import Carousel from "../components/carousel/Carousel"
import CardSlider from "../components/cardSlider/CardSlider"
import InfoButton from "../components/infoButton/InfoButton"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import CustomButton from "../components/customButton/customButton"
import { Link } from "react-router-dom"
import { imageLinks } from "../assets/imageLinks"


const HomePage = () => {
   const homeImages = imageLinks.home

   return(
      <div className=''>
         <Header 
            isHome
         />

         <main className='d-flex flex-column'>
            <section className="first-section d-flex justify-content-center">
               <div className='first-section-container d-flex align-self-center justify-content-center  gap-4'>
                  <div className="first-section-img">
                     <img src={homeImages.img1} className='w-100' alt="A trip ride" />
                  </div>
                  <div className="hero d-flex flex-column justify-content-center gap-4">
                     <h1 className=''>{"Let's ride"}</h1>
                     <div className='buttons d-flex gap-3'>
                        <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                        <CustomButton isWhiteBtn>Sign up to drive</CustomButton>
                     </div>
                  </div>
               </div>
            </section>

            <section className="second-section d-flex justify-content-center">
               <div className='section-container d-flex flex-column align-self-center justify-content-center gap-5'>
                  <div className="d-flex justify-content-center gap-4">
                     <div className="section-info d-flex flex-column gap-3">
                        <span className='fs-6 fw-semibold'>DRIVE WITH TRIP</span>
                        <ul className='d-flex flex-column gap-4'>
                           <h2 className="fw-medium">Set your own hours. Earn on your own terms.</h2>
                           <InfoList 
                              iconClass="fa-solid fa-money-bill"
                              h4text="Reliable earnings: "
                              para="Make money,keep you tips, and cash out when you want."
                           />

                           <InfoList 
                              iconClass="fa-regular fa-clock"
                              h4text="A flexible schedule: "
                              para="Be your own boss and drive whenever it works for you."
                           />

                           <InfoList 
                              iconClass="fa-solid fa-bolt"
                              h4text="Get paid instantly: "
                              para="Cash out your earnings whenever you want."
                           />

                        </ul>

                        <InfoButton 
                           btnText="Apply to drive"
                           paraText="How driver pay works"
                           iconClass="fa-solid fa-arrow-right"
                        />

                     </div>
                     <div className="image-container d-flex align-items-end justify-content-end">
                        <img src={homeImages.img2} alt="" />
                     </div>
                  </div>
                  <Carousel/>
               </div>
            </section>

            <section className="third-section d-flex justify-content-center">
               <div className='section-container d-flex flex-column align-self-center'>
                  <div className="d-flex justify-content-center gap-4">
                     <div className="section-info d-flex flex-column gap-3">
                        <span className='fs-6 fw-semibold'>RIDE WITH TRIP</span>
                        <ul className='d-flex flex-column gap-4'>
                           <h2 className="fw-medium">Ready, set, go in just a few quick taps</h2>
                           <p className="">
                              {"No matter your destination, we'll get you where you need to go"}
                           </p>

                           <InfoList 
                              iconClass="fa-solid fa-person-falling"
                              h4text="Get a reliable ride in minutes"
                           />

                           <InfoList 
                              iconClass="fa-regular fa-calendar"
                              h4text="Schedule your ride in advance"
                           />

                           <InfoList 
                              iconClass="fa-solid fa-bolt"
                              h4text="Earn rewards on every ride"
                           />
                        </ul>

                        <InfoButton 
                           btnText="Get a ride"
                           paraText="learn more about riding with lyft"
                           iconClass="fa-solid fa-arrow-right"
                        />
                     </div>
                     <div className="image-container d-flex align-items-end justify-content-end">
                        <img src={homeImages.img3} alt="" />
                     </div>
                  </div>

                  <div className="d-flex justify-content-center gap-4">
                     <div className="image-container d-flex align-items-start justify-content-start">
                        <img src={homeImages.img4} alt="" />
                     </div>

                     <div className="section-info d-flex flex-column gap-5">
                        <ul className='d-flex flex-column gap-4'>
                           <h2 className="fw-medium">{"We're rolling out the red carpet"}</h2>
                           <p className="">Join the new Trip Pink to enjoy complimentary upgrades to Priority Pickup, exclusive savings, and preferential pricing on Lux, XL, and Preferred rides. Members save an average of $23/month.</p>

                           <InfoList 
                              iconClass="fa-solid fa-bolt"
                              h4text="Free Priority Pickup upgrades"
                              para="Get picked up faster and save $3-4 per ride on average"
                           />

                           <InfoList 
                              iconClass="fa-regular fa-calendar"
                              h4text="Exclusive savings"
                              para="Enjoy 5% off on Extra Comfort and Lyft XL rides"
                           />

                           <InfoList 
                              iconClass="fa-solid fa-bolt"
                              h4text="Cancellation forgiveness"
                              para="Cancel up to 3x/month for free"
                           />

                           <InfoList 
                              iconClass="fa-solid fa-utensils"
                              h4text="Free Grubhub+ for a year"
                              para="$0 restaurant delivery fees"
                           />
                        </ul>
                        <div className='d-flex flex-column gap-3'>
                           <div className='w-50'>
                              <CustomButton isPurpleBtn>Get your 1st month free</CustomButton>
                           </div>
                           <span className='subject-terms'>
                              Subject to the <Link>Trip Pink Terms & Conditions</Link> and <Link>Trip Terms of Service</Link>.
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className='mt-5 pt-5'>
                     <div className="slider-heading">
                           <h2 className=''>Ride. Bike. Scoot. Go bananas.</h2>
                           <p>{"We've got options to get you where you're going. Choose a ride* that suits your mood and budget."}</p>
                     </div>

                     <CardSlider/>
                  </div>

               </div>
            </section>

            <section className="fourth-section d-flex justify-content-center">
               <div className='section-container d-flex justify-content-center gap-4'>
                  <div className="image-container d-flex align-items-center justify-content-start">
                     <img src={homeImages.img5} alt="" />
                  </div>

                  <div className="section-info d-flex flex-column gap-3">
                     <span className='fs-6 fw-semibold'>DRIVE SAFELY</span>
                     <ul className='d-flex flex-column gap-4'>
                        <h2 className="fw-medium">Your safety comes first. Always.</h2>
                        <p className="">{"We look out for you before, during, and after every single ride. And we monitor rides to help you get where you need to go. If you ever need it, we're standing by, ready to help."}</p>
                     </ul>
                     <InfoButton 
                        btnText="Learn about safety"
                        paraText="Community guidelines"
                        iconClass="fa-solid fa-arrow-right fw-semi-bold"
                     />
                  </div>
               </div>
            </section>

            <section className="fifth-section d-flex justify-content-center">
               <div className='section-container d-flex justify-content-center gap-4'>
                  <div className="section-info d-flex flex-column gap-3">
                     <ul className='d-flex flex-column gap-4'>
                        <h2 className="fw-medium">Making millions of rides more accessible</h2>
                        <p className="">
                           {"A ride is more than just a ride. It's a gateway to opportunities and jobs. A connection to community. And access to essentials like groceries, healthcare, and polling places. Our Trip Up initiative makes rides more accessible for millions, and helps bring communities even closer."}
                        </p>
                     </ul>
                     <div className='d-flex gap-3'>
                        <div className=''>
                           <Link className="fw-semibold">Learn about our Trip Up programs</Link>
                        </div>
                        <div>
                           <i className='fa-solid fa-arrow-right'></i> 
                        </div>
                     </div>
                  </div>

                  <div className="image-container d-flex align-items-end justify-content-end">
                     <img src={homeImages.img6} alt="" />
                  </div>
               </div>
            </section>

            <section className="last-section d-flex justify-content-center">
               <div className='section-container align-self-center d-flex flex-column justify-content-center align-items-center gap-3'>
                  <img className='lyft-business' src={homeImages.img7} />

                  <h2 className='d-flex flex-column align-items-center gap-3'>
                     We help move
                     <span>business</span>
                  </h2>

                  <div className='d-flex flex-column align-items-center gap-5'>
                     <p className="text-center">{"From affordable transportation solutions to effortless expensing, we'll help drive your business forward by getting your people where they need to go."}</p>

                     <CustomButton isNoBorderBtn>Learn more</CustomButton>
                  </div>

               </div>
            </section>
         </main>

         <Footer />
      </div>
   )
}

export default HomePage;