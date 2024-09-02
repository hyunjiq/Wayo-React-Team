import React from 'react'
import { Styleicon } from './style';
import logo from "../svg/logo.svg"
import { Link } from 'react-router-dom';

function Ft() {
    return (
    <footer className="py-5">
        <div className="ft container d-flex px-0">
            <div className="ft_right">
                <ul className="ft_menu mb-3 ps-0 d-flex">
                    <li className="pe-2 ft_menu_li"><Link>고객센터</Link></li>
                    <li className="px-2 ft_menu_li"><Link>개인정보처리방침</Link></li>
                    <li className="px-2 ft_menu_li"><Link>이용약관</Link></li>
                    <li className="ps-2 ft_menu_li border-0"><Link>공지사항</Link></li>
                </ul>
                <ul className="ft_info mb-3 ps-0">
                    <li className="ft-576"><span>ReactApp으로 구현한 방문 펫시터 서비스</span><span>"와요" 리뉴얼 프로젝트</span></li>
                    <li>팀명 : 펫토피아 | 독립형 홈페이지</li>
                    <li className="ft-992"><span>이현지 edalnim12@gmail.com&nbsp;</span><span>문세현 hyun_022@naver.com&nbsp;</span><span>정주은 judms0314@gmail.com</span></li>
                </ul>
                <p className="ft_copy mb-3">© 2020 Pet People Inc.</p>
                <ul className="ft-icon ps-0 d-flex">
                    <li className="me-2" >
                        <a className="icon-position" target='_blank' href="http://pf.kakao.com/_sxaVfxj" rel="noopener noreferrer">
                            <Styleicon content='\F268'><span className="visually-hidden">카카오상담</span></Styleicon>
                        </a>
                    </li>
                    <li className="me-2">
                        <a target='_blank' href="https://www.youtube.com/@TV-pi8gs" rel="noopener noreferrer">
                            <Styleicon content='\F62B'><span className="visually-hidden">유튜브보기</span></Styleicon>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.instagram.com/greenart_official/?igshid=YmMyMTA2M2Y%3D" rel="noopener noreferrer">
                            <Styleicon content='\F437'><span className="visually-hidden">인스타그램</span></Styleicon>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ft_left d-flex align-items-end">
                <h1><a href="#"><img src={logo} alt="와요 로고"/></a></h1>
            </div>
        </div>        
    </footer>
    )
}

export default Ft
