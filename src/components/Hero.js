import {useEffect, useState} from 'react';
import HeroImage from 'assets/images/HeroImage.jpg';

function Hero() {
    return(
      <>
        <div className="hero-section">
            <div className="hero-content-wrap">
                <div className="hero-text-wrap">Scuba Diving in<br/> Los Cabos.</div>
                <div className="hero-button-wrap"><a href="#" className="btn btn-primary">Explore More</a></div>
            </div>
        </div>
      </>
    );
};

export default Hero;
