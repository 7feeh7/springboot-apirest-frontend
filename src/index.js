import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Product from './pages/Product/index';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/products" component={Product}/>
            <Route component={() => <h1>Page 404!</h1>} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
