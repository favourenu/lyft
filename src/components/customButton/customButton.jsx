// import React from 'react'
import './customButton.scss'

const CustomButton = ({children, isWhiteBtn, isPurpleBtn}) => {
   const buttonClassName = `
      custom-btn
      ${isWhiteBtn ? 'white-btn' : ''}
      ${isPurpleBtn ? 'purple-btn' : ''}
   `;

   return (
      <button
         className={buttonClassName}
         // onClick={handleClick}
      >
         {children}
      </button>
   );
}

export default CustomButton;