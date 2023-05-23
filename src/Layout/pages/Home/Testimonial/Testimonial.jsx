import React, { useEffect, useState } from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <SectionHeader
        heading={"Testimonials"}
        subHeading={"What Our Client Say"}
      ></SectionHeader>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="mx-16 my-24 flex flex-col items-center justify-center">
            <Rating style={{ maxWidth: 180 }} value={review.rating} />
              <p className="my-5">{review.details}</p>
              <h1 className="text-yellow-500 text-2xl font-bold">
                {review.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
