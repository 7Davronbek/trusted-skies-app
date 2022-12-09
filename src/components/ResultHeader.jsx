import React from 'react'
import InputMask from "react-input-mask";

const ResultHeader = ({ search }) => {
    console.log(search);
    return (
        <>
            <div className="ResultHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto ResHead_main_1 pt-5">
                            {/* <div className="res_1_p">Save extra $300 withYour Discount ID SKY950-4949</div> */}
                            <div className="res_1_box">
                                <div className="row justify-content-center flex-column flex-md-row align-content-center">
                                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                                        <div className="res_1_name">
                                            {localStorage.getItem('FROM').length > 0 ? localStorage.getItem('FROM') : 'Loading...'}
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        <div className="res_1_img">
                                            <img src="/img/header_air.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                                        <div className="res_1_name">
                                            {localStorage.getItem('TO').length > 0 ? localStorage.getItem('TO') : 'Loading...'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="res_1_box_2">
                                <div className="res_1_box_2_1">
                                    <div className="res_1_box_2_1_h">Deal of the Day</div>
                                    <div className="res_1_box_2_1_p">Limited time offer, ends on 29 июля.</div>
                                </div>
                                <div className="res_1_box_2_2">
                                    <div className="res_1_box_2_2_h">
                                        $ {search.list[0]?.amount ? search.list[0].amount : 0}
                                    </div>
                                    <div className="res_1_box_2_2_p mt-2">
                                        {search.list[0]?.class_type ? search.list[0].class_type : 0}
                                    </div>
                                </div>
                            </div>
                            <h5>Amount of tickets: {search ? search.count : 0}</h5>
                            <div className="res_1_box_3">
                                {search && search.list.map((item, index) => (
                                    <div key={index} className="res_1_box_3_reys">
                                        <div>
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div>
                                            <h4>From here to there</h4>
                                        </div>
                                        <div className="res_1_box_3_text">
                                            <div className="res_1_box_3_text_h">
                                                $ {item.amount}
                                            </div>
                                            <div className="res_1_box_3_text_p">
                                                {item.class_type}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="res_1_box_3_reys">
                                    <img src="/img/res_reys_1.png" alt="" />
                                    <div className="res_1_box_3_text">
                                        <div className="res_1_box_3_text_h">
                                            $ 2565
                                        </div>
                                        <div className="res_1_box_3_text_p">
                                            Buisiness class, r/t, total
                                        </div>
                                    </div>
                                </div>
                                <div className="res_1_box_3_reys">
                                    <img src="/img/res_reys_2.png" alt="" />
                                    <div className="res_1_box_3_text">
                                        <div className="res_1_box_3_text_h">
                                            $ 2847
                                        </div>
                                        <div className="res_1_box_3_text_p">
                                            Buisiness class, r/t, total
                                        </div>
                                    </div>
                                </div>
                                <div className="res_1_box_3_reys">
                                    <img src="/img/res_reys_3.png" alt="" />
                                    <div className="res_1_box_3_text">
                                        <div className="res_1_box_3_text_h">
                                            $ 3222
                                        </div>
                                        <div className="res_1_box_3_text_p">
                                            Buisiness class, r/t, total
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 ResHead_main_2">
                            <div className="row ">
                                <div className="col-12">
                                    <div className="main_2_h">Get free quotes within 5 minutes</div>
                                </div>
                                <div className="col-12">
                                    <input className='main_2_input' type="text" placeholder='Name' />
                                </div>
                                <div className="col-12">

                                    <InputMask
                                        mask="+\9\9\8\ (99) 999-99-99"
                                        alwaysShowMask={true}
                                        maskChar="_"
                                        className='main_2_input'
                                        required
                                        placeholder='Telefon raqamingizni kiriting...'
                                    />

                                    {/* <input className='main_2_input' type="text" placeholder='+998' /> */}
                                </div>
                                <div className="col-12">
                                    <input className='main_2_input' type="text" placeholder='Email' />
                                </div>
                                {/* <div className="col-12">
                  <select className='main_2_input' name="" id="">
                    <option value="">Round Trip</option>
                  </select>
                </div>
                <div className="col-12">
                  <select className='main_2_input' name="" id="">
                    <option value="">Business</option>
                  </select>
                </div> */}

                                {/* <div className="col-6">
                  <input className='main_2_input' type="text" placeholder='From ' />
                </div>
                <div className="col-6">
                  <input className='main_2_input' type="text" placeholder='To ' />
                </div>
                <div className="col-6">
                  <input className='main_2_input' type="text" placeholder='Depart ' />
                </div>
                <div className="col-6">
                  <input className='main_2_input' type="text" placeholder='Arrive ' />
                </div> */}
                            </div>
                            <div className="col-10">
                                <div className="main_2_book">
                                    Book Now
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="main_2_policy">
                                    Privacy Policy
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultHeader