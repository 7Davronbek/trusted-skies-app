import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
// import InputMask from "react-input-mask";

const ConWe = () => {
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')
    const getPhone = async () => {
        await axios.get(`https://restcountries.com/v2/callingcode/${phone}`)
            .then((res) => {
                setImage(res.data)
            })
    }

    console.log();

    useEffect(() => {
        getPhone()
    }, [phone]);

    return (
        <>
            <div className="ConWe">
                <div className="container">
                    <div className="row con_we_reverse">
                        <div className="col-lg-6 con_we_box">
                            <div className="con_we_h">Want to drop us a quick note?</div>
                            <input className='con_we_input' placeholder='Name' type="text" />
                            <div className="wrap ">
                                <div className="img">{phone.length > 1
                                
                                && <img src={image && image[0].flag} alt="" />}</div>

                                {/* <InputMask
                                    mask="999"
                                    alwaysShowMask={true}
                                    maskChar="*"
                                    className='form-control w-50'
                                    required='required'
                                /> */}

                                <input className='con_we_input mt-0' placeholder='+' onChange={e => setPhone(e.target.value)} type="text" />
                            </div>
                            <input className='con_we_input' placeholder='Email' type="text" />
                            <input className='con_we_input_2' placeholder='Massage' type="text" />
                            <a href="" className="con_we_a">Send</a>
                            <div className="con_we_p">Privacy Policy </div>
                        </div>
                        <div className="col-lg-6 con_we_box_2">
                            <img className='con_we_box_2_img' src="/img/contact_img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConWe