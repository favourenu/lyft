import {} from "react-router-dom"

import "./NavList.css"
import NavLinks from "./Navlinks";

function NavList(props){
    return (
        <div className="nav-links-sub-con">
            <NavLinks path="#" text="DRIVER"/>
            <NavLinks path="#" text="RIDER"/>
            <NavLinks path="#" text="BUSINESS"/>
            <NavLinks path="#" text="LOG IN"/>
            <NavLinks path="#" text="SIGN UP"/>
        </div>
    )
}

export default NavList;