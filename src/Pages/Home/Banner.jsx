import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={32}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper grid justify-end"
      >
        <SwiperSlide>
          <div className=" bg-[linear-gradient(90.00deg,rgb(21,21,21),rgba(21,21,21,0)100%),url(/banner/1.jpg)]   md:h-[420px] h-[280px] lg:h-[570px] bg-center bg-cover grid justify-center items-center">
            <div className="lg:w-1/2 md:w-2/3 px-14 ">
              <h2 className="md:text-4xl text-3xl lg:text-6xl text-white font-bold lg:leading-normal md:leading-normal">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-6 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(90.00deg,rgb(21,21,21),rgba(21,21,21,0)100%),url(/banner/2.jpg)]   md:h-[420px] h-[280px] lg:h-[570px] bg-center bg-cover grid justify-center items-center">
            <div className="lg:w-1/2 md:w-2/3 px-14 ">
              <h2 className="md:text-4xl text-3xl lg:text-6xl text-white font-bold lg:leading-normal md:leading-normal">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-6 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(90.00deg,rgb(21,21,21),rgba(21,21,21,0)100%),url(/banner/3.jpg)]   md:h-[420px] h-[280px] lg:h-[570px] bg-center bg-cover grid justify-center items-center">
            <div className="lg:w-1/2 md:w-2/3 px-14 ">
              <h2 className="md:text-4xl text-3xl lg:text-6xl text-white font-bold lg:leading-normal md:leading-normal">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-6 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(90.00deg,rgb(21,21,21),rgba(21,21,21,0)100%),url(/banner/4.jpg)]   md:h-[420px] h-[280px] lg:h-[570px] bg-center bg-cover grid justify-center items-center">
            <div className="lg:w-1/2 md:w-2/3 px-14 ">
              <h2 className="md:text-4xl text-3xl lg:text-6xl text-white font-bold lg:leading-normal md:leading-normal">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-6 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(90.00deg,rgb(21,21,21),rgba(21,21,21,0)100%),url(/banner/5.jpg)]   md:h-[420px] h-[280px] lg:h-[570px] bg-center bg-cover grid justify-center items-center">
            <div className="lg:w-1/2 md:w-2/3 px-14 ">
              <h2 className="md:text-4xl text-3xl lg:text-6xl text-white font-bold lg:leading-normal md:leading-normal">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-6 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(90.00deg,rgb(21,21,21),rgba(21,21,21,0)100%),url(/banner/6.jpg)]   md:h-[420px] h-[280px] lg:h-[570px] bg-center bg-cover grid justify-center items-center">
            <div className="lg:w-1/2 md:w-2/3 px-14 ">
              <h2 className="md:text-4xl text-3xl lg:text-6xl text-white font-bold lg:leading-normal md:leading-normal">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-6 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
