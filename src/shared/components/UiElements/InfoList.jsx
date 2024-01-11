import "./InfoList.css"
import HeadFour from "./HeadFour";
import Icon from "./icon";
import Para from "./para";


function InfoList(props){
    return(
        <li className="info-list">
        <HeadFour> <Icon iconClass={props.iconClass}/> {props.h4text}</HeadFour>
        <Para>{props.para}</Para>
       </li>
    )
}

export default InfoList;