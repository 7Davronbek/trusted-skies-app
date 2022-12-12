import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import { API_PATH } from '../tools/constants'

const Header = ({ setSearch }) => {

    const [old, setOld] = useState(1);
    const [adult, setAdult] = useState(0);
    const [young, setYoung] = useState(0);

    const [econom, setEconom] = useState('Economy class')
    const [date, setDate] = useState('')


    const [passanger, setPassanger] = useState(false);
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const [allFrom, setAllFrom] = useState([])
    const [allTo, setAllTo] = useState([])

    const [iata, setIata] = useState('')
    const [fromBool, setFromBool] = useState(false)
    const [toIata, setToIata] = useState('')
    const [toBool, setToBool] = useState(false)

    const [click, setClick] = useState(false)

    const [changeFrom, setChangeFrom] = useState('')
    const [changeIata, setChangeIata] = useState('')

    const changeFromTo = async () => {
        setChangeFrom(from)
        setFrom(to)
        setTo(from)

        setChangeIata(iata)
        setIata(toIata)
        setToIata(iata)
    }

    const navigate = useNavigate()

    const ticket = async () => {
        await axios.post(API_PATH + `/airport/ticket/`, {
            from: iata,
            to: toIata,
            date,
            // cabin_class: econom,
            adult: old,
            young: adult,
            baby: young
        })
            .then((res) => {
                setSearch(res.data)
                localStorage.setItem('SEARCH', JSON.stringify(res.data))
                localStorage.setItem("FROM", from)
                localStorage.setItem("TO", to)
                navigate('/Result', { replace: true })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {

        const getFrom = async () => {
            await axios.get(API_PATH + '/airport/search/?city=' + from)
                .then((res) => {
                    setAllFrom(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getFrom()
    }, [from])

    useEffect(() => {

        const getTo = async () => {
            await axios.get(API_PATH + '/airport/search/?city=' + to)
                .then((res) => {
                    setAllTo(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getTo()
    }, [to])

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
                            <select onChange={e => setEconom(e.target.value)} className='class_option' >
                                <option value="Economy class">Economy class</option>
                                <option value="Premium Economy class">Premium Economy class</option>
                                <option value="Business class">Business class</option>
                                <option value="First class">First class</option>
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
                                            <div className="h_box_1_text_h wrap">
                                                <input autoFocus placeholder='From' onChange={e => { setFrom(e.target.value); setFromBool(true) }} value={from} type="text" className="form-control" />
                                                <div className="miniContent">{iata}</div>
                                                <div className={`info ${fromBool && from.length > 0 ? 'active' : ''}`}>
                                                    {from.length > 0 && allFrom && allFrom.map((item, index) => (
                                                        <h6 onClick={(e, i) => { setFrom(item.name_en); setIata(item.iata); setFromBool(false); setClick(true) }} key={index}>{item.name_en}, <span>{item.parent_name_en}</span> <i>{item.iata}</i></h6>
                                                    ))}
                                                    {allFrom.length === 0 && <h5>Loading...</h5>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <img onClick={changeFromTo} className='h_box_search' src="/img/go_back.png" alt="" />

                                    <div className="h_box_1">
                                        <img className='me-2' src="/img/to.png" alt="" />
                                        <div className="h_box_1_text">
                                            <div className="h_box_1_text_h wrap">
                                                <input placeholder='To' onChange={e => { setTo(e.target.value); setToBool(true) }} value={to} type="text" className="form-control" />
                                                <div className="miniContent">{toIata}</div>
                                                <div className={`info ${toBool && to.length > 0 ? 'active' : ''}`}>
                                                    {to.length > 0 && allTo && allTo.map((item, index) => (
                                                        <h6 onClick={(e, i) => { setTo(item.name_en); setToIata(item.iata); setToBool(false) }} key={index}>{item.name_en}, <span>{item.parent_name_en}</span> <i>{item.iata}</i></h6>
                                                    ))}
                                                    {allTo.length === 0 && <h5>Loading...</h5>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h_box2">
                                    <div className="h_box_2">
                                        {/* <img className='me-2' src="/img/header_cal.png" alt="" /> */}
                                        <div className="h_box_2_text">
                                            {/* <div className="h_box_2_text_h">OUTBOUND</div> */}
                                            <input onChange={e => setDate(e.target.value)} type="date" placeholder="dd-mm-yyyy" format="yyyy-mm-dd" min="1997-01-01" max="2030-12-31" className='form-control ' name="" id="" />
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
                                    <div className="h_box3_main passanger">
                                        <img className='me-2' src="/img/header_con.png" alt="" />
                                        <button onClick={() => setPassanger(!passanger)} className={`h_box3_main_text btn d-flex align-items-center`}>

                                            <div className="">
                                                <h5>{old + adult + young} passanger{old + adult + young > 1 && 's'}</h5>
                                                <h6>{econom}</h6>
                                            </div>

                                            <i className='ms-3'><img src="img/down.svg" alt="" /></i>

                                            {/* <div className="button_wrapper">
                                                <button onClick={() => setNumber(number > 1 ? number - 1 : 1)}>-</button>
                                                <h1>{number}</h1>
                                                <button onClick={() => setNumber(number + 1)}>+</button>
                                            </div> */}
                                        </button>

                                        <div className={`wrap ${passanger ? 'active' : ''}`}>
                                            <div className="wrapContent mb-3">
                                                <div className='me-2'>
                                                    <h5>Old</h5>
                                                    <h6>more 12 old</h6>
                                                </div>
                                                <div className="button_wrapper">
                                                    <button disabled={old <= 1} className='btn' onClick={() => setOld(old > 1 ? old - 1 : 0)}>-</button>
                                                    <h1>{old}</h1>
                                                    <button className='btn' onClick={() => setOld(old + 1)}>+</button>
                                                </div>
                                            </div>

                                            <div className="wrapContent mb-3">
                                                <div className='me-2'>
                                                    <h5>Adult</h5>
                                                    <h6>from 2 to 12 years</h6>
                                                </div>
                                                <div className="button_wrapper">
                                                    <button disabled={adult <= 0} className='btn' onClick={() => setAdult(adult > 1 ? adult - 1 : 0)}>-</button>
                                                    <h1>{adult}</h1>
                                                    <button className='btn' onClick={() => setAdult(adult + 1)}>+</button>
                                                </div>
                                            </div>

                                            <div className="wrapContent mb-3">
                                                <div className='me-2'>
                                                    <h5>Young</h5>
                                                    <h6>less 2 years</h6>
                                                </div>
                                                <div className="button_wrapper">
                                                    <button disabled={young <= 0} className='btn' onClick={() => setYoung(young > 1 ? young - 1 : 0)}>-</button>
                                                    <h1>{young}</h1>
                                                    <button className='btn' onClick={() => setYoung(young + 1)}>+</button>
                                                </div>
                                            </div>

                                            {/* <input type="checkbox" name="" id="" /> */}

                                        </div>

                                    </div>
                                </div>
                                <div onClick={ticket} className="h_search">
                                    <img className='' src="/img/h_search.png" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-12">
                            <div className="way_type">
                                <div className="way_type_h">One way</div>
                                <div className="way_type_h">Round trip</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header