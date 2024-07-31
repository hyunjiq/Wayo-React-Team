import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Styleicon } from './style';
import logo from "../svg/logo.svg"
import gnbdata from "../data/db.json"

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


    useEffect(() => {

        const d1leng =  document.querySelectorAll('.gnb_li');

        d1leng.forEach((v, i)=>{
          v.addEventListener('click', (event)=> {
                event.preventDefault(); 

                d1leng.forEach((vv, ii)=>{
                    vv.classList.remove('showdiv');
                     
                });
                 
                if (v.classList.contains('showdiv')) {
                    v.classList.remove('showdiv');
                } else {
                    v.classList.toggle('showdiv');
                }
                                         
          }) 
        })
        
        }, []);
  

    return (
        
        <header className="hd d-flex justify-content-between position-fixed align-items-center">
        <h1 className="mb-0 position-relative">
          <a className="d-block" href="#">
            <img className="d-block" src={logo} alt="와요로고"/>
          </a>
        </h1>
        
        <ul className={`d1 mb-0 p-0 ${mobiletoggle? 'd-flex' : ''}  gnbd1`}>
            <li className='m-d-none d1_li position-relative py-4 fs-1rem6 border-bottom'>
                <button className={`btncls xBtn position-absolute ${mobiletoggle? '' : 'd-none'}`} onClick={() => setMobiletoggle(false)}>                
                    <Styleicon content='\f659'><span className="visually-hidden">닫기</span></Styleicon> 
                </button>
            </li>
            <li className='m-d-none d1_li position-relative'>
                <form className='d-flex m-search p-1'>
                    <button className="btncls" href="#">                        
                        <Styleicon content='\f52a'><span className="visually-hidden">검색</span></Styleicon>   
                    </button>
                    <input type="text" className="form-control search-pc" placeholder="검색어 입력"/>
                </form>
            </li>
            {
                d1info  && d1info.map((v, i)=>
                <li key={`gnb${i}`}  data-num={i} className={`d1_li position-relative gnb_li gnb_li_${i}`}>
                    <Link className='d1_a' to={v.href}>{v.text}{
                        submenus[v.cateno] && submenus[v.cateno].length > 0 && (
                            <Styleicon className='m-d-none' content='\F282'></Styleicon> 
                        )
                    }
                        
                    </Link>
                    {
                       submenus[v.cateno] && submenus[v.cateno].length > 0 && (
                        <ul className=" d2 ps-0 ">
                            {
                                submenus[v.cateno].map((vv, ii) => (
                                    <li key={`submenu${ii}`} className='d2_li d-flex'>
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
            <li className="mx-2 searchIcon position-relative">
                 <form className={`form-show ${searchtoggle ? 'd-flex' : 'd-none'} border position-absolute bg-white`}>
                    <button className="btncls" href="#">                        
                        <Styleicon content='\f52a'><span className="visually-hidden">검색</span></Styleicon>   
                    </button>
                    <input type="text" className="form-control search-pc" placeholder="검색어 입력"/>
                </form>
                <button className={`btncls ${searchtoggle ? 'searchBtn' : 'xBtn'}`} onClick={() => setSearchtoggle(!searchtoggle)}>
                    <Styleicon content={searchtoggle ? '\\f659' : '\\f52a'}>
                        <span className="visually-hidden">{searchtoggle ? '닫기' : '검색'}</span>
                    </Styleicon>
                </button>

            </li>
            <li className="mx-2 fs-1rem6">
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
