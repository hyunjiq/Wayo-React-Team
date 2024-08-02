import React from 'react'
import { Styleicon } from './style';
import { Link } from 'react-router-dom';

function Quik() {
    return (
        <aside className="quikMenu d-flex position-fixed align-items-center flex-column">
            <button className='quikBtn' onClick={()=>document.querySelector(".quikul").classList.toggle("d-none")}> 
                <span className="visually-hidden">퀵버튼</span>
            </button>
            <ul className="quikul px-1 pb-2 mb-0 d-none">
                <li className="quikli my-2 p-2">
                    <a className="text-white" target='_blank' href="http://pf.kakao.com/_sxaVfxj">
                        <Styleicon content='\F268'><span className="visually-hidden">카카오상담</span></Styleicon>
                    </a>
                </li>
                <li className="quikli my-2 p-2">
                    <a className="text-white" target='_blank' href="https://www.instagram.com/greenart_official/?igshid=YmMyMTA2M2Y%3D">
                        <Styleicon content='\F437'><span className="visually-hidden">인스타그램</span></Styleicon>
                    </a>
                </li>
            </ul>        
            <a href="#" className="top_btn">
                <Styleicon content='\F148'><span className="visually-hidden">위로가기</span></Styleicon>
            </a>  
        </aside>
    )
}

export default Quik
