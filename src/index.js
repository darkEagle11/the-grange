import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import ScrollToTop from './shared/components/ScrollToTop';

const app = (
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
