import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import "./portfolio.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { useFirestore } from "../../firebase/useFirestore";

const Portfolio = () => {
  const { items } = useFirestore("projects");
  console.log(items);
  return (
    <section className="portfolio container section" id="Portfolio">
      <h2 className="section__title" title="Portfolio Section Title">
        Portfolio
      </h2>
      <span className="section__subtitle">Most recent work</span>
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
        className="portfolio__container"
      >
        {items &&
          items.map(({ id, previewImage, title }) => {
            return (
              <SwiperSlide className="portfolio__card" key={id}>
                <img
                  src={previewImage && previewImage}
                  alt="Profile_image"
                  title={title}
                  className="portfolio__img"
                />
                <div className="portfolio__info">
                  <h3 className="portfolio__name">{title}</h3>

                  <Link
                    title={title + " Link"}
                    className="portfolio__demo"
                    to={`/demos/${id}`}
                  >
                    Demo{" "}
                    <UilArrowRight
                      className="portfolio__demo-icon"
                      size="1rem"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
