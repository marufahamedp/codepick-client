import React from 'react';
import Projects from '../../Projects/Projects/Projects';
import Footer from '../../Shared/Footer/Footer/Footer';
import NavBar from '../../Shared/Header/NavBar/NavBar';
import Reviews from '../../Shared/Reviews/Reviews/Reviews';
import Hero from '../Hero/Hero';
import HomeBlogs from '../HomeBlogs/HomeBlogs/HomeBlogs';
import HomeProjects from '../HomeProjects/HomeProjects';
import HomeServices from '../HomeServices/HomeServices/HomeServices';
import Services from '../Services/Services/Services'
const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <h1 className="text-center fw-bold mb-5">OUR Services</h1>
            <HomeServices></HomeServices>
            <h1 className="text-center fw-bold mt-5">OUR PROJECTS</h1>
            <HomeProjects></HomeProjects>
            <h1 className="text-center fw-bold mt-5">OUR BLOGS</h1>
            <HomeBlogs></HomeBlogs>
            <h1 className="text-center fw-bold mt-5">OUR Reviews</h1>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;