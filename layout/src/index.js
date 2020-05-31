import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter } from "react-router-dom";

ReactDOM.render((
        <HashRouter>
            {/* <App url='https://mc-serv.herokuapp.com/users/'/> */}
            <App url='http://192.168.0.108:8000/users/'/>
        </HashRouter>
    ), document.getElementById('root')
);