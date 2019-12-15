import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';

function Logout(){
    sessionStorage.removeItem('blogToken');
    return <Redirect to="/" />
}

function Routes(){
    return (
        <>
        <Route exact path="/" component={Home} />
        </>
    );
}

export default Routes;