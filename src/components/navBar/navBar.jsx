import './navBar.scss'
import { NavLink } from "react-router-dom";
import CustomButton from "../customButton/customButton";
import Line from '../line';

const NavBar = () => {
   return (
      <div className="nav-links-container d-flex gap-4">
         <CustomButton isPurpleBtn>Get a ride</CustomButton>
         <span className="mobile-menu">
            <i className="fa-solid fa-bars"></i>
         </span>
         <div className="d-flex h-100 align-items-center">
            <Line/>
            <NavLink className='nav-links fw-bold fs-6 px-4' to='/driver' >DRIVER</NavLink>
            <Line/>
            <NavLink className='nav-links fw-bold fs-6 px-4' to='/rider'>RIDER</NavLink>
            <Line/>
            <NavLink className='nav-links fw-bold fs-6 px-4' to='/business'>BUSINESS</NavLink>
            <Line/>
            <NavLink className='nav-links fw-bold fs-6 px-4' to='/login'>LOG IN</NavLink>
            <Line/>
            <NavLink className='nav-links fw-bold fs-6 px-4' to='/signup'>SIGN UP</NavLink>
         </div>
      </div>
   );
}

export default NavBar;
