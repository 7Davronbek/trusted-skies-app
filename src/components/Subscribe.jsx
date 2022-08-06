import React from 'react'

const Subscribe = () => {
    return (
        <>
            <div className="Subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="subscribe_h">Subscribe to our newsletters</div>
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder='Name' className="subscribe_message" />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder='Email' className="subscribe_message" />
                        </div>
                        <div className="col-lg-4">
                            <a href="" className="subscribe_a">Subscribe</a>
                        </div>
                        <div className="col-12">
                            <div className="subscribe_p">By providing my e-mail and clicking "SUBSCRIBE" I agree to receive promotional newsletters. You can opt-out from our mailing list at any time.  </div>
                            <div className="subscribe_p">
                                100% Personal data secure storage guaranteed. You also agree to our Terms of Use and Privacy Policy.
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="subscribe_follow">Follow us</div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <a  className='subscribe_soc' href=""><img src="/img/Facebook.png" alt="" /></a>
                            <a  className='subscribe_soc' href=""><img src="/img/Instagram.png" alt="" /></a>
                            <a  className='subscribe_soc' href=""><img src="/img/Twitter.png" alt="" /></a>
                            <a  className='subscribe_soc' href=""><img src="/img/Inner.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe