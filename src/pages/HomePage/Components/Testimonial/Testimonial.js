import React from 'react';
import bgImg from '../../../../Images/Ellipse16.png';
import img from '../../../../Images/Ikbal1.png';
import Ornament24 from '../../../../Images/Ornament24.png';
import Ornament57 from '../../../../Images/Ornament57.png';
import './Testimonial.css';

const leftBg = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "left",
  backgroundRepeat: "no-repeat",
  height: "600px",
  width: "100%",
  filter: "blur(200px)"
}

export default function Testimonial() {
  return (
    <div className='testimonial-section'>
        <div className='testimonial-bg' style={leftBg}></div>
        <div className='testimonial-content'>
        <div className='testimonial-text'>
          <p>Testimonial</p>
          <h3>What they say?</h3>
        </div>
        <div className='slider'>
           <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p>David Jeams</p>
                <p>Patient</p>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
              </div>
              <div className="carousel-item">
              <p>Shydur</p>
                <p>Patient</p>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
              </div>
              <div className="carousel-item">
              <p>Nayeem</p>
                <p>Patient</p>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <img className='boyImg' src={img} alt="img" />
          <img className='ornament24' src={Ornament24} alt="img" />
          <img className='ornament57' src={Ornament57} alt="img" />
        </div>
        </div>
    </div>
  )
}
