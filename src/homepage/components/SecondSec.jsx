import "./SecondSec.css"

import PurpleButton from "../../shared/components/UiElements/PurpleButton"
import InfoList from "../../shared/components/UiElements/InfoList"
import SpanText from "../../shared/components/UiElements/SpanText"
import HeadTwo from "../../shared/components/UiElements/headTwo"
import InfoButtom from "../../shared/components/UiElements/InfoButtom"
import Carousel from "../../shared/components/sliders/Carousel"


function SecondSec(props){
    const imgsrc = "https://images.ctfassets.net/q8mvene1wzq4/2qig3wGIPssGl5C9tS0Lrt/f68bb064f872385abc6e95606cb0794e/home_pinkpaint_driver.jpg?w=1500&q=60&fm=webp"

    return(
        <div className="sec-sec-container">
        <div className="sec-sec-img-and-texts-part">
            <div className="info-part">
                <SpanText text="DRIVE WITH LYFT"/>
                <ul>
                   <HeadTwo text="Set your own hours. Earn on your own terms."/>
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

                <InfoButtom btnText="Apply to drive"
                paraText="How driver pay works"
                iconClass="fa-solid fa-arrow-right"
                />

            </div>
            <div className="img-container sec-img-style ">
                <img src={imgsrc} alt="" />
                <img className="second-img" src={imgsrc} alt="" />
            </div>
        </div>
        <Carousel/>
    </div>
    )
}

export default SecondSec