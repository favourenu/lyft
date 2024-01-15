import './navBar.scss'
import { NavLink } from "react-router-dom";
import CustomButton from "../customButton/customButton";

const NavBar = () => {
   return (
      <div className="nav-links-container d-flex gap-4">
         <CustomButton isPurpleBtn>Get a ride</CustomButton>
         <span className="mobile-menu">
            <i className="fa-solid fa-bars"></i>
         </span>
         <div className="nav-links-sub-con">
            <NavLink className='nav-links' to='/driver' >DRIVER</NavLink>
            <NavLink className='nav-links' to='/rider'>RIDER</NavLink>
            <NavLink className='nav-links' to='/business'>BUSINESS</NavLink>
            <NavLink className='nav-links' to='/login'>LOG IN</NavLink>
            <NavLink className='nav-links' to='/signup'>SIGN UP</NavLink>
         </div>
      </div>
   );
}

export default NavBar;
