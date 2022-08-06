import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const AboutHeader = () => {
    return (
        <>
            <div className="AboutHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="aboutheader_h">
                                Trustedskies.com provides one of the best service and price
                            </div>
                        </div>
                    </div>
                </div>
                <img className='about_header_img d-flex m-auto' src="/img/about_head.png" alt="" />

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="off_slider">
                                <Swiper
                                    pagination={{
                                        type: "fraction",
                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="row">
                                            <div className="col-lg-4 off_slider_box">
                                                <div className="about_slider_h pt-3">
                                                    We make travel accessible for everyone
                                                </div>
                                                <div className="about_slider_p ">
                                                    That’s why we’re breaking down the barriers to low-cost travel, making the world open and accessible for all.

                                                </div>
                                                <div className="about_slider_p2">
                                                    We believe everyone should be free to experience the world. For us, there’s no greater freedom than choosing where you want to be and how you want to get there.
                                                </div>
                                            </div>
                                            <div className="col-lg-8 about_header_box">
                                                <img className="h-100 p-lg-3 p-0 w-100" src="/img/about_img_1.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="row">
                                            <div className="col-lg-4 off_slider_box">
                                                <div className="about_slider_h pt-3">
                                                    We make travel accessible for everyone
                                                </div>
                                                <div className="about_slider_p ">
                                                    That’s why we’re breaking down the barriers to low-cost travel, making the world open and accessible for all.

                                                </div>
                                                <div className="about_slider_p2">
                                                    We believe everyone should be free to experience the world. For us, there’s no greater freedom than choosing where you want to be and how you want to get there.
                                                </div>
                                            </div>
                                            <div className="col-lg-8 about_header_box">
                                                <img className="h-100 p-lg-3 p-0 w-100" src="/img/about_img_1.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="row">
                                            <div className="col-lg-4 off_slider_box">
                                                <div className="about_slider_h pt-3">
                                                    We make travel accessible for everyone
                                                </div>
                                                <div className="about_slider_p ">
                                                    That’s why we’re breaking down the barriers to low-cost travel, making the world open and accessible for all.

                                                </div>
                                                <div className="about_slider_p2">
                                                    We believe everyone should be free to experience the world. For us, there’s no greater freedom than choosing where you want to be and how you want to get there.
                                                </div>
                                            </div>
                                            <div className="col-lg-8 about_header_box">
                                                <img className="h-100 p-lg-3 p-0 w-100" src="/img/about_img_1.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHeader