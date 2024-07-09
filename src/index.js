import React from 'react';
import ReactDOM from 'react-dom/client';

// font, scss
import './fonts/font.css';
import './scss/hd.scss';

//부트스트랩, 스와이퍼 플러그인 연결해야함!

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

