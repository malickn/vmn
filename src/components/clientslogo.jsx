import React from 'react';
import {Animated} from "react-animated-css";

const Clientslogo = () => {

    const hide = {
        display: 'none'
    }
    return ( 
        <div className="logos" style={hide}>
            <div className="cl_logo lavasoft">
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="image"></div>
                </Animated>
            </div>
            <div className="cl_logo verizon">
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                    <div className="image"></div>
                </Animated>
            </div>
            <div className="cl_logo comcast">
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={3000} animationOutDuration={3000} isVisible={true}>
                    <div className="image"></div>
                </Animated>
            </div>
            <div className="cl_logo bt">
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={4000} animationOutDuration={4000} isVisible={true}>
                    <div className="image"></div>
                </Animated>
            </div>
            <div className="cl_logo timewarner">
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={4000} animationOutDuration={5000} isVisible={true}>
                    <div className="image"></div>
                </Animated>
            </div>
            <div className="cl_logo panda">
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={4000} animationOutDuration={6000} isVisible={true}>
                    <div className="image"></div>
                </Animated>
            </div>
            <div className="cl_logo yahoo">
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={4000} animationOutDuration={7000} isVisible={true}>
                    <div className="image"></div>
                </Animated>
            </div>
            <div className="cl_logo vipkid">
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={4000} animationOutDuration={8000} isVisible={true}>
                    <div className="image"></div>
                </Animated>
            </div>
        </div>
     );
}
 
export default Clientslogo;


