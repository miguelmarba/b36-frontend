import React from 'react';
import ReactDOM from 'react-dom';
//import $ from "jquery";
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './index.scss';
import client from './graphql';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<ApolloProvider client={client}>
    <Router>
        <Routes />
    </Router>
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
