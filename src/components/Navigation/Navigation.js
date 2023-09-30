import React from "react";
import './Navigation.css';
import logo from "../../assets/logoSowTheLand.jpg";
import {NavLink} from "react-router-dom";

function Navigation() {

    return(
        <div className="header">
            <div>
                <img src={logo} alt="logo" className="logo"/>
            </div>

            <button className="dropdown-menu">hamburger menu</button>

            <ul className="nav">
                <li>
                    <NavLink to="/login" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Register/Log-in
                    </NavLink></li>
                <li>
                    <NavLink to="/home" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/garden" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Garden</NavLink>
                </li>
                <li>
                    <NavLink to="/crops" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Crops</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Blogs</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Navigation;