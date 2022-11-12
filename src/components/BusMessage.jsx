import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay } from "swiper";


const BusMessage = () => {
    return (
        <>
            <div className="BusMessage">
                <div className="container">
                    <div className="row ">
                        <div className="BusMessage_slider">
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
                                        <SwiperSlide >
                                            <div className="BusMessage_box">
                                                <div className="BusMessage_h_box">
                                                    <div className="BusMessage_h">Mr. PETER ANDRYSIAK</div>
                                                    <div className="BusMessage_date">2 days ago</div>
                                                </div>
                                                <img className="bus_mes_box" src="/img/BusMessage_stars.png" alt="" />
                                                <div className="BusMessage_h_2">
                                                    Pablo Devera continues to…
                                                </div>
                                                <div className="BusMessage_p">
                                                    Pablo Devera continues to amaze.He has guided us through our annual search for excellent air service once again and I must say that he is extremely sensitive to our needs and does so in a most professional manner.He is an invaluable asset to your organization and should be commended for continuous quest for excellence.
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                    <div className="col-4">
                                        <SwiperSlide >
                                            <div className="BusMessage_box">
                                                <div className="BusMessage_h_box">
                                                    <div className="BusMessage_h">Ms. HAMIDAH GHAZALLI</div>
                                                    <div className="BusMessage_date">8 hours ago</div>
                                                </div>
                                                <img className="bus_mes_box" src="/img/BusMessage_stars.png" alt="" />
                                                <div className="BusMessage_h_2">
                                                    I'm very satisfied w/the service
                                                </div>
                                                <div className="BusMessage_p">
                                                    I'm very satisfied w/the service, they're very professional, patient & kind.I will encourage my family and friends to use SKYLUX.They try thier best to help you out.They make me a happy customer.
                                                </div>
                                            </div>
                                        </SwiperSlide >
                                    </div>
                                    <div className="col-4">
                                        <SwiperSlide>
                                            <div className="BusMessage_box">
                                                <div className="BusMessage_h_box">
                                                    <div className="BusMessage_h">Ms. SUEZIE GORE</div>
                                                    <div className="BusMessage_date">3 days ago</div>
                                                </div>
                                                <img className="bus_mes_box" src="/img/BusMessage_stars.png" alt="" />
                                                <div className="BusMessage_h_2">
                                                    Mr Frank Hart
                                                </div>
                                                <div className="BusMessage_p">
                                                    Mr. Frank Hart is very efficient, full of knowledge. Explanation clearly to us. Most of all Response our questions and needs in time manner. I definitely doing future business with Mr. Hart again as well as my family and refer to our friends. Thank you Mr. Frank Hart. Suezie Gore and Wachira Wongyai
                                                </div>
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

export default BusMessage