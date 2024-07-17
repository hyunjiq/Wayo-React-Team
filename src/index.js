import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// font, scss
import './fonts/fonts.css';
import './scss/common.scss';
import './scss/hj.scss';
import './scss/je.scss';
import './scss/sh.scss';

//부트스트랩, 스와이퍼 플러그인 연결해야함!

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

