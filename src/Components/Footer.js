import React from 'react';

const Footer = () => {
    return (
    <>
        <div className="col-lg">
            <img src='./images/image-about-dark.jpg' alt='about-image'></img>
        </div>
        <div className="col-lg-5 about-content">
            <h2>ABOUT OUR FURNITURE</h2>
            <p> Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
            </p>
        </div>
        <div className="col-lg">
            <img src='./images/image-about-light.jpg' alt='about-image'></img>
        </div>
    </>
    );
}

export default Footer;
