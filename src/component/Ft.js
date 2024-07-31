import React from 'react'
import { Styleicon } from './style';
import logo from "../svg/logo.svg"

function Ft() {
    return (
    <footer class="py-5">
        <div class="ft container d-flex px-0">
            <div class="ft_right">
                <ul class="ft_menu mb-3 ps-0 d-flex">
                    <li class="pe-2 ft_menu_li"><a href="">고객센터</a></li>
                    <li class="px-2 ft_menu_li"><a href="">개인정보처리방침</a></li>
                    <li class="px-2 ft_menu_li"><a href="">이용약관</a></li>
                    <li class="ps-2 ft_menu_li border-0"><a href="">공지사항</a></li>
                </ul>
                <ul class="ft_info mb-3 ps-0">
                    <li class="ft-m">
                        <span>(주) 펫피플 사업자 등록번호 : 347-87-00837</span>
                        <span>통신판매업 신고번호 : 제 2017-서울강남-03319</span>
                    </li>
                    <li>대표 : 이원복 | 개인정보책임자 : 김태호</li>
                    <li>주소 : 서울 강남구 삼성동 118-11, 2층 (주식회사 펫피플)</li>
                    <li>문의 : hello@wayopet.com / 070-4756-2224</li>
                </ul>
                <p class="ft_copy mb-3">© 2020 Pet People Inc.</p>
                <ul class="ft-icon ps-0 d-flex">
                    <li class="me-2" >
                        <a class="icon-position" href="http://pf.kakao.com/_sxaVfxj">
                            <Styleicon content='\F268'><span class="visually-hidden">카카오상담</span></Styleicon>
                        </a>
                    </li>
                    <li class="me-2">
                        <a href="https://www.youtube.com/@TV-pi8gs">
                            <Styleicon content='\F62B'><span class="visually-hidden">유튜브보기</span></Styleicon>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Styleicon content='\F437'><span class="visually-hidden">인스타그램</span></Styleicon>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="ft_left d-flex align-items-end">
                <h1><a href="#"><img src={logo} alt="와요 로고"/></a></h1>
            </div>
        </div>        
    </footer>
    )
}

export default Ft
