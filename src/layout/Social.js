import React from 'react';
import socialDB from '../data/db.json'
import Socialswiper from '../component/Socialswiper'
import '../scss/je.scss'
import {Socialdiv, Socialul, Sociala, Socialspan01,Socialspan02,Socialspan03} from '../component/style'

function Social() {

    return (
    <section id="social_program" className="margin">
            <div className="container position-relative">
                <h2>사회 공헌 프로그램</h2>
                <div className="row">
                    <div className="col d-flex p-0 sp_je me-3">
                        {/* <!-- Swiper --> */}
                        <div className="swiper mySwiper jeSwiper">
                            <div class="swiper-wrapper">
                                <Socialswiper></Socialswiper>
                            </div>
                        </div>
                            {/* <!-- 스와이퍼 이동버튼 --> */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                            
                    </div>                    
                    {/* <!-- 프로그램 일정 --> */}
                    <div className="col ps-0 sp_je" >
                        <Socialdiv>
                            <h5 className="pt-1">프로그램 일정</h5>
                            <span className="pt-1"><a href="javascript:void(0)"><h6>더보기</h6></a></span>
                        </Socialdiv>
                    
                        <Socialul>
                            {
                                socialDB["schedule"].map((e, i)=>{
                                    return(
                                        <li>
                                            <Sociala href="javascript:void(0)">
                                                <Socialspan01>{e.date}</Socialspan01>
                                                <Socialspan02>{e.event}</Socialspan02>
                                                <Socialspan03></Socialspan03>
                                            </Sociala>
                                        
                                        </li>
                                    )
                                })
                            }
                        </Socialul>
                    </div>
                </div>
            </div>
    </section>   
    )
}

export default Social