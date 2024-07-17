import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// font, scss
import './fonts/fonts.css';
import './scss/common.scss';
import './scss/hj.scss';
import './scss/je.scss';
import './scss/sh.scss';

//부트스트랩, 아이콘, 스와이퍼
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/swiper-bundle.css';
import 'swiper/css'; 

//
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

