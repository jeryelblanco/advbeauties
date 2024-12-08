import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';
import Gallery from './Gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App/>
    </BrowserRouter>
);