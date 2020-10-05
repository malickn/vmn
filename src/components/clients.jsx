import React from 'react';
import Clientslogo from './clientslogo';
import Whoweare from './whoweare';

const Clients = () => {
    return ( 
        <section className="clients" id="our_clients">
            <div className="header">
                <div className="title">A SELECTION OF OUR CLIENTS</div>
                <div className="line"></div>
            </div>
            <Clientslogo />
            <Whoweare/>
        </section>
     );
}
 
export default Clients;