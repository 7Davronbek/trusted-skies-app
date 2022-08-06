import React, { useState } from 'react'
import { TabContent, TabPane, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const OffTowns = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <div className="OffTowns">
                <div className="container">
                    <NavItem>
                        <div className="row">
                            <div className="col-lg-5 col-7">
                                <div className="row">
                                    <div className="col-6">
                                        <NavLink
                                            className={`offtowns_box list-group-item list-group-item-action tab_list-link` + classnames({ active: activeTab === 1 })}
                                            onClick={() => { toggle(1) }} >

                                            <div className="offtown_name">Top countries</div>
                                        </NavLink>
                                    </div>
                                    <div className="col-6">
                                        <NavLink
                                            className={`offtowns_box list-group-item list-group-item-action tab_list-link` + classnames({ active: activeTab === 1 })}
                                            onClick={() => { toggle(2) }} >

                                            <div className="offtown_name">Top cities</div>
                                        </NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </NavItem>
                    <div className="row">
                        <div className="col-12">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId={1} className=''>

                                    <div className="row tab_box">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                    </div>
                                    <div className="row tab_box">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                    </div>
                                    <div className="row tab_box">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                    </div>
                                    <div className="row tab_box">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    London $1939</div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId={2} className=''>
                                    <div className="row tab_box">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Amerika $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Ozbekiston $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Dubai $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Bruklin $1939</div>
                                        </div>
                                    </div>
                                    <div className="row tab_box">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Amerika $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Ozbekiston $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Dubai $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Bruklin $1939</div>
                                        </div>
                                    </div>
                                    <div className="row tab_box">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Amerika $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Ozbekiston $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Dubai $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Bruklin $1939</div>
                                        </div>
                                    </div>
                                    <div className="row tab_box">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Amerika $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Ozbekiston $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Dubai $1939</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <div className="offtowns_a">    Bruklin $1939</div>
                                        </div>
                                    </div>



                                </TabPane>
                            </TabContent>
                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}

export default OffTowns