import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer()
{
    return(
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify para">The birth place of futuristic engineering of the future world with creamy bunch of inquisitive brains.With well equipped laboraties and qualified staff where experience speaks,the department act as a base on which talented and innovative circuitry is built.</p>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6 className='head'>Events</h6>
              <ul className="footer-links">
                <li>Mr.Engineer</li>
                <li>PPT</li>
                <li>Code Debugging</li>
                <li>Web Designing</li>
                <li>Googling</li>
                <li>Marketing</li>
              </ul>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="#">Register</Link></li>
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by<a href="https://gcesalem.edu.in/20/department-computer-science-and-engineering" target="_blank" rel="noreferrer"> CSE</a>.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://instagram.com/progenit22?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                <li><a className="twitter" href="mailto:progenit22@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                <li><a className="dribbble" href="https://wa.me/919047067413" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp" ></i></a></li>
              </ul>
            </div>
          </div>
        </div>
  </footer>
    
    )
}

export default Footer;