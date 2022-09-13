import React from 'react';
import './Services.css'

export default function Services() {
  return (
    <div className='service-section'>
        <div className='service-title'>
          <p>Our Services</p>
          <h4>Services For Your Health</h4>
        </div>
        <div className='service-content'>
          <div className='row'>
            <div className="col-md-3">
              <div className='ser-item'>
              <p>Cardiology</p>
              <p>Seduahag perspiciati under omnised atused error.</p>
              <a href="#">Explore Now</a>
              <div className='item-icon'>
              <i className="fa-sharp fa-solid fa-heart-pulse"></i>
              </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className='ser-item'>
              <p>Monthly Check Up</p>
              <p>Seduahag perspiciati under omnised atused error.</p>
              <a href="#">Explore Now</a>
              <div className='item-icon'>
              <i className="fa-solid fa-clipboard-check"></i>
              </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className='ser-item'>
              <p>Dental Care</p>
              <p>Seduahag perspiciati under omnised atused error.</p>
              <a href="#" className='primary'>Explore Now</a>
              <div className='item-icon'>
              <i className="fa-solid fa-tooth"></i>
              </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className='ser-item'>
              <p>Opthalmology</p>
              <p>Seduahag perspiciati under omnised atused error.</p>
              <a href="#">Explore Now</a>
              <div className='item-icon'>
              <i className="fa-solid fa-calendar-plus"></i>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
