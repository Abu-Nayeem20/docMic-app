import React from 'react';
import logo from '../../../../Images/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
       <div className="row">
        <div className="col-md-3">
          <div className='footer-1'>
              <img src={logo} alt="Logo" />
              <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
              <div className="social-media">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              </div>
          </div>
        </div>
        <div className="col-md-3">
            <div className="footer-2">
              <h4>Quick Links</h4>
              <a href="#">About Us</a>
              <a href="#">Our Pricing</a>
              <a href="#">Our Gallery</a>
              <a href="#">Appointment</a>
              <a href="#">Privacy Policy</a>
            </div>
        </div>
        <div className="col-md-3">
            <div className="footer-3 mt-4">
              <a href="#">Services</a>
              <a href="#">Our Doctors</a>
              <a href="#">Our Latest News</a>
              <a href="#">Careers</a>
              <a href="#">Contact Us</a>
            </div>
        </div>
        <div className="col-md-3">
            <div className="footer-4">
              <h4>Opening Hours</h4>
              <p><span className='primary'> Mon- Tue </span> 08:00 AM- 05:00 PM</p>
              <p><span className='primary'> Wed- Thu </span> 09:00 AM- 06:00 PM</p>
              <p><span className='primary'> Fri- Sat </span> 10:00 AM- 07:00 PM</p>
              <p><span className='primary'> Sunday </span> Emergency Only</p>
              <p><span className='primary'> Personal </span> Mon- 05:00 PM</p>
            </div>
        </div>
       </div>
       <p className='copy'>Copyright @222 Medicom All Rights Reserved</p>
    </div>
  )
}
