import React from 'react';
import ellipse5Img from '../../../../Images/Ellipse5.png';
import ellipse15Img from '../../../../Images/Ellipse15.png';
import poseImg from '../../../../Images/pose_7.png';
import handSanitizerImg from '../../../../Images/HandSanitizer.png';
import maskerImg from '../../../../Images/Masker.png';
import thermoGun from '../../../../Images/ThermoGun.png';
import bgImg from '../../../../Images/Ellipse17.png';
import image5 from '../../../../Images/image5.png';
import image6 from '../../../../Images/image6.png';
import image7 from '../../../../Images/image7.png';
import image8 from '../../../../Images/image8.png';
import './Feature.css';


const rightBg = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  height: "600px",
  width: "100%",
  filter: "blur(200px)"
}

export default function Feature() {
  return (
    <div className='feature-section'>
      <div className='feature-bg' style={rightBg}></div>
       <div className='feature-content'>
            <div className="row">
            <div className="col-md-5">
                <div className='leftImg'>
                    <img className='poseImg' src={poseImg} alt="PoseImg" />
                    <img className='thermoGun' src={thermoGun} alt="PoseImg" />
                    <img className='handSanitizerImg' src={handSanitizerImg} alt="PoseImg" />
                    <img className='maskerImg' src={maskerImg} alt="PoseImg" />
                    <img className='roundImg' src={ellipse5Img} alt="PoseImg" />
                    <img className='ellipse15Img' src={ellipse15Img} alt="PoseImg" />
                </div>
              </div>
              <div className="col-md-7">
                <div className='feature-text'>
                <p>Our Hospital Feature</p>
                <h3>Make An Appointment Easy And Fast Services </h3>
                </div>
                <div className="feature-items">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-item">
                        <h6>24 Hours Doctor Support</h6>
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        <div>
                            <img className='feature-icon' src={image5} alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <h6>Exclusive Supports</h6>
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        <div>
                            <img className='feature-icon' src={image6} alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <h6>Friendly Environment </h6>
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        <div>
                            <img className='feature-icon' src={image7} alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <h6>24 Hours Nurse Support</h6>
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        <div className='feature-icon'>
                            <img src={image8} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
