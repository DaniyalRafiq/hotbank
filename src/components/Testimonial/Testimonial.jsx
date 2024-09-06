import React from 'react'
import './Testimonial.css'
import Test_Icon from '../../assets/testi-icon.png'
import Aurthor_1 from '../../assets/autho-1.png'
import Aurthor_2 from '../../assets/autho-2.png'
import Aurthor_3 from '../../assets/autho-3.png'
const Testimonial = () => {
    return (
        <section className='testimonial'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonial-heading-main">
                            <h4>What people are saying about us</h4>
                            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="testimonial-card">
                            <div className="icon">
                                <img src={Test_Icon} alt="" />

                            </div>
                            <p>
                                Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                            </p>
                            <div className="testimonial-aurthor-name">
                                <div className="author-img">
                                    <img src={Aurthor_1} alt="" />

                                </div>
                                <div className="aurtho-name">
                                    <h6>Herman Jensen</h6>
                                    <p>Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="testimonial-card">
                            <div className="icon">
                                <img src={Test_Icon} alt="" />
                            </div>
                            <p>
                                Money makes your life easier. If you're lucky to have it, you're lucky.
                            </p>
                            <div className="testimonial-aurthor-name">
                                <div className="author-img">
                                    <img src={Aurthor_2} alt="" />
                                </div>
                                <div className="aurtho-name">
                                    <h6>Steve Mark</h6>
                                    <p>Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="testimonial-card">
                            <div className="icon">
                                <img src={Test_Icon} alt="" />

                            </div>
                            <p>
                                It is usually people in the money business, finance, and international trade that are really rich.
                            </p>
                            <div className="testimonial-aurthor-name">
                                <div className="author-img">
                                    <img src={Aurthor_3} alt="" />

                                </div>
                                <div className="aurtho-name">
                                    <h6>Kenn Gallagher</h6>
                                    <p>Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
