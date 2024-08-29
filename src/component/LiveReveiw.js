import React, { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviewData from '../data/review.json'
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay]);

const Review = () => {
  const [reviews, setReviews] = useState({ jongro: [], dongjak: [] });
  const [currentReviews, setCurrentReviews] = useState([]);
  

  useEffect(() => {
    setReviews(reviewData);
    setCurrentReviews(reviewData.jongro); // 초기에는 종로구 리뷰로 설정
  }, []);

  useEffect(() => {
    
    const loadMap = () => { 
      // Kakao Maps API 로드 후 실행
      const { kakao } = window;
     
      const centerLatLng = new kakao.maps.LatLng(37.52917322710707, 127.02080217910766); //종로구와 강남구 중심 임의로 지정
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: centerLatLng,
        level: 9
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      // 드래그 및 확대&스크롤 막기
      map.setDraggable(false);
      map.setZoomable(false);

      const adjustMapCenter = () => {
        map.setCenter(centerLatLng);
      };

      // 초기 중심 위치 조정
      adjustMapCenter();

      // 윈도우 리사이즈 이벤트에 대응하여 중심 조정
      window.addEventListener('resize', adjustMapCenter);

      
      const positions = [
        {
          title: '종로구',
          latlng: new kakao.maps.LatLng(37.570377, 126.985020),
          reviews: reviews.jongro
        },
        {
          title: '강남구',
          latlng: new kakao.maps.LatLng(37.487969454214145, 127.05658435821533),
          reviews: reviews.gangnam
        }
      ];

      const imageSrc = "/img/img_sh/catndog2.png";

      positions.forEach(position => {
        const imageSize = new kakao.maps.Size(50, 50);
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        const marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng,
          image: markerImage
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          setCurrentReviews(position.reviews);
        });
      });
    };

    

    if (window.kakao && window.kakao.maps) {
      loadMap();
    } else {
      const script = document.createElement('script');
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=cbf43aca99602e13060b091b108f14dc';
      script.onload = loadMap;
      document.head.appendChild(script);
    }

    
  }, [reviews]);


  return (
    <section id="live_reivew" className="container-lg margin">
      <div className='d-flex justify-content-between align-items-center'>
        <h2>실시간 후기</h2>  
        <Link to="#">
          <p className='m-0 fw-semibold d-none d-md-block'>지역별 더보기 +</p>
        </Link>
      </div>
    
      <div className="d-lg-inline-flex flex-md-column flex-lg-row img-fluid w-auto  align-items-center">
        <div id="map" className="rv1 me-3"></div>
        <div className="rv2 d-none d-md-block">
          <Swiper className="reviewswiper"
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false
            }}
            speed={15000}
            slidesPerView={'auto'}
            allowTouchMove={false}
          >
            {currentReviews.slice(0, 6).map((review, index) => (
              <SwiperSlide key={`index${index}`} className="review">
                <div className="d-flex align-items-center">
                  <img src={review.src} className="img" alt="프로필사진" />
                  <div className="mx-4">
                    <p className="nm">{review.nickname}</p>
                    <img src="/img/img_sh/star.png" className="star" alt="별점" />
                  </div>
                </div>
                <div className="my-3">
                  <p>{review.region}</p>
                  <p className="review_txt">{review.review}</p>
                </div>
                <Link to="#" className="morebtn">더보기</Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> 
        </div>
        
          {
            currentReviews.slice(0, 3).map((v,i)=>{
              return(
                <>
                <div className='m_review d-md-none' key={`index${i}`}>
                  <div className="d-flex align-items-center">
                    <img src={v.src} className="img" alt="프로필사진" />
                    <div className="mx-4">
                      <p className="nm">{v.nickname}</p>
                      <img src="/img/img_sh/star.png" className="star" alt="별점" />
                    </div>
                  </div>
                  <div className="my-3">
                    <p>{v.region}</p>
                    <p className="review_txt">{v.review}</p>
                    <Link className='more_txt'>더보기</Link>
                  </div>
                </div> 
                
                </>
              )
              
            })
            
          }
          <Link to="javascript:void(0)" className="morebtn d-md-none">지역별 더보기 +</Link>
       
    </section>
  );
};

export default Review;