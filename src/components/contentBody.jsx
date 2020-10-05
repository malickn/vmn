import React from 'react';
import Clientslogo from './clientslogo';
import Products from './products';
import Whatwedo from './whatwedo';
import Whoweare from './whoweare';

const ContentBody = (props) => {
    
    const hideAboutContainer = {
        display : (props.page === 'about') ? "none" : ''
    }

    const hideHomeContainer = {
        display : (props.page === 'home') ? "none" : ''
    }

    const hideClientAboutContainer = {
        display : (props.page === 'about') ? "none" : ''
    }

    const hideClientHomeContainer = {
        display : (props.page === 'home') ? "none" : ''
    }

    const hideQuickFacts = {
        display : (props.page === 'home') ? "none" : ''
    }

    return ( 
        <>
        <section className="container" style={hideAboutContainer}>
            <div className="bg-top-right"></div>
            <Whatwedo />
            <div className="bg-left-what-to-do"></div>
            <Products />
        </section>
        <section className="container-about" style={hideHomeContainer}>
            <div className="whoweare-container-about" id="whoweare-about">
                <div className="image"></div>
                <div className="content">
                    <div className="aboutus bluecolored">About us</div>
                    <div className="title">Who We Are</div>
                    <div className="description">
                        <div className="item">
                        Founded in 1996, Visicom Media quickly became a leading developer and pioneer of internet application technologies. Its solutions help businesses expand their brand awareness and online reach while increasing revenue opportunities.
                        </div>

                        <div className="item">
                        Over the years, with our vast array of internet application solutions, Visicom has partnered with some of the largest brands in the world of distribution, development, and marketing.
                        </div>

                        <div className="item">
                        Visicom Media strives to continue to create highly engaging and innovative tools, platforms, and software applications that enhance user experience and increase revenue opportunities.
                        </div>
                    </div>
                </div>
                <div className="mission_statement">
                    <div className="title">Mission Statement</div>
                    <div className="description">
                        <div className="item">
                        Founded in 1996, Visicom Media quickly became a leading developer and pioneer of internet application technologies. Its solutions help businesses expand their brand awareness and online reach while increasing revenue opportunities. Founded in 1996, Visicom Media quickly became a leading developer and pioneer of internet application technologies. Its solutions help businesses expand their brand awareness and online reach while increasing revenue opportunities.
                        </div>

                        <div className="item">
                        Over the years, with our vast array of internet application solutions, Visicom has partnered with some of the largest brands in the world of distribution, development, and marketing. Over the years, with our vast array of internet application solutions, Visicom has partnered with some of the largest brands in the world of distribution, development, and marketing.
                        </div>
                    </div>
                </div>
                <div className="value_statement">
                    <div className="title">Value Statement</div>
                    <div className="description">Our work will be guided by our beliefs and commitments to:</div>
                </div>
                <div className="value_statement_logos">
                    <div className="logo">
                        <div className="image respect"></div>
                        <div className="title">Respect</div>
                        <div className="description">We value diversity and are committed to equality.</div>
                    </div>
                    <div className="logo">
                        <div className="image recognition"></div>
                        <div className="title">Recognition</div>
                        <div className="description">We treasure the contribution of our employees for the work they do and the difference they make to the company.</div>
                    </div>
                    <div className="logo">
                        <div className="image quality"></div>
                        <div className="title">Quality</div>
                        <div className="description">We strive for small and ongoing positive changes that can create major improvements.</div>
                    </div>
                    <div className="logo">
                        <div className="image cooperation"></div>
                        <div className="title">Cooperation</div>
                        <div className="description">We are committed to a culture of teamwork and collaboration.</div>
                    </div>
                </div>
            </div>
        </section>
        <div id="our_clients">
        <section className="clients" style={hideClientAboutContainer}>
            <div className="header">
                <div className="title">A SELECTION OF OUR CLIENTS</div>
                <div className="line"></div>
            </div>
            <div className="contents">
                <Clientslogo />
            </div>
            <Whoweare />
        </section>
        <section className="about-clients" style={hideClientHomeContainer}>
        <Clientslogo />
        </section>
        </div>
        <section className="quickfacts" style={hideQuickFacts}>
            <div className="head bluecolored">INFO</div>
            <div className="title">Quick Facts</div>
            <div className="facts">
                <div className="fact">
                    <div className="image one"></div>
                    <div className="separator"></div>
                    <div className="shortdescription">Eading developer and pioneer of Internet application...</div>
                    <div className="description">We treasure the contribution of our employees for the work they do and the difference they make to the company.</div>
                </div>
                <div className="fact">
                    <div className="image two"></div>
                    <div className="separator"></div>
                    <div className="shortdescription">Eading developer and pioneer of Internet application...</div>
                    <div className="description">We treasure the contribution of our employees for the work they do and the difference they make to the company.</div>
                </div>
                <div className="fact">
                    <div className="image three"></div>
                    <div className="separator"></div>
                    <div className="shortdescription">Eading developer and pioneer of Internet application...</div>
                    <div className="description">We treasure the contribution of our employees for the work they do and the difference they make to the company.</div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ContentBody;
