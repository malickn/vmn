import React, { Component } from 'react';
import {connect } from 'react-redux';

class Product extends Component {
   
    constructor(props) {
        super();
        this.state = {
          website: props.website,
          props : props
        };
    }

    // handleClick = website => {
        
    //     if(website === '#'){
    //         this.mapDispatchToProps();
    //         console.log("Click on link " + website);
    //     }

    // }
    render() { 
        const html = (this.state.props.website === '#') ? <span onClick={this.props.onOpenModal}>{this.state.props.learn_more}</span> : <a href={this.state.props.website}>{this.state.props.learn_more}</a>;
        return ( 
            <div className="product">
                <div className={this.state.props.logo}></div>
                <div className="title">{this.state.props.title}</div>
                <div className="description">{this.state.props.description}</div>
                <div className="learn_more bluecolored">{html}</div>
                <div className="line"></div>
            </div>
         );
    }
}
 
const mapDispatchToProps = dispatch => {
    return{
        onOpenModal: () => dispatch({ type: 'OPEN' })
    };
};

export default connect(null, mapDispatchToProps)(Product);