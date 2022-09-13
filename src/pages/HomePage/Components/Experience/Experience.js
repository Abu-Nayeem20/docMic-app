import React from 'react';
import EllipseImg from "../../../../Images/Ellipse15.png";
import Ellipse5Img from "../../../../Images/Ellipse5.png";
import PlastrerImg from "../../../../Images/Plastrer.png";
import poseImg from "../../../../Images/pose_4.png";
import FirstAidImg from "../../../../Images/FirstAid.png";
import BloodPressureImg from "../../../../Images/BloodPressure.png";
import './Experience.css';


export default function Experience() {
  return (
    <div className='experience-section'>
        <div className='experience-content'>
            <div className="row">
              <div className="col-md-7">
                <div className='experience-text'>
                <p className='e-text'>16+ Years Experiences </p>
                <h3>We Are Always ensure Best Medical Treatment For Your Health</h3>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className='rightImg'>
                    <img className='poseImgex' src={poseImg} alt="PoseImg" />
                    <img className='plastrerImg' src={PlastrerImg} alt="PoseImg" />
                    <img className='firstAidImg' src={FirstAidImg} alt="PoseImg" />
                    <img className='bloodPressureImg' src={BloodPressureImg} alt="PoseImg" />
                    <img className='ellipseImg' src={EllipseImg} alt="PoseImg" />
                    <img className='roundImg' src={Ellipse5Img} alt="PoseImg" />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
