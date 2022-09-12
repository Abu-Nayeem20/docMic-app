import React from 'react';
import photo from "../../../../Images/pose_2.png";
import './Banner.css';
import bgImg from '../../../../Images/Ellipse5.png';
import doctor1 from '../../../../Images/Ellipse6.png';
import doctor2 from '../../../../Images/Ellipse7.png';
import doctor3 from '../../../../Images/Ellipse8.png';
import doctor4 from '../../../../Images/Ellipse9.png';
import rectangle1 from '../../../../Images/Rectangle4.png';
import rectangle2 from '../../../../Images/Rectangle5.png';

const rightBg = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

export default function Banner() {
  return (
    <div className='banner-section'>
      <div className='banner-bg'></div>
      <div className='banner-content'>
      <div className=''>
      <div className='row'>
          <div className='col-md-6'>
              <div className='title-text'>
                <h2>Your <span className='primary'>Health</span> Is Our <br/>
                   Top <span className='secondary'>Priority</span></h2>
                   <p className='pColor'>There are many variations of passages of lpsum <br/> available, but the majority hae suffered.</p>
              </div>
              <div className='meet-btn'>
                <button>Meet Our Specialist</button>
              </div>
              <div className='counter'>
                  <div className='row'>
                      <div className="col-4">
                        <h5 className='secondary'>262k+</h5>
                        <p>Recovered Patients</p>
                      </div>
                      <div className="col-4">
                      <h5 className='secondary'>96k+</h5>
                        <p>Satisfaction Rate</p>
                      </div>
                      <div className="col-4">
                      <h5 className='secondary'>86k+</h5>
                        <p>Expert Doctors</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='image-bg' style={rightBg}>
              <img className='image' src={photo} alt="" />
              </div>
              <div className='checkup-btn'>
                <button><i className="fa-solid fa-check"></i>Regular Checkup</button>
              </div>
              <div className='meet-doctor'>
                  <p>Meet Our Doctors</p>
                  <div className='doctors'>
                      <img src={doctor1} alt="Doctor" />
                      <img src={doctor2} alt="Doctor" />
                      <img src={doctor3} alt="Doctor" />
                      <img src={doctor4} alt="Doctor" />
                      <i className="fa-solid fa-plus"></i>
                  </div>
                  <img className='border' src={rectangle1} alt="Border" />
                  <br />
                  <img src={rectangle2} alt="Border" />
              </div>
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}
