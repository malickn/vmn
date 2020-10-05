import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './home';
import About from './about';
import MediaCSS from './media';

const Root = () => {
    return(
        <div>
            <MediaCSS>
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={About} exact path="/about" />
                </Switch>
            </MediaCSS>
        </div>
    )
};

export default Root;