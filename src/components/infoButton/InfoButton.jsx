import "./InfoButton.scss"
import CustomButton from "../customButton/customButton";

const InfoButton = ({btnText, paraText, iconClass}) =>{
   return (
      <div className="info-button">
         <CustomButton isPurpleBtn>{btnText}</CustomButton>
         <p className=''>
            {paraText}
            <i className={iconClass}></i>
         </p>
      </div>
   )
}

export default InfoButton;