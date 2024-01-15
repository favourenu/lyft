import "./InfoList.scss"

const InfoList = ({iconClass, h4text, para}) => {
   return(
      <li className="info-list">
         <h4> <i className={iconClass}></i> {h4text}</h4>
         <p>{para}</p>
      </li>
   )
}

export default InfoList;