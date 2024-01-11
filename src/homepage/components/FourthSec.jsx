import "./FourthSec.css"
import InfoList from "../../shared/components/UiElements/InfoList"
import SpanText from "../../shared/components/UiElements/SpanText"
import HeadTwo from "../../shared/components/UiElements/headTwo"
import InfoButtom from "../../shared/components/UiElements/InfoButtom"
import Para from "../../shared/components/UiElements/para"

function FourthSec(props){
    const imgsrc = "https://images.ctfassets.net/q8mvene1wzq4/1H8Zw8AkZvMYqLkWnBjO3f/a2406a01c7a91b37f78c427326006fa8/Lyft_Pink_Image_V3.jpg?w=1500&q=60&fm=webp"
    return(
        <div className="fourth-sec-container">
            <div className="fourth-sec-img-and-texts-part">

            <div className="fourth-sec-img-container">
                <img src={imgsrc} alt="" />
            </div>

            <div className="fourth-sec-info-part">
                <ul>
                   <HeadTwo text="We’re rolling out the red carpet"/>
                   <Para className="fourthsec-para">Join the new Lyft Pink to enjoy complimentary upgrades to Priority Pickup, exclusive savings, and preferential pricing on Lux, XL, and Preferred rides. Members save an average of $23/month.</Para>

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

                <InfoButtom btnText="Get your 1st month free"
                paraText="Subject to the Lyft Pink Terms & Conditions and Lyft Terms of Service."
                />
            </div>
        </div>
        </div>
    )
}

export default FourthSec;

{/* `<i class="fa-solid fa-utensils"></i>` */}