import "./WhiteButton.css"


function WhiteButton(props){
    return(
    <div>
        <button className="white-btn">{props.text}</button>
    </div>
    )
}

export default WhiteButton;