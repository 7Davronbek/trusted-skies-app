import React from 'react'

const ConWe = () => {
    return (
        <>
            <div className="ConWe">
                <div className="container">
                    <div className="row con_we_reverse">
                        <div className="col-lg-6 con_we_box">
                            <div className="con_we_h">Want to drop us a quick note?</div>
                            <input className='con_we_input' placeholder='Name' type="text" />
                            <input className='con_we_input' placeholder='+998' type="text" />
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