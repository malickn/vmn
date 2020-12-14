import React, { Component } from 'react';
import {connect } from 'react-redux';
import loadinglogo from '../assets/images/ajax-loader.gif'

class SearchSolution extends Component {
    constructor(props) {
        super();
        this.state = {
            name : '',
            company : '',
            email : '',
            country : '',
            url : '',
            monthly_traffic : '',
            geomarket : '',
            showMsg : false,
            showError : false,
            msg: ''
        }
    }

    inputNameHandler = (event) => {
        this.setState({name : event.target.value});
    }
    inputCompanyHandler = (event) => {
        this.setState({company : event.target.value});
    }
    inputEmailHandler = (event) => {
        this.setState({email : event.target.value});
    }
    inputCountryHandler = (event) => {
        this.setState({country : event.target.value});
    }
    inputUrlHandler = (event) => {
        this.setState({url : event.target.value});
    }
    inputMonthlyTrafficHandler = (event) => {
        this.setState({monthly_traffic : event.target.value});
    }
    inputGeomarketHandler = (event) => {
        this.setState({geomarket : event.target.value});
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({showError : false});
        if(this.state.name === ''){
            this.setState({showMsg: true});
            this.props.onShowMessage('Please provide with a valid name', true);

        }else if(this.state.company === ''){
            this.setState({showMsg: true});
            this.props.onShowMessage('Please provide with a valid company name', true);

        }else if(this.state.email === ''){
            this.setState({showMsg: true});
            this.props.onShowMessage('Please provide with a valid email', true);
        }
        else if(this.state.country === ''){
            this.setState({showMsg: true});
            this.props.onShowMessage('Please provide with a valid country', true);
        }
        else{
            this.props.onShowLoading();
            
            // creates entity
            fetch("https://betatest.vmn.net/send_mail_contact/index.php", {
                "method": "POST",
                "headers": {
                "content-type": "application/json",
                "accept": "application/json"
                },
                "body": JSON.stringify({
                    name:this.state.name,
                    company : this.state.company,
                    email : this.state.email,
                    country : this.state.country,
                    url : this.state.url,
                    monthly_traffic : this.state.monthly_traffic,
                    geomarket : this.state.geomarket
                })
            })
            .then(response => response.json())
            .then(response => {
                const data = response.data;
                if(data.action === "failed"){
                    this.props.onShowMessage(data.msg, true);
                }else{
                    this.setState({
                        name : '',
                        company : '',
                        email : '',
                        country : '',
                        url : '',
                        monthly_traffic : '',
                        geomarket : ''
                    })
                this.props.onShowMessage(data.msg, false);
                }
            })
            .catch(err => {
                this.props.onShowMessage(err, true);
            });
        }
    }

    render() { 
        
        const showModalStyle = {
            display : (this.props.modalShow === false) ? "none" : "block"
        }

        const showErrorStyle = {
            display : (this.props.showMsg === false) ? "none" : "block"
        }

        const msgClassName = (this.props.showError === false) ? "msg" : "msg error";
        const showLoading = {
            display : (this.props.showLoading === false) ? "none" : "block"
        }

        return ( 
            <section className="ss-overlay" style={showModalStyle} value={this.props.modalShow}>
                <div className="searchsolution">
                    <div className="close" onClick={this.props.onCloseModal}></div>
                    <div className="info">
                        <div className="providers"></div>
                        <div className="questions">Do you want to drive more revenue to your site or mobile applications?</div>
                        <div className="title">PARTNER WITH US!</div>
                        <div className="lists">
                            
                            <div className="list">
                                <div className="liststyle"> </div>
                                <div className="text">
                                We work with you on the look and feel optimizing the landing page experience.
                                </div>
                            </div>
                            <div className="list">
                                <div className="liststyle"> </div>
                                <div className="text">
                                    Through the Yahoo! Bing Network publishers can display on their website or mobile applications high targeted, relevant ads.
                                </div>
                            </div>
                            <div className="list">
                                <div className="liststyle"> </div>
                                <div className="text">
                                We offer various type of implementations that fit your niche and serve ads relevant to what your users are searching for.
                                </div>
                            </div>
                        </div>
                        <div className="bottomtxt">Make more money with us!</div>
                    </div>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="tellus">Tell us about you and we will contact you within one business day</div>
                            <div className="loading" style={showLoading}><img src={loadinglogo}/></div>
                            <div className={msgClassName} style={showErrorStyle}>{this.props.msg}</div>
                            <input type="text" name="name" id="name" placeholder="Name *" value={this.state.name} onChange={this.inputNameHandler}/>
                            <input type="text" name="company" id="company" placeholder="Company *" value={this.state.company} onChange={this.inputCompanyHandler}/>
                            <input type="text" name="email" id="email" placeholder="Email *" value={this.state.email} onChange={this.inputEmailHandler}/>
                            <input type="text" name="country" id="country" placeholder="Country *" value={this.state.country} onChange={this.inputCountryHandler} />
                            <input type="text" name="url" id="url" placeholder="URL where our Yahoo! ads will be displayed" value={this.state.url} onChange={this.inputUrlHandler}/>
                            <input type="text" name="monthly_traffic" id="monthly_traffic" placeholder="Monthly traffic" value={this.state.monthly_traffic} onChange={this.inputMonthlyTrafficHandler}/>
                            <input type="text" name="geomarket" id="geomarket" placeholder="Your top 3 geo market" value={this.state.geomarket} onChange={this.inputGeomarketHandler}/>
                            <div className="submit" type="submit" name="submit" onClick={this.handleSubmit}>submit</div>
                        </form>
                    </div>
                </div>
            </section>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        modalShow : state.showModal,
        msg : state.msg,
        showError : state.showError,
        showLoading : state.showLoading
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onCloseModal: () => dispatch({ type: 'CLOSE' }),
        onShowMessage: (msg, error) => dispatch({ type: 'SHOW_MESSAGE', value : msg, error : error }),
        onReset: (msg) => dispatch({ type: 'RESET'}),
        onShowLoading: () => dispatch({ type: 'SHOW_LOADING'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSolution);
