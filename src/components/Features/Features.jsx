import React from 'react'
import './Features.css'
import FeaturesImg from '../../assets/features-img.png'
import AppleStore from '../../assets/apple-store.png'
import GooglePlay from '../../assets/google-play.png'
const Features = () => {
    return (
        <section className='features'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="features-img img-box-content">
                            <img src={FeaturesImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="features-content">
                            <h4>Easily control your billing & invoicing.</h4>
                            <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                            <div className="features-img-main">
                                <img src={AppleStore} alt="" />
                                <img src={GooglePlay} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
