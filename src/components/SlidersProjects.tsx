import React from "react";
import CardProjects from "./CardProjects";
import projects from "../mocks/ProjectsMocks";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

type CardData = {
  id: string;
  type: string;
  title: string;
  url: string;
  stack: [];
  imgProject: string;
  language: string;
};

export default function Sliders({ type }: any) {
  return (
    <div>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        slidesPerGroup={1}
        breakpoints={{
          // when window width is >= 425px
          425: {
            slidesPerView: 1.3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            spaceBetween: 10,
            slidesPerView: 2.5,
          },
          1280: {
            slidesPerGroup: 2,
            slidesPerView: 3.2,
          },
        }}
         
        navigation
      >
        {projects.map((element: any) => {
          if (element.type === type) {
            return (
              <SwiperSlide key={element.id}>
                <CardProjects data={element} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}
