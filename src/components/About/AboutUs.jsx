import React from 'react'
import './AboutUs.css'
import AboutUsIcon from '../../assets/about-icon-1.png'
import AboutUsIcon_2 from '../../assets/about-icon-2.png'
import AboutUsIcon_3 from '../../assets/about-icon-3.png'
const AboutUs = () => {
    return (
        <section className='about-us' id='About' >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-us-content">
                            <h4>You do the business, we’ll handle the money.</h4>
                            <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                            <button className="btn btn-theme">
                                <span>Get Started</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-us-card-main">
                            <div className="about-us-card">
                                <div className="ic{AboutUsIcon}">
                                    <img src={AboutUsIcon} alt="" />
                                </div>
                                <div className="about-card-content">
                                    <h6>Rewards</h6>
                                    <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                                </div>
                            </div>
                            <div className="about-us-card">
                                <div className="icon">
                                    <img src={AboutUsIcon_2} alt="" />
                                </div>
                                <div className="about-card-content">
                                    <h6>100% Secured</h6>
                                    <p>We take proactive steps make sure your information and transactions are secure.</p>
                                </div>
                            </div>
                            <div className="about-us-card">
                                <div className="icon">
                                    <img src={AboutUsIcon_3} alt="" />
                                </div>
                                <div className="about-card-content">
                                    <h6>Balance Transfer</h6>
                                    <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
