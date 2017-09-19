import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

import App from './App';

ReactDOM.render(
    <BrowserRouter basename="/">
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
