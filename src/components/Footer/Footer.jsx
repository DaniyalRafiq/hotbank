import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-logo-content">
                            <div className="footer-logo">
                                <img src={Logo} alt="" />
                            </div>
                            <p>A new way to make the payments easy, reliable and secure.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="footer-content">
                            <h6>
                                Usefull Links
                            </h6>
                            <ul>
                                <li>Content</li>
                                <li>How it Works</li>
                                <li>Create</li>
                                <li>Explore</li>
                                <li>Terms & Services</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="footer-content">
                            <h6>
                                Community
                            </h6>
                            <ul>
                                <li>Help Center</li>
                                <li>Partners</li>
                                <li>Suggestions</li>
                                <li>Blog</li>
                                <li>Newsletters</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="footer-content">
                            <h6>
                                Usefull Links
                            </h6>
                            <ul>
                                <li>Our Partner</li>
                                <li>Become a Partner</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>Copyright 2021 HooBank. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
