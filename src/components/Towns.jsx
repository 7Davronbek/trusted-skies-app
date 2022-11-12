import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay } from "swiper";



const Towns = () => {
    return (
        <>
            <div className="Towns">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 text-center text-lg-start">
                            <div className="town_h">Best-Selling Business Class Flight Deals</div>
                            <div className="town_p">Save 50-77%* OFF on Business Class Flights with SkyLux Travel</div>

                            <a href="" className="town_a">See More</a>
                        </div>
                        <div className="col-lg-7">

                            <div className="town_slider">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2000,
                                    }}

                                    navigation={true}


                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1500: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },

                                    }}
                                    modules={[Pagination, Navigation, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img className="town_img" src="/img/town_1.png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="town_img" src="/img/town_2.png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="town_img" src="/img/town_3.png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="town_img" src="/img/town_1.png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="town_img" src="/img/town_2.png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="town_img" src="/img/town_3.png" alt="" /></SwiperSlide>


                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Towns