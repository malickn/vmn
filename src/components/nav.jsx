import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props) => {

    const logo = (props.logo === "dark" ? 'logo dark' : 'logo') ;
    const hamburgerColor = (props.logo ? 'animated-icon2 about' : 'animated-icon2') ;
    const navbarBrand = (props.logo === "dark" ? 'navbar-brand-about' : 'navbar-brand') ;

    return ( 
        <nav className="navbar">
            <Link to="/" className={navbarBrand}>
                <div className={logo}></div>
            </Link>
            <button className="second-button" type="button">
                <div className={hamburgerColor}><span></span><span></span><span></span><span></span></div>
            </button>
        </nav>
     );
}
 
export default Nav;