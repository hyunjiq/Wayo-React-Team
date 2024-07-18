import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'; 
import '../css/mainb.css';
import mainbDB from '../data/mainbDB.json'
import {Mainswiper, Mswiper, Ptext01,Ptext02,Ptext03,Ptext04 } from '../commonui/mainbui'

const BannerSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 50000,
                disableOnInteraction: false,
            }}
        >
            {mainbDB["banner01"].map((v, i) => {
                const textArray = v.text.split('|');
                const subtextArray = v.subtext.split('|');

                return (
                    <SwiperSlide key={`banner01${i}`}>
                        <Mainswiper>
                            <Mswiper>
                                <div className="mb-4">
                                    <Ptext02>{textArray[0]}</Ptext02>
                                    <Ptext02>{textArray[1]}</Ptext02>
                                </div>
                                <div className="mb-5">
                                    <Ptext03>{subtextArray[0]}</Ptext03>
                                    <Ptext03>{subtextArray[1]}</Ptext03>
                                </div>
                                <div><a href="javascript:void(0)" className="mainActing">{v.btn}</a></div>
                            </Mswiper>
                            <div className="main_back"></div>
                        </Mainswiper>
                    </SwiperSlide>
                );
            })}
            {mainbDB["banner02"].map((e, idx) => {
                const textArray = e.text.split('|');

                return (
                    <SwiperSlide key={`banner02${idx}`}>
                        <Mainswiper>
                            <Mswiper>
                                <div className="mb-4">
                                    <Ptext01>{textArray[0]}</Ptext01>
                                    <Ptext01>{textArray[1]}</Ptext01>
                                </div>
                                <div className="mb-5">
                                    <Ptext03>{e.subtext}</Ptext03>
                                </div>
                                <div><a href="javascript:void(0)" className="mainvideo">{e.btn}</a></div>
                            </Mswiper>
                            <div>
                                <iframe
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
                const subtextArray = b.subtext.split('|');

                return (
                    <SwiperSlide key={`banner03${index}`}>
                        <Mainswiper>
                            <Mswiper>
                                <div className="mb-4">
                                    <img src="/img/main_collabo_txt.png" alt="콜라보로고" />
                                </div>
                                <div className="mb-5">
                                    <Ptext01 className="mb-3">{b.text}</Ptext01>
                                    <Ptext04>{subtextArray[0]}</Ptext04>
                                    <Ptext04>{subtextArray[1]}</Ptext04>
                                    <Ptext04>{subtextArray[2]}</Ptext04>
                                </div>
                            </Mswiper>
                            <div>
                                <img
                                    src="/img/main_collabo.jpg"
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