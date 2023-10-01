import React from "react";
import './Navigation.css';
import logo from "../../assets/logoSowTheLand.jpg";
import hamburger from "../../assets/hamburger.png";
import {NavLink} from "react-router-dom";

function Navigation() {

    return(
        <div className="header">
            <div>
                <a href="/" className="logo-container">
                    <img src={logo} alt="logo" className="logo"/>
                </a>
            </div>

            <div class="dropdown">
                <button className="dropbtn">
                    <img src={hamburger} alt="hamburger" className="hamburger" />
                </button>
                <div className="dropdown-content">
                    <a href="/login">Login</a>
                    <a href="/home">Home</a>
                    <a href="/garden">Garden</a>
                    <a href="/crops">Crops</a>
                    <a href="/blogs">Blogs</a>
                </div>
            </div>

            <ul className="nav">
                <li>
                    <NavLink to="/login" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/garden" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Garden
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/crops" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Crops
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Blogs
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;