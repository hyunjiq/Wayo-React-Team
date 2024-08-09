import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules'; 
import data from '../data/db.json';
import { Link } from 'react-router-dom';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function Withplace() {
  // 상태 변수로 썸네일 스와이퍼 인스턴스 관리
  const [thumbsSwipers, setThumbsSwipers] = useState([]);

  useEffect(() => {
    if (thumbsSwipers.length === data.place.length) {
      thumbsSwipers.forEach((swiper) => {
        swiper.autoplay.start();
      });
    }
  }, [thumbsSwipers]);

  return (
    <section className="margin with_place">
      <div className="place-bg container px-0 d-flex justify-content-end position-relative">
        <Swiper
          allowTouchMove={false}
          modules={[Pagination]}
          className="placeSwiper"          
          pagination={{
            el: '.placeSwiper-pagination', 
            clickable: true,
            renderBullet: (index, className) => {
              const btnnms = ['동반호텔', '동반카페', '동물병원'];
              return `
                <button class="${className}">
                  <span>${btnnms[index]}</span>
                  <i class="bi bi-chevron-right"></i>                  
                </button>
              `;
            }
          }}            
        >
          {data.place.map((v, i) => (
            <SwiperSlide key={`containerSlide${i}`} className='place-slide d-flex align-items-center justify-content-end'>
              <Swiper
                loop={true}
                key={`imgSwiper${i}`}                
                modules={[FreeMode, Thumbs]}                
                className="c_swiper2"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}                
                thumbs={{ swiper: thumbsSwipers[i] }}  // 메인 스와이퍼가 썸네일 스와이퍼를 참조하도록 설정
              >
                {v.map((vv, ii) => (
                  <SwiperSlide key={`SwiperSlidee${ii}`}>
                    <img src={vv.img} alt={vv.alt}/>                                
                  </SwiperSlide>
                ))} 
              </Swiper>
              <Swiper 
                key={`thumbSwiper${i}`}                
                onSwiper={(swiper) => {
                  setThumbsSwipers(prevState => {
                    const newThumbsSwipers = [...prevState];
                    newThumbsSwipers[i] = swiper;
                    return newThumbsSwipers;
                  });
                }}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                allowTouchMove={false}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true} 
                loop={true}
                navigation={{                 
                  nextEl: '.pagiBtn .swiper-button-next',
                  prevEl: '.pagiBtn .swiper-button-prev',                     
                }}
                pagination={{
                  el: ".pagiBtn .swiper-pagination",
                  type: 'fraction'
                }}                   
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}            
                className="c_swiper col-6 d-flex flex-column-reverse align-items-end"
              >
                {v.map((vvv, iii) => (
                  <SwiperSlide key={`SwiperSlideee${iii}`} className="thumbsSlider">
                    <div className="thumimg">
                      <img src={vvv.img} alt={vvv.alt}/>
                    </div>
                    <p className="thumtitle">{vvv.p.title}</p>
                    <p className="thumadress">{vvv.p.adress}</p>
                    <p className="thumtext">{vvv.p.text}</p>                                 
                  </SwiperSlide>
                ))} 
                {
                  // <>
                  //   <SwiperSlide className="thumbsSlider" key={`thumbSlide1`}>
                  //     <p className="thumtitle">1</p>
                  //     <p className="thumadress">1</p>
                  //     <p className="thumtext">1</p>     
                  //   </SwiperSlide>
                  //   <SwiperSlide className="thumbsSlider" key={`thumbSlide2`}>
                  //     <p className="thumtitle">2</p>
                  //     <p className="thumadress">2</p>
                  //     <p className="thumtext">2</p>     
                  //   </SwiperSlide>
                  //   <SwiperSlide className="thumbsSlider" key={`thumbSlide3`}>
                  //     <p className="thumtitle">3</p>
                  //     <p className="thumadress">3</p>
                  //     <p className="thumtext">3</p>     
                  //   </SwiperSlide>
                  //   <SwiperSlide className="thumbsSlider" key={`thumbSlide4`}>
                  //     <p className="thumtitle">4</p>
                  //     <p className="thumadress">4</p>
                  //     <p className="thumtext">4</p>     
                  //   </SwiperSlide>
                  //   <SwiperSlide className="thumbsSlider" key={`thumbSlide5`}>
                  //     <p className="thumtitle">5</p>
                  //     <p className="thumadress">5</p>
                  //     <p className="thumtext">5</p>     
                  //   </SwiperSlide>
                  // </>
                }
                <div className="pagiBtn d-flex justify-content-center align-items-center col-2">    
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>                                                                                   
                </div>             
              </Swiper>
            </SwiperSlide>
          ))}
          <div className="p-pagination-wrap d-flex flex-column justify-content-center position-absolute">
            <div className="placeSwiper-pagination d-flex flex-column justify-content-center"></div>              
            <Link to="#" className="swiper-pagination-bullet"><span>매장찾기</span></Link>  
          </div> 
        </Swiper>
      </div>
    </section>
  );
}

export default Withplace;