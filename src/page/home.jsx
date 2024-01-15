import InfoList from "../components/infoList/InfoList"
import Carousel from "../components/carousel/Carousel"
import CardSlider from "../components/cardSlider/CardSlider"
import InfoButton from "../components/infoButton/InfoButton"
import Header from "../components/header/header"
import CustomButton from "../components/customButton/customButton"


const HomePage = () => {
  const imgsrc1 = "https://images.ctfassets.net/q8mvene1wzq4/1V7KEdm8GVuIRx1fHaCovZ/eafdba3bb2b13c73c0f79f2533a4fb6e/home_pinkpaint_hero.jpg?w=2500&q=60&fm=webp"
  const imgsrc2 = "https://images.ctfassets.net/q8mvene1wzq4/2qig3wGIPssGl5C9tS0Lrt/f68bb064f872385abc6e95606cb0794e/home_pinkpaint_driver.jpg?w=1500&q=60&fm=webp"
  const imgsrc3 = "https://images.ctfassets.net/q8mvene1wzq4/2R3M8S6ZIA7SXbMsCkxvMI/182aa15b6e4d059f3ac5d2fa530a235e/rider_stylized_text_image__2___1_.png?w=1500&q=60&fm=webp"
  const imgsrc4 = "https://images.ctfassets.net/q8mvene1wzq4/1H8Zw8AkZvMYqLkWnBjO3f/a2406a01c7a91b37f78c427326006fa8/Lyft_Pink_Image_V3.jpg?w=1500&q=60&fm=webp"


   return(
      <div className=''>
         <Header />

         <main>
            <section>
               <div className="first-sec-container">
                  <div className="firstsec-img-container">
                     <img src={imgsrc1} alt="A lyft ride" />
                  </div>
                  <div className="firstsec-text-and-btn-container">
                     <h1>{"Let's ride"}</h1>
                     <div>
                        <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                        <CustomButton isWhiteBtn>Sign up to drive</CustomButton>
                     </div>
                  </div>
               </div>
            </section>

            <section>
               <div className="sec-sec-container">
                  <div className="sec-sec-img-and-texts-part">
                        <div className="info-part">
                           <span>DRIVE WITH LYFT</span>
                           <ul>
                              <h2 className="head-two">Set your own hours. Earn on your own terms.</h2>
                              <InfoList 
                                 iconClass="fa-solid fa-money-bill"
                                 h4text="Reliable earnings:"
                                 para="Make money,keep you tips, and cash out when you want."
                              />

                              <InfoList 
                                 iconClass="fa-regular fa-clock"
                                 h4text="A flexible schedule:"
                                 para="Be your own boss and drive whenever it works for you."
                              />

                              <InfoList 
                                 iconClass="fa-solid fa-bolt"
                                 h4text="Get paid instantly:"
                                 para="Cash out your earnings whenever you want."
                              />

                           </ul>

                           <InfoButton 
                              btnText="Apply to drive"
                              paraText="How driver pay works"
                              iconClass="fa-solid fa-arrow-right"
                           />

                        </div>
                        <div className="img-container sec-img-style ">
                           <img src={imgsrc2} alt="" />
                           <img className="second-img" src={imgsrc2} alt="" />
                        </div>
                  </div>
                  <Carousel/>
               </div>
            </section>

            <section>
               <div className="thirdsec-container">
                  <div className="thirdsec-img-and-texts-part">
                     <div className="thirdsec-info-part">
                        <span>RIDE WITH LYFT</span>
                        <ul>
                           <h2 className="head-two">Ready, set, go in</h2>
                           <h2 className="head-two">in just a few quick taps</h2>
                           <p className="thirdsec-para">
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
                     <div className="thirdsec-img-container">
                        <img src={imgsrc3} alt="" />
                     </div>
                  </div>
               </div>
            </section>

            <section>
               <div className="fourth-sec-container">
                  <div className="fourth-sec-img-and-texts-part">

                     <div className="fourth-sec-img-container">
                        <img src={imgsrc4} alt="" />
                     </div>

                     <div className="fourth-sec-info-part">
                        <ul>
                           <h2 className="head-two">{"We're rolling out the red carpet"}</h2>
                           
                           <p className="fourthsec-para">Join the new Lyft Pink to enjoy complimentary upgrades to Priority Pickup, exclusive savings, and preferential pricing on Lux, XL, and Preferred rides. Members save an average of $23/month.</p>

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

                        <InfoButton 
                           btnText="Get your 1st month free"
                           paraText="Subject to the Lyft Pink Terms & Conditions and Lyft Terms of Service."
                        />
                     </div>
                  </div>
               </div>
            </section>

            <section>
               <CardSlider/>
            </section>
         </main>
      </div>
   )
}

export default HomePage;