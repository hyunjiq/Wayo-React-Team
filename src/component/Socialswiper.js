import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'; 
import socialDB from '../data/db.json'
import {Swieprdiv01,Swieprdiv02} from '../component/style'


const Banner = () => {
    return (
        <div className="col d-flex p-0 sp_je me-3">
        <Swiper className='jeSwiper'
            //spaceBetween={50}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
        >
            
            {
              socialDB["socialswiper"].map((v, i) => (
                
                  <SwiperSlide key={i}>
                            <Swieprdiv01></Swieprdiv01>
                            <Swieprdiv02>{v.text}</Swieprdiv02>
                            <img src={v.src} /> 
                    </SwiperSlide>
                ))
            }
            
        </Swiper>
         {/* <!-- 스와이퍼 이동버튼 --> */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
                            
        </div>  
    );
}

export default Banner;
