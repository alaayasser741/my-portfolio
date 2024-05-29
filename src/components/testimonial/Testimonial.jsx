import React from "react";
import "./testimonial.css";
// import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { useFirestore } from "../../firebase/useFirestore";

const Testimonial = () => {
  const { items: Data } = useFirestore("reviews","status", 'accepted');
  console.log(Data);

  return (
    <section className="testimonial container section" id="Testimonial">
      <h2 className="section__title" title="Testimonial Section Title">
        My Clients Say
      </h2>
      <span className="section__subtitle">Testimonial</span>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        className="testimonial__container"
      >
        {Data &&
          Data.map(({ id, avatar, name, review }) => {
            return (
              <SwiperSlide
                className="testimonial__card"
                key={id}
                title={"Comment from" + name}
              >
                <img
                  src={avatar ? avatar : "https://i.pinimg.com/564x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg"}
                  title={name}
                  className="testimonial__img"
                  alt="Profile"
                />
                <h3 className="testimonial__name">{name}</h3>
                <p className="testimonial__description">{review}</p>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
