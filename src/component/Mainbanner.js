import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import mainbDB from '../data/db.json'
import {Mswiper, Ptext02,Ptext03 } from '../component/style'
import { Link } from 'react-router-dom';

const BannerSlider = () => {
    return (
        <div className='container-xl px-md-5'>
        <Swiper
            // spaceBetween={50}
            loop={true}
            //slidesPerView={'auto'}
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
        
        >
            {mainbDB["banner01"].map((v, i) => {
                const textArray = v.text.split('|');
                const subtextArray = v.subtext.split('|');
    
                return (
                    <SwiperSlide key={`banner01${i}`}>
                        <div className='d-flex align-items-center justify-content-center swiperdiv'>
                            <Mswiper className='col-md-6 d-flex flex-column align-items-start justify-content-center gap-4 '> 
                                <div className="mauto">
                                    {i === 2 && subtextArray.length > 0 ? ( 
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src="/img/img_sh/wayo.png" alt="와요 로고" className='d-block h-3'/>
                                            <i className="bi bi-x-lg mx-2 fs-3"><span className='visually-hidden'>콜라보 x</span></i>
                                        <img src="/img/img_sh/collabo.png" alt="래핑찰리 로고" className='d-block h-3'/>
                                    </div>
                                    ) : null}
                                    <Ptext02>{textArray[0]}</Ptext02>
                                    <Ptext02>{textArray[1]}</Ptext02>
                                </div>
                                <div className="swipsubtext">
                                    <Ptext03>{subtextArray[0]}</Ptext03>

                                   {subtextArray.length === 2 ? (
                                    <Ptext03>{subtextArray[1]}</Ptext03>) : subtextArray.length > 1 && subtextArray[2] 
                                    ? (<><Ptext03>{subtextArray[1]}</Ptext03> <Ptext03>{subtextArray[2]}</Ptext03></>) : null}
   
                                </div>
                             {v.btn ? (
                                <div className='mauto'>
                                    <Link
                                    to={"gotoinfo"}
                                    className={`mainActing mb-4 ${ i === 3 ? "hide-on-mobile" : ""}`}
                                    >
                                    {v.btn}
                                    </Link>
                                </div>
                                ) : null}
                            </Mswiper>
                            {i === 0 && textArray[0] ? (
                                    <>
                                        <div className='col-md-7 col-12 main_banner py-4'>
                                            <div className="main_back"></div>
                                        </div>
                                    </>
                                    ) : i === 1 && textArray.length > 1 ? (
                                        <div className='col-md-7 col-12 m_ py-4'>
                                            <div className='video_wrap main_banner'>
                                                <div className='video'>
                                                    <iframe
                                                    
                                                        className="mainbanner_Video"
                                                        src="//www.youtube.com/embed/RWRm1vHZN8A?si=KUt8OAz0PFLwfhsb"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    ) : i === 2 && subtextArray.length > 0 ? (
                                        <>  
                                            <div className='col-md-7 col-12 main_banner py-4'>
                                                 <div className="maincollabo"> </div>
                                            </div>
                                        </>
                                      
                                    ) : null}
                        </div>
                    </SwiperSlide>
                );
            })}
          
        </Swiper>
        </div>
    );
}

export default BannerSlider;