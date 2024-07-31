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
    // Kakao Maps API 로드 후 실행
    const loadMap = () => {
      const { kakao } = window;

      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new kakao.maps.LatLng(37.5665851, 126.9782038),
        level: 9
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      const positions = [
        {
          title: '종로구',
          latlng: new kakao.maps.LatLng(37.570377, 126.985020),
          reviews: reviews.jongro
        },
        {
          title: '동작구',
          latlng: new kakao.maps.LatLng(37.512983, 126.939906),
          reviews: reviews.dongjak
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
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=cbf43aca99602e13060b091b108f14dc';
      script.onload = loadMap;
      document.head.appendChild(script);
    }
  }, [reviews]);


  return (
    <section id="live_reivew" className="overflow-hidden">
      <h2 className="container">실시간 후기</h2>
      <div className="d-flex justify-content-between align-items-center">
        <div id="map" className="rv1 me-3"></div>
        <div className="rv2">
          <Link to="javascript:void(0)">
            <p className='text-end'>지역별 더보기 +</p>
          </Link>
          <Swiper
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false
            }}
            speed={15000}
            slidesPerView={3}
            spaceBetween={10}
            allowTouchMove={false}
            className="reviewswiper"
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
                <Link to="javascript:void(0)" className="morebtn">더보기</Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

  );
};

export default Review;