import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Contacts from './views/Contacts';
import Contact from './views/Contact';
import EditContact from "./views/EditContact";
import DeleteContact from './views/DeleteContact';
import CreateContact from './views/CreateContact';

function Logout(){
    sessionStorage.removeItem('blogToken');
    return <Redirect to="/login" />
}

function Routes(){
    return (
        <>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/contact/create" component={CreateContact} />
        <Route exact path="/contact/:id" component={Contact} />
        <Route exact path="/contact/edit/:id" component={EditContact} />
        <Route exact path="/contact/delete/:id" component={DeleteContact} />
        <Route exact path="/logout" component={Logout}/>
        </>
    );
}

export default Routes;