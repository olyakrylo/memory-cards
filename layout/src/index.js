import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cardsInfo from './cardsInfo';

import { HashRouter } from "react-router-dom";

if (localStorage.getItem('memoryCards') === null) {
    localStorage.setItem('memoryCards', JSON.stringify(cardsInfo));
}

ReactDOM.render((
        <HashRouter>
            <App/>
        </HashRouter>
    ), document.getElementById('root')
);