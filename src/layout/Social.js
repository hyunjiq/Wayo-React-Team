import React from 'react';
import socialDB from '../data/db.json'
import Socialswiper from '../component/Socialswiper'
import {Socialdiv, Socialul, Sociala, Socialspan01,Socialspan02,Socialspan03} from '../component/style'
import { Link } from 'react-router-dom';

function Social() {

    return (
        <section id="social_program" className="margin">
                <div className="container-lg">
                    <h2>사회 공헌 프로그램</h2>
                    <div className="d-flex custom-flex">
                            {/* <!-- Swiper --> */}
                            <Socialswiper></Socialswiper>                  
                        {/* <!-- 프로그램 일정 --> */}
                        <div className="col-md-6 ps-md-3 proinfo" >
                            <Socialdiv>
                                <h5 className="pt-1">프로그램 일정</h5>
                                <span className="pt-1"><Link to="more_info"><h6>더보기</h6></Link></span>
                            </Socialdiv>
                        
                            <Socialul>
                                {
                                    socialDB["schedule"].map((e, i)=>{
                                        return(
                                            <li>
                                                <Sociala>
                                                    <Socialspan01>{e.date}</Socialspan01>
                                                    <Socialspan02 to="event_info">{e.event}</Socialspan02>
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
