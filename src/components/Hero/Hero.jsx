import React from 'react'
import './Hero.css'
import discount_icon from '../../assets/Discount.svg'
import box_shadow_blur from '../../assets/blur-shadow.png'
import box_shadow_blur_right from '../../assets/blur-shadow-right.png'
import shade_shadow_blur_right from '../../assets/shade-blur-shadow.png'
import hero_img from '../../assets/hero-img.png'
import Arrow_Up from '../../assets/Arrow-Up.png'

const Hero = () => {
    return (
        <section className='hero' id='Hero' >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-content-main">
                            <div className="hero-content">
                                <div className="hero-long-tab">
                                    <img src={discount_icon} alt="" />
                                    <p>  <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</p>
                                </div>
                                <h1>The Next  <span>Generation </span>
                                    Payment Method.</h1>
                                <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                                    We examine annual percentage rates, annual fees.</p>
                                <div className="circle-box">
                                    <p> <span>Get</span> <img src={Arrow_Up} alt="" /></p> Started
                                </div>
                            </div>
                            <div className="hero-img img-box-content">
                                <img src={hero_img} alt="" />
                            </div>

                            <img src={box_shadow_blur} alt="" className="blur-img" />
                            <img src={box_shadow_blur_right} alt="" className="blur-img-left" />
                            <img src={shade_shadow_blur_right} alt="" className="shade-img-left" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bottom">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-4 col-md-6">
                            <div className="hero-bottom-card">
                                <h4>3800+</h4> 
                                <span>User Active</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="hero-bottom-card">
                                <h4>230+</h4> 
                                <span>TRUSTED BY COMPANY</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="hero-bottom-card not-after">
                                <h4>$230M+</h4> 
                                <span>TRANSACTION</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export { Hero }
