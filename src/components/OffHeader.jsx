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
                    SkyLuxTravel -
                    Comfort You Can Afford
                  </div>
                  <div className="OffHeader_box_p" data-swiper-parallax="-100">
                    Fly Business & First Class for Less Together with Our Experts: Book with Us & Save 50-77%* Off!
                  </div>
                  <div className="OffHeader_box">
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-6">
                <SwiperSlide>
                  <div className="OffHeader_box_h" data-swiper-parallax="-300">
                    SkyLuxTravel -
                    Comfort You Can Afford
                  </div>
                  <div className="OffHeader_box_p" data-swiper-parallax="-100">
                    Fly Business & First Class for Less Together with Our Experts: Book with Us & Save 50-77%* Off!
                  </div>
                  <div className="OffHeader_box">
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-6">
                <SwiperSlide>
                  <div className="OffHeader_box_h" data-swiper-parallax="-300">
                    SkyLuxTravel -
                    Comfort You Can Afford
                  </div>
                  <div className="OffHeader_box_p" data-swiper-parallax="-100">
                    Fly Business & First Class for Less Together with Our Experts: Book with Us & Save 50-77%* Off!
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