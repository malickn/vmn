import React from 'react';
import '../assets/css/main.css';
import Nav from './nav';
import HeaderContainerPanel from './headerContainerPanel';
import $ from 'jquery';

const Header = (props) => {

    const headerStyle = (props.page === 'about') ? 'about' : '';
    const logoColor = (props.page === 'about') ? 'dark' : '';
    const headerContainerClassName = (props.page === 'about') ? 'about' : '';

    const hideAboutContentInitial = {
        display : (props.page === 'about') ? "none" : ''
    }

    const hideHomeContentInitial = {
        display : (props.page === 'home') ? "none" : ''
    }
    
    // Small screen <= 500
    const HEADER_CONTAINER_HEIGHT_SMALL_OPENED = '980px';
    const HEADER_CONTAINER_HEIGHT_SMALL_CLOSED = '660px';

    // Small screen < 880
    const HEADER_CONTAINER_HEIGHT_OPENED = '1150px';
    const HEADER_CONTAINER_HEIGHT_CLOSED = '820px';
    const HEADER_CONTAINER_ABOUT_HEIGHT_CLOSED = '520px';

    //big screen > 880
    const HEADER_CONTAINER_ABOUT_HEIGHT_DEFAULT = '500px';
    const HEADER_CONTAINER_ABOUT_DEFAULT_OPENED = '730px';
    const HEADER_CONTAINER_HEIGHT_DEFAULT = '850px';

    //big screen > 880 && <= 1100
    const HEADER_CONTAINER_HEIGHT_MID = '660px';
    const HEADER_CONTAINER_ABOUT_HEIGHT_MID = '520px';

    //const win_width = window.innerWidth;

    const resize_container = () => {
        const win_width = window.innerWidth;
        updateContainer();

        const el_what_to_do = $('.container .what-to-do-section-container');
        const what_to_do_section_height = el_what_to_do.outerHeight(true);

        if(win_width <= 700)
            $('.container .bg-top-right').css('top', what_to_do_section_height - 70);

        const el = $('.container .what-to-do-products-container');
        const bottom = el.offset().top + el.outerHeight(true);
        const $hc = $('.header-container');
        const containerBottom =  $hc.offset().top + $hc.outerHeight(true);
        const containerHeight = bottom - containerBottom;
        const positionClientContainerTop = $('.clients').offset().top;
        const whoweareContainer = $('.whoweare-container > .content').outerHeight(true) + $('.whoweare-container > .content').offset().top;
        $('.clients').css('height', whoweareContainer - positionClientContainerTop);
        $('.container').css('height', containerHeight);
        $('.whoweare-container > .image-hexagone').css('height', $('.whoweare-container > .content').height() + 170);
    };

    $(document).ready(function () {
        resize_container();
        $( window ).resize(function() {
            resize_container();
        });
        $('.second-button').on('click', function () {
            $('.header-content-initial').toggleClass("closed");
            $('.header-content-panel').toggleClass("opened");
            $('.animated-icon2').toggleClass('open');

            if(props.page === 'about'){
                $('.animated-icon2').toggleClass('about');
                $('header').toggleClass('about');
                $('.navbar-brand-about').toggleClass('open');
            }    
            updateContainer();
        });

        $('.smooth-goto').on('click', function() { 
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 2000);
            return false;
        });
    });
    const updateContainer = () => {
        const win_width = window.innerWidth;
        if(win_width <= 500){
            if($('.header-content-panel').hasClass('opened'))
                $('.header-container').css('height', HEADER_CONTAINER_HEIGHT_SMALL_OPENED);
            else
                $('.header-container').css('height', HEADER_CONTAINER_HEIGHT_SMALL_CLOSED);

        }else if(win_width <= 880){
            if($('.header-content-panel').hasClass('opened'))
                $('.header-container').css('height', HEADER_CONTAINER_HEIGHT_OPENED);
            else
                $('.header-container').css('height', (props.page === 'about') ? HEADER_CONTAINER_ABOUT_HEIGHT_CLOSED : HEADER_CONTAINER_HEIGHT_CLOSED);
        }
        else if(win_width > 880 && win_width <= 1100){
            $('.header-container').css('height', (props.page === 'about') ? HEADER_CONTAINER_ABOUT_HEIGHT_MID : HEADER_CONTAINER_HEIGHT_MID);
        }
        else{
            if($('.header-content-panel').hasClass('opened'))
                $('.header-container').css('height', (props.page === 'about') ? HEADER_CONTAINER_ABOUT_DEFAULT_OPENED :  HEADER_CONTAINER_HEIGHT_DEFAULT);
            else
                $('.header-container').css('height', (props.page === 'about') ? HEADER_CONTAINER_ABOUT_HEIGHT_DEFAULT : HEADER_CONTAINER_HEIGHT_DEFAULT);
        }
    };

    return (
        <>
        <header className={headerStyle}>
            <Nav logo={logoColor}/>
            <div className={`header-container ${headerContainerClassName}`}>
                <div className="header-content-initial">
                    <div className="content" style={hideAboutContentInitial}>
                        <div className="mission">
                            <span>We Make&nbsp;</span>
                            <span className="bluecolored">Visions</span>
                            <span>Come True </span>
                            <div className="tools">Develop tools, software and platforms.</div>
                            <div className="btn-tools"><a href="#our_products" className="smooth-goto">get started</a></div>
                        </div>
                        <div className="biglogo"></div>
                    </div>
                    <div className="content" style={hideHomeContentInitial}>
                        <div className="about-header">
                            <div className="about-title">
                                About Us
                            </div>
                            <div className="about-description">
                                We develop innovative tools, software and platforms.
                            </div>
                        </div>
                    </div>
                </div>
                <HeaderContainerPanel page={props.page}/>
            </div>
        </header>
        </>
     );
}
 
export default Header;