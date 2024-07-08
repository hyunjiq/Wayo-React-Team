import React from 'react'
import logo from "../svg/logo.svg"

function Hd() {
    return (
        <header id="hd" className="d-flex justify-content-between position-fixed align-items-center px-5">
        <h1 className="mb-0">
          <a id="hd_h1" className="d-block" href="#">
            <img className="logo_img d-block" src={logo} alt="와요로고"/>
          </a>
        </h1>
        <ul className="d1 d-flex gnb mb-0 p-0 ">
             <li className="d1_li position-relative">
                <a className="d1_a" id="info_click" href="#">펫시터가 와요</a>
            </li>
            <li className="d1_li position-relative">
                <a className="d1_a" href="#">훈련사</a>
            </li>
            <li className="d1_li position-relative">
                <a className="d1_a" href="#">플레이스</a>
            </li>
            <li className="d1_li position-relative">
                <a className="d1_a" href="#">사회공헌</a>
            </li>
            <li className="d1_li position-relative">
                <a className="d1_a" href="#">커뮤니티</a>
            </li>
            <li className="d1_li position-relative">
                <a className="d1_a" href="#">펫트너</a>
            </li> 
        </ul>
        <ul className="d-flex lnb mb-0 p-0">
            <li className="mx-2 searchIcon d-flex">
                <form className="form-show search-form d-none border me-3 position-absolute">
                    <a className="a-search" href="#">
                        <i className="bi bi-search"></i>
                        <span className="visually-hidden">검색</span>
                    </a>
                    <input type="text" className="form-control search-pc" placeholder="검색어 입력"/>
                </form>
                <a className="btn-a a-search" href="#">
                    <i className="bi bi-search"></i>
                    <span className="visually-hidden">검색</span>
                </a>
                <a className="a-x d-none" href="#">
                    <i className="bi bi-x-lg"></i>
                    <span className="visually-hidden">닫기</span>
                </a>
            </li>
            <li className="mx-2 personIcon">
                <a id="hd_log" href="#">
                    <i className="bi bi-person"></i>
                    <span className="visually-hidden">로그인</span>
                </a>
            </li>
        </ul>     
    </header>
    );
}

export default Hd
