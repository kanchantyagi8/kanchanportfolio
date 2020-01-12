import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes.config';

export default function getRoutes() {
    return routes.map((prop, key) => {
        if(prop.exact) {
            return <Route exact path={prop.path} component={prop.component} key={key} />
        } else if(!prop.exact) {
            return <Route component={prop.component} key={key} />
        }
        return (
            <Route path={prop.path} component={prop.component} key={key}/>
        )
    });
}