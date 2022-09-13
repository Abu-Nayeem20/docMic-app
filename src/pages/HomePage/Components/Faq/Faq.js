import React from 'react';
import ellipse5 from '../../../../Images/Ellipse5.png';
import ellipse15Img from '../../../../Images/Ellipse15.png';
import defibrillator from '../../../../Images/Defibrillator.png';
import gloves from '../../../../Images/Gloves.png';
import pose8 from '../../../../Images/pose_8.png';
import bloodPressure from '../../../../Images/BloodPressure.png';
import image9 from '../../../../Images/image9.png';
import './Faq.css';

export default function Faq() {
  return (
    <div className='faq-section'>
        <div className="faq-content">
        <div className="row">
          <div className="col-md-5">
          <div className='faq-text'>
                <p>FAQ Questions</p>
                <h3>Get Your General Answer </h3>
                </div>
            <div className="faq-items">
            <div className="accordion accordion-flush" id="faqlist">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                            Get Your General Answer?
                            </button>
                        </h2>
                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                                Lorem Ipsum is simply dummy text of the printing.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                            Will I always see my own doctor?
                            </button>
                        </h2>
                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                                It is a long established fact that a reader will be distracted.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                            What is one Medical's care?
                            </button>
                        </h2>
                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                            What is evidence based medicine?
                            </button>
                        </h2>
                        <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                            What is an academic medical center?
                            </button>
                        </h2>
                        <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-2">
          <div className='faq-right'>
                    <img className='poseImgfaq' src={pose8} alt="PoseImg" />
                    <img className='bloodPressure' src={bloodPressure} alt="PoseImg" />
                    <img className='defibrillator' src={defibrillator} alt="PoseImg" />
                    <img className='gloves' src={gloves} alt="PoseImg" />
                    <img className='roundImg' src={ellipse5} alt="PoseImg" />
                    <img className='ellipse15Img' src={ellipse15Img} alt="PoseImg" />
                    <div className='get-solution'>
                    <button><img src={image9} alt="" />Get Solutions From <br /> Our Experts</button>
                </div>
                </div>
                
          </div>
        </div>
        </div>
    </div>
  )
}
