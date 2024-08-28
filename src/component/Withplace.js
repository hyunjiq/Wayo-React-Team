import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules'; 
import data from '../data/db.json';
import { Link } from 'react-router-dom';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function Withplace() {
  const [thumbsSwipers, setThumbsSwipers] = useState([]);

  return (
    <section className="margin with_place">      
      <div className="place-bg container-lg d-flex justify-content-end position-relative">
        <h2 className='container-lg mb-0'>플레이스</h2>
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
                thumbs={{ swiper: thumbsSwipers[i] }} 
                breakpoints={{
                  0: {
                    loop:false
                  },
                  768: {
                    loop:true,
                    autoplay: {
                      delay: 4000,
                      disableOnInteraction: false,                      
                    }
                  }
                }}
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
                loop={true}
                freeMode={true}
                watchSlidesProgress={true}          
                navigation={{                 
                  nextEl: '.pagiBtn .swiper-button-next',
                  prevEl: '.pagiBtn .swiper-button-prev',                     
                }}
                pagination={{
                  el: ".pagiBtn .swiper-pagination",
                  type: 'fraction'
                }}
                breakpoints={{
                  0:{
                    slidesPerView: 1.5, 
                    centeredSlides: true,
                    loop:false,
                    allowTouchMove:true
                  },
                  576: {
                    slidesPerView: 2, 
                    centeredSlides: true,
                    loop:false,
                    allowTouchMove:true
                  },
                  768: {
                    slidesPerView: 2, 
                    centeredSlides: false,
                    loop:true
                  },
                  1400: {
                    slidesPerView: 3, 
                    centeredSlides: false,
                    loop:true
                  }
                }}                           
                className="c_swiper col-md-6 d-flex"
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
                <div className="pagiBtn d-flex justify-content-center align-items-center col-2">    
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>                                                                                   
                </div>             
              </Swiper>
            </SwiperSlide>
          ))}
          <div className="p-pagination-wrap d-flex justify-content-center">
            <div className="placeSwiper-pagination d-flex justify-content-center"></div>              
            <Link to="#" className="swiper-pagination-bullet"><span>매장찾기</span></Link>  
          </div> 
        </Swiper>
      </div>
    </section>
  );
}

export default Withplace;