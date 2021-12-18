import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import NavBar from '../../Shared/Header/NavBar/NavBar';
import code from '../../../images/maruf-hero.png';
const About = () => {
    return (
        <div>
            <NavBar></NavBar>
           <div className="container">
           <h1 className="text-center">About US</h1>
            <div className="row">
                <div className="col-lg-6">
                    <img className='w-100' src={code} alt="" />
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                <div className="a">
                <p>
                We will try to explain the difficult problems easily.So let's grow some coding knowledge in simple way
                </p>
                <div className="text-center">
                <button className="codepickjs-btn w-50">
                    Read More
                </button>
                </div>
                </div>
                </div>
            </div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default About;