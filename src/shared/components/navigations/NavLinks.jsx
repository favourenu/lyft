import {NavLink} from "react-router-dom"

import "./NavLinks.css"


function NavLinks(props){
    return(
        <div className="nav-links">
            <NavLink to={props.path}>{props.text}</NavLink>
                        
        </div>
    )
}

export default NavLinks;