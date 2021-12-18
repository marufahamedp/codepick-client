import React from 'react';
import './Hero.css';
import source from '../../../images/source.svg';
const Hero = () => {

    return (
        <div className="container">
             <div className="row">
              <div className="col-lg-6 d-flex  align-items-center bg ">
                <div className="a">
                <h1 className="fw-bold">
                Do you want to be a web developer / programmer?
                </h1>
                <p className="mt-3">
                Then of course you have to make small projects alongside learning. We are showing you some simple projects and giving you the codes of its projects, you can see and practice them if you want.
                </p>
                </div>
              </div>
              <div className="col-lg-6 bg d-flex justify-content-end align-items-center">
                <div className="banner-img">
                  <img src={source} alt="" />
                </div>
              </div>
             </div>
        </div>
    );
};

export default Hero;