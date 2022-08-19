import {useEffect, useState} from 'react';
import EmailIcon from '../assets/images/Email-icon.png';

function SubscribeBox(){
  return(
    <>
      <div className="subscribe-box">
        <h1>Subscribe & Get 20% OFF</h1>
        <div className="input-group mb-3 subscribe-box-form">
          <span className="input-group-text"><img src={EmailIcon}/></span>
          <input type="text" className="form-control" placeholder="Email Address*" aria-label="Email Address*" aria-describedby="sign-up" />
          <button className="btn btn-outline-secondary" type="button" id="sign-up">Sign Up</button>
        </div>
        <p>I want emails from Lonely Planet with travel and product information, promotions, advertisements, third-party offers, and surveys. I can unsubscribe any time using the unsubscribe link at the end of all emails. <a href="#">Contact Lonely Planet</a> or view <a href="#">Our Privacy Policy.</a></p>
      </div>
    </>);
}

export default SubscribeBox;
