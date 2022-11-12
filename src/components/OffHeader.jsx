import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";


const OffHeader = () => {
  return (
    <>
      <div className="OffHeader">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <SwiperSlide>
                  <div className="OffHeader_box_h" data-swiper-parallax="-300">
                    Trusted Skies -
                    Comfort You Can Afford
                  </div>
                  <div className="OffHeader_box_p" data-swiper-parallax="-100">
                    Request and get best Economy(Coach) quotes in under 15 minutes
                  </div>
                  <div className="OffHeader_box">
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-6">
                <SwiperSlide>
                  <div className="OffHeader_box_h" data-swiper-parallax="-300">
                    Trusted Skies -
                    Comfort You Can Afford
                  </div>
                  <div className="OffHeader_box_p" data-swiper-parallax="-100">
                    Request and get best  Premium Economy quotes in under 15 minutes
                  </div>
                  <div className="OffHeader_box">
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-6">
                <SwiperSlide>
                  <div className="OffHeader_box_h" data-swiper-parallax="-300">
                    Trusted Skies -
                    Comfort You Can Afford
                  </div>
                  <div className="OffHeader_box_p" data-swiper-parallax="-100">
                    Request and get best First Class quotes in under 15 minutes
                  </div>
                  <div className="OffHeader_box">
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OffHeader_box_h" data-swiper-parallax="-300">
                    Trusted Skies -
                    Comfort You Can Afford
                  </div>
                  <div className="OffHeader_box_p" data-swiper-parallax="-100">
                    Request and get best  Business Class quotes in under 15 minutes
                  </div>
                  <div className="OffHeader_box">
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </div>

        </Swiper>
      </div>
    </>
  )
}

export default OffHeader