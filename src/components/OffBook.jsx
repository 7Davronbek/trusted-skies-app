import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const OffBook = () => {
    return (
        <>
            <div className="OffBook">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="offbook_name">
                                How to Book With Us?
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offbook_box">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="off_box_1">
                                        <img src="/img/offbook_box_1.png" alt="" />
                                        <div className="offbook_box_h">
                                            Get in Touch With an Expert
                                        </div>
                                        <div className="offbook_box_p">
                                            Call us 855-507-9770 or request a free quote via email. Let us know where you’re going.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="off_box">
                                        <img src="/img/offbook_box_2.png" alt="" />
                                        <div className="offbook_box_h">
                                            Receive Options in Your Inbox
                                        </div>
                                        <div className="offbook_box_p">
                                            Get expert itineraries within minutes in your inbox. You can adjust any layover and pick any airline.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="off_box_2">
                                        <img src="/img/offbook_box_3.png" alt="" />
                                        <div className="offbook_box_h">
                                            Book Safely and Fly
                                        </div>
                                        <div className="offbook_box_p">
                                            Pay securely online and receive your e-tickets via email. 100% Safe
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="offbook_name_2">
                                Why Book With Trusted skies?
                            </div>
                        </div>
                    </div>
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
                                                <div className="off_slider_p pt-3">
                                                    After-hours support until you return. Free 24/7 assistance to provide immediate help and answer your questions.

                                                </div>
                                                <div className="off_slider_p2">
                                                    Corporate travel management. At SkyLux we are committed to taking the hassle out of frequent business travel. Special business trip arrangements including exclusive business travel pricing.
                                                </div>
                                            </div>
                                            <div className="col-lg-8 off_book_img">
                                                <img className="h-100 p-lg-3 p-0 w-100" src="/img/off_swiper_1.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>  <div className="row">
                                        <div className="col-lg-4 off_slider_box">
                                            <div className="off_slider_p pt-3">
                                                After-hours support until you return. Free 24/7 assistance to provide immediate help and answer your questions.

                                            </div>
                                            <div className="off_slider_p2">
                                                Corporate travel management. At SkyLux we are committed to taking the hassle out of frequent business travel. Special business trip arrangements including exclusive business travel pricing.
                                            </div>
                                        </div>
                                        <div className="col-lg-8 off_book_img">
                                            <img className="h-100 p-lg-3 p-0 w-100" src="/img/off_swiper_1.png" alt="" />
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>  <div className="row">
                                        <div className="col-lg-4 off_slider_box">
                                            <div className="off_slider_p pt-3">
                                                After-hours support until you return. Free 24/7 assistance to provide immediate help and answer your questions.

                                            </div>
                                            <div className="off_slider_p2">
                                                Corporate travel management. At SkyLux we are committed to taking the hassle out of frequent business travel. Special business trip arrangements including exclusive business travel pricing.
                                            </div>
                                        </div>
                                        <div className="col-lg-8 off_book_img">
                                            <img className="h-100 p-lg-3 p-0 w-100" src="/img/off_swiper_1.png" alt="" />
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

export default OffBook