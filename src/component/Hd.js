import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Styleicon } from './style';
import logo from "../svg/logo.svg"
import gnbdata from "../data/db3.json"

function Hd() {    
    const { gnb } = gnbdata;

    const d1info = gnb.filter((item) => item["prnum"] === "" ) //대메뉴 어래이
    
    const submenus = {};

    for (let item of gnb) {
        if (item.prnum !== "") { // 소메뉴들만 대상
            if (!submenus[item.prnum]) {
                submenus[item.prnum] = [];
            }
            submenus[item.prnum].push(item);
        }
    }

    const [searchtoggle, setSearchtoggle] = useState(false);
    const [mobiletoggle, setMobiletoggle] = useState(false);

    return (
        
        <header className="hd d-flex justify-content-between position-fixed align-items-center">
        <h1 className="mb-0 position-relative">
          <a className="d-block" href="#">
            <img className="d-block" src={logo} alt="와요로고"/>
          </a>
        </h1>
        
        <ul className={`d1 mb-0 p-0 ${mobiletoggle? 'd-flex' : ''}`}>
            <li className='m-d-none '>
                <button className={`btncls xBtn  ${mobiletoggle? '' : 'd-none'}`} onClick={() => setMobiletoggle(false)}>                
                    <Styleicon content='\f659'><span className="visually-hidden">닫기</span></Styleicon> 
                </button>
            </li>
            <li className='m-d-none'>
                <form className={`d-flex`}>
                    <button className="btncls" href="#">                        
                        <Styleicon content='\f52a'><span className="visually-hidden">검색</span></Styleicon>   
                    </button>
                    <input type="text" className="form-control search-pc" placeholder="검색어 입력"/>
                </form>
            </li>
            {
                d1info  && d1info.map((v, i)=>
                <li key={`gnb${i}`} className='d1_li position-relative'>
                    <Link className='d1_a' to={v.href}>{v.text}</Link>
                    {
                       submenus[v.cateno] && submenus[v.cateno].length > 0 && (
                        <ul className=" d2 position-absolute ps-0 ">
                            {
                                submenus[v.cateno].map((vv, ii) => (
                                    <li key={`submenu${ii}`} className='d2_li'>
                                        <Link className='submenu_a' to={vv.href}>{vv.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                    }
                </li>
            )
            
            }      
        </ul>        
        <ul className="d-flex lnb mb-0 p-0 ">
            <li className="mx-2 searchIcon">
                <form className={`${searchtoggle ? 'd-flex' : 'd-none'} form-show border me-3 position-absolute`}>
                    <button className="btncls" href="#">                        
                        <Styleicon content='\f52a'><span className="visually-hidden">검색</span></Styleicon>   
                    </button>
                    <input type="text" className="form-control search-pc" placeholder="검색어 입력"/>
                </form>
                <button className={`btncls searchBtn ${searchtoggle ? 'd-none' : ''}`} onClick={() => setSearchtoggle(true)}>

                    <Styleicon content='\f52a'><span className="visually-hidden">검색</span></Styleicon>   
                </button>
                <button className={`btncls xBtn ${searchtoggle ? '' : 'd-none'}`} onClick={() => setSearchtoggle(false)}>
                    <Styleicon content='\f659'><span className="visually-hidden">닫기</span></Styleicon> 
                </button>
            </li>
            <li className="mx-2 personIcon">
                <Link to="#">
                    <Styleicon content='\f4e1'><span className="visually-hidden">로그인</span></Styleicon>
                </Link>
            </li>
            <li className="">
                <button className={`btncls ${mobiletoggle? 'd-none' : ''}`} onClick={() => setMobiletoggle(true)}>
                    <Styleicon content='\F479' className='mobilemenu'><span className="visually-hidden">메뉴</span></Styleicon>
                </button>
            </li>
            
        </ul>    
          
        </header>
        
            
    );
    
}

export default Hd
