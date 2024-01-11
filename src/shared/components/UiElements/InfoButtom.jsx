import "./InfoButtom.css"
import PurpleButton from "./PurpleButton";
import Para from "./para";
import Icon from "./icon";

function InfoButtom(props){
    return (
        <div className="info-buttom">
            <PurpleButton text={props.btnText}/>
            <Para>{props.paraText} <Icon iconClass={props.iconClass}/></Para>
        </div>

    )
}

export default InfoButtom;

    // <div>
    //                 <PurpleButton text="Apply to drive"/>
    //                 <p>How driver pay works <i class="fa-solid fa-arrow-right"></i></p>
    //             </div>