import {useState, useEffect} from 'react';
import { SocialIcon } from 'react-social-icons';
import LogoWhite from 'assets/images/logo-white.png';

function Footer(){
  return(
    <footer id="footer">
      <div className="container">
        <div className="row social-links-wrap">
            <ul className="social-links">
              <li><SocialIcon url="#" network="facebook" bgColor="#ffffff" fgColor="#000000" /></li>
              <li><SocialIcon url="#" network="instagram" bgColor="#ffffff" fgColor="#000000" /></li>
              <li><SocialIcon url="#" network="twitter" bgColor="#ffffff" fgColor="#000000" /></li>
              <li><SocialIcon url="#" network="linkedin" bgColor="#ffffff" fgColor="#000000" /></li>
            </ul>
        </div>
        <div className="row footer-nav-links">
          <div className="col">
          <div className="footer-logo-wrap"><img src={LogoWhite} /></div>
          <ul>
            <li>Phone: <a href="tel:09320017520">0 9320017520</a></li>
            <li>Email: <a href="mailto:support@divingdog.com">support@divingdog.com</a></li>
            <li>Web: <a href="https://www.divingdog.com">www.divingdog.com</a></li>
          </ul>
          </div>
          <div className="col">
            <h1>Company</h1>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Become a host</a></li>
              <li><a href="#">Advertising</a></li>
            </ul>
          </div>
          <div className="col">
            <h1>Terms & Policies</h1>
            <ul>
              <li><a href="#">Privacy Statement</a></li>
              <li><a href="#">Cookie Statement</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">MSA Statement</a></li>
            </ul>
          </div>
          <div className="col">
            <h1>Help</h1>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Refund Timelines</a></li>
              <li><a href="#">Use a diving dog voucher</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>        
      </div>
      <div className="copyright-footer">
        <div className="container">
          <div className="row footer-description">
              <div className="footer-copyright">Copyright © 2022 DivingDog. All Rights Reserved.</div>
              <div className="footer-disclaimer">Disclaimer: Lorem Khaled Ipsum is a major key to success. Lion! You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! You smart, you loyal, you a genius. Give thanks to the most high. They don’t want us to eat. They don’t want us to eat. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth</div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer;
