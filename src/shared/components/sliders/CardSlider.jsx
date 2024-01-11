import {useState} from "react"
import Slider from "react-slick"

import "./CardSlider.css"
import HeadTwo from "../UiElements/HeadTwo"

const infoSlider =[
    {
        title: "Wait & save",
        image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
        extra1: "budget-friendly",
        extra2: "private"
      },
    {
        title: "Wait & save",
        image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
        extra1: "budget-friendly",
        extra2: "private"
      },
    {
        title: "Wait & save",
        image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
        extra1: "budget-friendly",
        extra2: "private"
      },
    {
        title: "Wait & save",
        image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
        extra1: "budget-friendly",
        extra2: "private"
      }
]

const setting = {
    dots: true,
}

function CardSlider(props){
    return(
        <div className="card-slider-container">
            <div className="text-headings">
                <HeadTwo text="Ride. Bike. Scoot. Go bananas."/>
                <p>We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.</p>
            </div>

            <Slider {...setting}>
                {infoSlider.map((infoslide) =>{
                    <div>
                        <h4>{infoslide.title}</h4>
                        <div>
                            <img src={infoslide.image} alt="" />
                        </div>
                    </div>
                })}
            </Slider>

        </div>
    )
}


export default CardSlider;