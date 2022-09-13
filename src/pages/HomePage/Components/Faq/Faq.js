import React from 'react';
import ellipse5 from '../../../../Images/Ellipse5.png';
import ellipse15Img from '../../../../Images/Ellipse15.png';
import defibrillator from '../../../../Images/Defibrillator.png';
import gloves from '../../../../Images/Gloves.png';
import pose8 from '../../../../Images/pose_8.png';
import bloodPressure from '../../../../Images/BloodPressure.png';
import './Faq.css';

export default function Faq() {
  return (
    <div className='faq-section'>
        <div className="row">
          <div className="col-md-7">
          <div className='faq-text'>
                <p>FAQ Questions</p>
                <h3>Get Your General Answer </h3>
                </div>
            <div className="faq-items">
            <div class="accordion accordion-flush" id="faqlist">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                            Get Your General Answer?
                            </button>
                        </h2>
                        <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                Lorem Ipsum is simply dummy text of the printing.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                            Will I always see my own doctor?
                            </button>
                        </h2>
                        <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                It is a long established fact that a reader will be distracted.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                            What is one Medical's care?
                            </button>
                        </h2>
                        <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                            What is evidence based medicine?
                            </button>
                        </h2>
                        <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                            What is an academic medical center?
                            </button>
                        </h2>
                        <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-5">
          <div className='faq-right'>
                    <img className='poseImg' src={pose8} alt="PoseImg" />
                    <img className='bloodPressure' src={bloodPressure} alt="PoseImg" />
                    <img className='defibrillator' src={defibrillator} alt="PoseImg" />
                    <img className='gloves' src={gloves} alt="PoseImg" />
                    <img className='roundImg' src={ellipse5} alt="PoseImg" />
                    <img className='ellipse15Img' src={ellipse15Img} alt="PoseImg" />
                </div>
          </div>
        </div>
    </div>
  )
}
