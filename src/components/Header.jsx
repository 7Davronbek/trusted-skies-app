import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Header = () => {

    const [number, setNumber] = useState(0);

    return (


        <>
            <div className="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header_h">
                                Fly The Trusted Skies
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <select className='class_option' name="" id="">
                                <option value="">Economy class</option>
                                <option value="">Premium Economy class</option>
                                <option value="">Business class</option>
                                <option value="">First class</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="head_way">
                                <div className="h_box">
                                    <div className="h_box_1">
                                        <img className='me-2' src="/img/header_fly.png" alt="" />
                                        <div className="h_box_1_text">
                                            <div className="h_box_1_text_h">From</div>
                                            {/* <div className="h_box_1_text_p">London</div> */}
                                        </div>
                                    </div>
                                    <img className='h_box_search' src="/img/go_back.png" alt="" />
                                    <div className="h_box_1">
                                        <img className='me-2' src="/img/header_fly.png" alt="" />
                                        <div className="h_box_1_text">
                                            <div className="h_box_1_text_h">To</div>
                                            {/* <div className="h_box_1_text_p">London</div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="h_box2">
                                    <div className="h_box_2">
                                        <img className='me-2' src="/img/header_cal.png" alt="" />
                                        <div className="h_box_2_text">
                                            <div className="h_box_2_text_h">OUTBOUND</div>
                                        </div>
                                    </div>
                                    <div className="h_box_2">
                                        <img className='me-2' src="/img/header_cal.png" alt="" />
                                        <div className="h_box_2_text">
                                            <div className="h_box_2_text_h">INBOUND</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h_box3">
                                    <div className="h_box3_main">
                                        <img className='me-2' src="/img/header_con.png" alt="" />
                                        <div className="h_box3_main_text">

                                            <div className="button_wrapper">
                                                <button onClick={() => setNumber(number > 1 ? number - 1 : 1)}>-</button>
                                                <h1>{number}</h1>
                                                <button onClick={() => setNumber(number + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h_search">
                                    <Link to="/Result"><img className='' src="/img/h_search.png" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="way_type">
                                <div className="way_type_h">One way</div>
                                <div className="way_type_h">Round trip</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header