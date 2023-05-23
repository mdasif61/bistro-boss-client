import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";

import { Pagination } from "swiper";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

const Category = () => {
  return (
    <section>

      <SectionHeader
      heading={'order online'}
      subHeading={'From 11.00am to 10.00pm'}
      ></SectionHeader>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="uppercase text-white font-bold text-2xl -mt-10 text-center">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="uppercase text-white font-bold text-2xl -mt-10 text-center">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="uppercase text-white font-bold text-2xl -mt-10 text-center">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="uppercase text-white font-bold text-2xl -mt-10 text-center">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="uppercase text-white font-bold text-2xl -mt-10 text-center">
            soups
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
