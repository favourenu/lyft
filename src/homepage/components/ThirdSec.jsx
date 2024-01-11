import "./ThirdSec.css"
import InfoList from "../../shared/components/UiElements/InfoList"
import SpanText from "../../shared/components/UiElements/SpanText"
import HeadTwo from "../../shared/components/UiElements/headTwo"
import InfoButtom from "../../shared/components/UiElements/InfoButtom"
import Para from "../../shared/components/UiElements/para"

function ThirdSec(props){
    const imgsrc = "https://images.ctfassets.net/q8mvene1wzq4/2R3M8S6ZIA7SXbMsCkxvMI/182aa15b6e4d059f3ac5d2fa530a235e/rider_stylized_text_image__2___1_.png?w=1500&q=60&fm=webp"

    return(
        <div className="thirdsec-container">
             <div className="thirdsec-img-and-texts-part">
            <div className="thirdsec-info-part">
                <SpanText text="RIDE WITH LYFT"/>
                <ul>
                   <HeadTwo text="Ready, set, go in"/>
                   <HeadTwo text="in just a few quick taps"/>
                   <Para className="thirdsec-para">No matter your destination, we'll get you where you need to go</Para>

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

                <InfoButtom btnText="Get a ride"
                paraText="learn more about riding with lyft"
                iconClass="fa-solid fa-arrow-right"
                />

            </div>
            <div className="thirdsec-img-container">
                <img src={imgsrc} alt="" />
            </div>
        </div>
        </div>
    )
}


export default ThirdSec;