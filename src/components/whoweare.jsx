import React from 'react';
import {Link} from "react-router-dom";

const Whoweare = () => {
    return ( 
        <div className="whoweare-container" id="whoweare">
            <div className="content">
                <div className="aboutus bluecolored">About us</div>
                <div className="title">Who We Are</div>
                <div className="description">Founded in 1996, Visicom Media quickly became a leading developer and pioneer of internet application technologies. Its solutions help businesses expand their brand awareness and online reach while increasing revenue opportunities.</div>
                <div className="btn-knowmore"><Link to="/about">Know more</Link></div>
            </div>
            <div className="image"></div>
            <div className="image-hexagone"></div>
        </div>
     );
}
 
export default Whoweare;


