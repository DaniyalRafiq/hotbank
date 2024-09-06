import React from 'react'
import './Solution.css'
import SolutionImg from '../../assets/salution-img.png'
const Solution = () => {
    return (
        <section className='solution' >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div class="about-us-content"><h4>Find a better card deal in few easy steps.</h4><p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p><button class="btn btn-theme"><span>Get Started</span></button></div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="solution-img img-box-content"><img src={SolutionImg} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution
