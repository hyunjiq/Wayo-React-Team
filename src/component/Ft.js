import React from 'react'
import { Styleicon } from './style';
import logo from "../svg/logo.svg"

function Ft() {
    return (
    <footer className="py-5">
        <div className="ft container d-flex px-0">
            <div className="ft_right">
                <ul className="ft_menu mb-3 ps-0 d-flex">
                    <li className="pe-2 ft_menu_li"><a href="">고객센터</a></li>
                    <li className="px-2 ft_menu_li"><a href="">개인정보처리방침</a></li>
                    <li className="px-2 ft_menu_li"><a href="">이용약관</a></li>
                    <li className="ps-2 ft_menu_li border-0"><a href="">공지사항</a></li>
                </ul>
                <ul className="ft_info mb-3 ps-0">
                    <li className="ft-m">
                        <span>(주) 펫피플 사업자 등록번호 : 347-87-00837</span>
                        <span>통신판매업 신고번호 : 제 2017-서울강남-03319</span>
                    </li>
                    <li>대표 : 이원복 | 개인정보책임자 : 김태호</li>
                    <li>주소 : 서울 강남구 삼성동 118-11, 2층 (주식회사 펫피플)</li>
                    <li>문의 : hello@wayopet.com / 070-4756-2224</li>
                </ul>
                <p className="ft_copy mb-3">© 2020 Pet People Inc.</p>
                <ul className="ft-icon ps-0 d-flex">
                    <li className="me-2" >
                        <a className="icon-position" target='_blank' href="http://pf.kakao.com/_sxaVfxj">
                            <Styleicon content='\F268'><span className="visually-hidden">카카오상담</span></Styleicon>
                        </a>
                    </li>
                    <li className="me-2">
                        <a target='_blank' href="https://www.youtube.com/@TV-pi8gs">
                            <Styleicon content='\F62B'><span className="visually-hidden">유튜브보기</span></Styleicon>
                        </a>
                    </li>
                    <li>
                        <a target='_blank'href="https://www.instagram.com/greenart_official/?igshid=YmMyMTA2M2Y%3D">
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
