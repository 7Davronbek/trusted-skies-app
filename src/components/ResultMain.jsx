import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay } from "swiper";

const ResultMain = () => {
    return (
        <>
            <div className="ResultMain">
                <div className="container">
                    <div className="row">
                        <div className="reviews_slider">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 3000,
                                }}

                                navigation={true}


                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 15,
                                    },
                                }}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                <div className="row">
                                    <div className="col-4">
                                        <SwiperSlide>
                                            <div className="reviews_box">
                                                <div className="review_dates">
                                                    <div className="reviews_name">Mr. PETER ANDRYSIAK</div>
                                                </div>
                                                <div className="reviews_subs"> Pablo Devera continues to…</div>
                                                <div className="reviews_subs_2">  Pablo Devera continues to amaze.He has guided us through our annual search for excellent air service once again and I must say that he is extremely sensitive to our needs and does so in a most professional manner.He is an invaluable asset to your organization and should be commended for continuous quest for excellence.</div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                    <div className="col-4">
                                        <SwiperSlide>
                                            <div className="reviews_box">
                                                <div className="review_dates">
                                                    <div className="reviews_name">Mr. PETER ANDRYSIAK</div>
                                                </div>
                                                <div className="reviews_subs"> Pablo Devera continues to…</div>
                                                <div className="reviews_subs_2">  Pablo Devera continues to amaze.He has guided us through our annual search for excellent air service once again and I must say that he is extremely sensitive to our needs and does so in a most professional manner.He is an invaluable asset to your organization and should be commended for continuous quest for excellence.</div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                    <div className="col-4">
                                        <SwiperSlide>
                                            <div className="reviews_box">
                                                <div className="review_dates">
                                                    <div className="reviews_name">Mr. PETER ANDRYSIAK</div>
                                                </div>
                                                <div className="reviews_subs"> Pablo Devera continues to…</div>
                                                <div className="reviews_subs_2">  Pablo Devera continues to amaze.He has guided us through our annual search for excellent air service once again and I must say that he is extremely sensitive to our needs and does so in a most professional manner.He is an invaluable asset to your organization and should be commended for continuous quest for excellence.</div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </div>



                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default ResultMain