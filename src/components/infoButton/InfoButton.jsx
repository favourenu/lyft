import CustomButton from "../customButton/customButton";

const InfoButton = ({btnText, paraText, iconClass}) =>{
   return (
      <div className="info-button d-flex align-items-center gap-4">
         <CustomButton isPurpleBtn>{btnText}</CustomButton>
         <div className='d-flex align-items-center gap-3 fs-5 fw-medium'>
            {paraText}
            <i className={`${iconClass} mt-1`}></i>
         </div>
      </div>
   )
}

export default InfoButton;