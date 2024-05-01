import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import temMerber1 from '..//../assets/images/team/1.jpg';
import temMerber2 from '..//../assets/images/team/2.jpg';
import temMerber3 from '..//../assets/images/team/3.jpg';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
const TemBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="shadow-lg p-6 rounded-lg">
            <img src={temMerber1} alt="" />
            <h2 className="text-2xl font-bold">Car Engine Plug</h2>
            <p className="mt-2"> Engine Expert</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg p-6 rounded-lg">
            <img src={temMerber2} alt="" />
            <h2 className="text-2xl font-bold">Car Engine Plug</h2>
            <p className="mt-2"> Engine Expert</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg p-6 rounded-lg">
            <img src={temMerber3} alt="" />
            <h2 className="text-2xl font-bold">Car Engine Plug</h2>
            <p className="mt-2"> Engine Expert</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg p-6 rounded-lg">
            <img src={temMerber1} alt="" />
            <h2 className="text-2xl font-bold">Car Engine Plug</h2>
            <p className="mt-2"> Engine Expert</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TemBanner;
