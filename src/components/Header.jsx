import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { API_PATH } from '../tools/constants'
// import { useEffect } from 'react'

const Header = () => {

    const [number, setNumber] = useState(0);
    // const [from, setFrom] = useState('')

    // const getFrom = async () => {
    //     await axios.get(API_PATH + '/search/?city=' + from)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    // useEffect(() => {
    //     getFrom()
    // }, [])

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
                                            <div className="h_box_1_text_h"><input placeholder='From' type="text" className="form-control" /></div>
                                            {/* <div className="h_box_1_text_p">London</div> */}
                                        </div>
                                    </div>
                                    <img className='h_box_search' src="/img/go_back.png" alt="" />
                                    <div className="h_box_1">
                                        <img className='me-2' src="/img/header_fly.png" alt="" />
                                        <div className="h_box_1_text">
                                            <div className="h_box_1_text_h"><input placeholder='To' type="text" className="form-control" /></div>
                                            {/* <div className="h_box_1_text_p">London</div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="h_box2">
                                    <div className="h_box_2">
                                        {/* <img className='me-2' src="/img/header_cal.png" alt="" /> */}
                                        <div className="h_box_2_text">
                                            {/* <div className="h_box_2_text_h">OUTBOUND</div> */}
                                            <input type="date" placeholder="dd-mm-yyyy" format="yyyy-mm-dd" min="1997-01-01" max="2030-12-31" className='form-control ' name="" id="" />
                                        </div>
                                    </div>
                                    {/* <div className="h_box_2">
                                        <img className='me-2' src="/img/header_cal.png" alt="" />
                                        <div className="h_box_2_text">
                                            <div className="h_box_2_text_h">INBOUND</div>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="h_box3">
                                    <div className="h_box3_main">
                                        <img className='me-2' src="/img/header_con.png" alt="" />
                                        <button className="h_box3_main_text btn d-flex align-items-center passanger">

                                            <div className="">
                                                <h5>1 passanger</h5>
                                                <h6>First class</h6>
                                            </div>

                                            <i className='ms-3'><img src="img/down.svg" alt="" /></i>

                                            <div className="wrap">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ea.
                                            </div>

                                            {/* <div className="button_wrapper">
                                                <button onClick={() => setNumber(number > 1 ? number - 1 : 1)}>-</button>
                                                <h1>{number}</h1>
                                                <button onClick={() => setNumber(number + 1)}>+</button>
                                            </div> */}
                                        </button>
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