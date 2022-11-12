import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay } from "swiper";


const Reviews = () => {
    return (
        <>
            <div className="Reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 review_box_1">
                            <div className="reviews_h">Real People Instead of Online Engines</div>
                            <div className="reviews_p">There are no website booking engines here. With SkyLux Travel, you deal with a live person who understands your needs, negotiates exclusive offers with the airlines to provide attractive fares to you. Our fares and contracts are only available to us because of the relationship we have with the major airlines, all of which can only be legally supplied privately. This is how you get the absolute best price and value.</div>
                        </div>
                        <div className="col-md-6 review_box_2">
                            <div className="reviews_h">After-Hours Support Until You Return</div>
                            <div className="reviews_p">Expect customer service second to none – our experts are available during weekends and holidays to offer professional advice. Our free after-hours assistance means that if unexpected changes occur there will always be an expert on hand to provide immediate help.</div>
                        </div>
                    </div>
                    <div className="row ">
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
                                    767: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                               
                                    1100: {
                                        slidesPerView: 2,
                                        spaceBetween: 15,
                                    },
                                    1324: {
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
                                                    {/* <div className="reviews_address">2 days ago</div> */}
                                                </div>
                                                {/* <img className="rev_img" src="/img/BusMessage_stars.png" alt="" /> */}
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
                                                    {/* <div className="reviews_address">2 days ago</div> */}
                                                </div>
                                                {/* <img className="rev_img" src="/img/BusMessage_stars.png" alt="" /> */}
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
                                                    {/* <div className="reviews_address">2 days ago</div> */}
                                                </div>
                                                {/* <img className="rev_img" src="/img/BusMessage_stars.png" alt="" /> */}
                                                <div className="reviews_subs"> Pablo Devera continues to…</div>
                                                <div className="reviews_subs_2">  Pablo Devera continues to amaze.He has guided us through our annual search for excellent air service once again and I must say that he is extremely sensitive to our needs and does so in a most professional manner.He is an invaluable asset to your organization and should be commended for continuous quest for excellence.</div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </div>



                            </Swiper>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center mb-5 mt-5">
                            <a href="" className="reviews_other">Show all reviews</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Reviews