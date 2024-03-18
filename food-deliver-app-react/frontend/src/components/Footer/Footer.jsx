import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto odit amet perspiciatis corporis alias nulla ad quam, laboriosam nobis quaerat?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                  <h2>Company</h2>
                  <ul>
                    <l1>Home</l1>
                    <l1>About us</l1>
                    <l1>Delivery</l1>
                    <l1>Privact policey</l1>
                  </ul>
            </div>
            <div className="footer-content-right">
                 <h2>Get in touch</h2>
                 <ul>
                    <li>+9121393879</li>
                    <li>contact@tomato.com</li>
                 </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            copyright all right reserved Bhushan
        </p>
    </div>
  )
}

export default Footer