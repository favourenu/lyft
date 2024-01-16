import InfoList from "../components/infoList/InfoList"
import Carousel from "../components/carousel/Carousel"
import CardSlider from "../components/cardSlider/CardSlider"
import InfoButton from "../components/infoButton/InfoButton"
import Header from "../components/header/header"
import CustomButton from "../components/customButton/customButton"
import { Link } from "react-router-dom"


const HomePage = () => {
   const imgsrc1 = "https://images.ctfassets.net/q8mvene1wzq4/1V7KEdm8GVuIRx1fHaCovZ/eafdba3bb2b13c73c0f79f2533a4fb6e/home_pinkpaint_hero.jpg?w=2500&q=60&fm=webp"
   const imgsrc2 = "https://images.ctfassets.net/q8mvene1wzq4/2qig3wGIPssGl5C9tS0Lrt/f68bb064f872385abc6e95606cb0794e/home_pinkpaint_driver.jpg?w=1500&q=60&fm=webp"
   const imgsrc3 = "https://images.ctfassets.net/q8mvene1wzq4/2R3M8S6ZIA7SXbMsCkxvMI/182aa15b6e4d059f3ac5d2fa530a235e/rider_stylized_text_image__2___1_.png?w=1500&q=60&fm=webp"
   const imgsrc4 = "https://images.ctfassets.net/q8mvene1wzq4/1H8Zw8AkZvMYqLkWnBjO3f/a2406a01c7a91b37f78c427326006fa8/Lyft_Pink_Image_V3.jpg?w=1500&q=60&fm=webp"
   const imgsrc5 = "https://images.ctfassets.net/q8mvene1wzq4/3tEhujwTqY4G4LXZ0yZltF/c544aaffe54de76aacce746d9db34d9b/home_pinkpaint_safety.jpg?w=1500&q=60&fm=webp"
   const imgsrc6 = "https://images.ctfassets.net/q8mvene1wzq4/4sWP94iWODBwQzOY6rFn0N/f34033d586a917eb2dc63209cb23d955/20210717_Lyft_HealthClinic_V4.jpg?w=1500&q=60&fm=webp"
   const imgsrc7 = "https://images.ctfassets.net/q8mvene1wzq4/3WkSLIffcV7OYpUgMpBwJ7/6951147bed1e0844f7eeeb9785cf84ba/Lyft_Business_Pink.svg?w=&q=60&fm="

   return(
      <div className=''>
         <Header />

         <main className='d-flex flex-column'>
            <section className="first-section d-flex justify-content-center gap-4">
               <div className="first-section-img">
                  <img src={imgsrc1} className='w-100' alt="A lyft ride" />
               </div>
               <div className="hero d-flex flex-column justify-content-center gap-4">
                  <h1 className=''>{"Let's ride"}</h1>
                  <div className='buttons d-flex gap-3'>
                     <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                     <CustomButton isWhiteBtn>Sign up to drive</CustomButton>
                  </div>
               </div>
            </section>

            <section className="second-section">
               <div className="info-container d-flex justify-content-center gap-4">
                  <div className="section-info d-flex flex-column gap-3">
                     <span className='fs-6 fw-semibold'>DRIVE WITH LYFT</span>
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
                     <img src={imgsrc2} alt="" />
                  </div>
               </div>
               <Carousel/>
            </section>

            <section className="third-section">
               <div className="info-container d-flex justify-content-center gap-4">
                  <div className="section-info d-flex flex-column gap-3">
                     <span className='fs-6 fw-semibold'>RIDE WITH LYFT</span>
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
                     <img src={imgsrc3} alt="" />
                  </div>
               </div>


               <div className="info-container d-flex justify-content-center gap-4">
                  <div className="image-container d-flex align-items-start justify-content-start">
                     <img src={imgsrc4} alt="" />
                  </div>

                  <div className="section-info d-flex flex-column gap-3">
                     <ul className='d-flex flex-column gap-4'>
                        <h2 className="fw-medium">{"We're rolling out the red carpet"}</h2>
                        <p className="">Join the new Lyft Pink to enjoy complimentary upgrades to Priority Pickup, exclusive savings, and preferential pricing on Lux, XL, and Preferred rides. Members save an average of $23/month.</p>

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
                           Subject to the <Link>Lyft Pink Terms & Conditions</Link> and <Link>Lyft Terms of Service</Link>.
                        </span>
                     </div>
                  </div>
               </div>

               <div className='info-container mt-5 pt-5'>
                  <div className="slider-heading">
                        <h2 className=''>Ride. Bike. Scoot. Go bananas.</h2>
                        <p>{"We've got options to get you where you're going. Choose a ride* that suits your mood and budget."}</p>
                  </div>

                  <CardSlider/>
               </div>

            </section>

            <section className="fourth-section">
               <div className="info-container d-flex justify-content-center gap-4">
                  <div className="image-container d-flex align-items-center justify-content-start">
                     <img src={imgsrc5} alt="" />
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

            <section className="fifth-section">
               <div className="info-container d-flex justify-content-center gap-4">
                  <div className="section-info d-flex flex-column gap-3">
                     <ul className='d-flex flex-column gap-4'>
                        <h2 className="fw-medium">Making millions of rides more accessible</h2>
                        <p className="">
                           {"A ride is more than just a ride. It's a gateway to opportunities and jobs. A connection to community. And access to essentials like groceries, healthcare, and polling places. Our Lyft Up initiative makes rides more accessible for millions, and helps bring communities even closer."}
                        </p>
                     </ul>
                     <div className='d-flex gap-3'>
                        <div className=''>
                           <Link className="fw-semibold">learn about our Lyft Up programs</Link>
                        </div>
                        <div>
                           <i className='fa-solid fa-arrow-right'></i> 
                        </div>
                     </div>
                  </div>

                  <div className="image-container d-flex align-items-end justify-content-end">
                     <img src={imgsrc6} alt="" />
                  </div>
               </div>
            </section>

            <section className="sixth-section">
               <div className="info-container d-flex flex-column justify-content-center align-items-center gap-3">
                  <img src={imgsrc7} />

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

         <footer className=''>
            <div className='footer-container mt-3 d-flex flex-column gap-2'>
               <div className='d-flex gap-2'>
                  <ul className='d-flex flex-column gap-2'>
                     <p className='py-3 fs-6 fw-semibold'>Driver</p>
                     
                     <li>Become a driver</li>
                     <li>New driver guide</li>
                     <li>Earnings</li>
                     <li>Cities</li>
                     <li>Help</li>
                     <li>Safety</li>
                     <li>Application requirement</li>
                     <li>Express drive</li>
                     <li>Bonus</li>
                     <li>Lyft rewards</li>
                     <li>Driving opportunities</li>
                     <li>Go electric</li>
                     <li>Insurance</li>
                     <li>Driver Blog</li>
                  </ul>
                  <ul className='d-flex flex-column gap-2'>
                     <p className='py-3 fs-6 fw-semibold'>Rider</p>

                     <li>Sign Up To Ride</li>
                     <li>Lyft Pink</li>
                     <li>Cities</li>
                     <li>Help</li>
                     <li>Safety</li>
                     <li>Business Profile</li>
                     <li>Rewards</li>
                     <li>Events</li>
                     <li>Airports</li>
                     <li>Gift Cards</li>
                     <li>Lyft Family</li>
                     <li>Donate</li>
                  </ul>
                  <ul className='d-flex flex-column gap-2'>
                     <p className='py-3 fs-6 fw-semibold'>Lyft</p>

                     <li>Careers</li>
                     <li>Lyft Up</li>
                     <li>Business</li>
                     <li>Healthcare</li>
                     <li>Bikes</li>
                     <li>Scooters</li>
                     <li>Autonomous</li>
                     <li>Lyft Media</li>
                     <li>Developers</li>
                     <li>Newsroom</li>
                     <li>Press</li>
                     <li>Investor Relations</li>
                  </ul>
                  <ul className='d-flex flex-column align-items-start gap-3'>
                     <CustomButton isWhiteBtn>Lyft driver app</CustomButton>
                     <CustomButton isWhiteBtn>Lyft rider app</CustomButton>
                  </ul>
               </div>

               <div className='socials-and-terms w-100 d-flex justify-content-end gap-3'>
                  <div className='d-flex gap-3'>
                     <Link>Terms</Link>
                     <Link>Privacy</Link>
                     <Link>Accessibility statement</Link>
                     <Link>Your privacy choices</Link>
                     <span>2024 Lyft, Inc</span>
                     <span>CPUD ID No. TC74936374-Y</span>
                  </div>

                  <div>

                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default HomePage;