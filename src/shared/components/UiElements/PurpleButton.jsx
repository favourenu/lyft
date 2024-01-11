import "./PurpleButton.css"

function PurpleButton(props){

    return(
    <div>
        <button className="purple-btn">{props.text}</button>
    </div>
    )
}

export default PurpleButton;