import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import '../scss/je.scss';
import mainbDB from '../data/db.json'
import {Mainswiper, Mswiper, Ptext01,Ptext02,Ptext03,Ptext04 } from '../component/style'

const BannerSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
             {mainbDB["banner01"].map((v, i) => {
                return (
                    <SwiperSlide>
                     <Mainswiper key={i}>
                        <Mswiper>
                            <div className="mb-4">
                                <Ptext02>{v.text[0]}</Ptext02>
                                <Ptext02>{v.text[1]}</Ptext02>
                            </div>
                            <div className="mb-5">
                                <Ptext03>{v.subtext[0]}</Ptext03>
                                <Ptext03>{v.subtext[1]}</Ptext03>
                            </div>
                            <div><a href="javascript:void(0)" className="mainActing">유기동물 보호 활동</a></div>
                         
                        </Mswiper>   
                        <div className="main_back"></div>
                    </Mainswiper>
               
                </SwiperSlide>
                );
            })}
            {mainbDB["banner02"].map((e, idx) => {
                return (
                    <SwiperSlide>
                        <Mainswiper  key={idx}>
                        <Mswiper>
                            <div className="mb-4">
                                <Ptext01>{e.text[0]}</Ptext01>
                                <Ptext01>{e.text[1]}</Ptext01>
                            </div>
                            <div className="mb-5">
                                <Ptext03>{e.subtext}</Ptext03>
                            </div>
                            <div><a href="javascript:void(0)" className="mainvideo">{e.btn}</a></div>
                        </Mswiper>
                        <div>
                            <iframe
                                key={idx}
                                width="1242"
                                height="700"
                                className="mainbanner_Video"
                                src="https://www.youtube.com/embed/RWRm1vHZN8A?si=KUt8OAz0PFLwfhsb"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        </Mainswiper>
                    </SwiperSlide>
                );
            })}
             {mainbDB.banner03.map((b, index) => {
                return (
                    <SwiperSlide>
                        <Mainswiper  key={index}>
                        <Mswiper>
                            <div className="mb-4">
                                <img src="/img/img_je/main_collabo_txt.png" alt="콜라보로고" />
                            </div>
                            <div className="mb-5">
                                <Ptext01 className="mb-3">{b.text}</Ptext01>
                                <Ptext04>{b.subtext[0]}</Ptext04>
                                <Ptext04>{b.subtext[1]}</Ptext04>
                                <Ptext04>{b.subtext[2]}</Ptext04>
                            </div>
                        </Mswiper>
                        <div>
                            <img
                                src="/img/img_je/main_collabo.jpg"
                                alt="콜라보상품"
                                className="maincollabo"
                            />
                        </div>
                    </Mainswiper>
                    </SwiperSlide>
                );
            })}
            
        </Swiper>
    );
}

export default BannerSlider;