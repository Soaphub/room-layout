import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";

const Upper = () => {
    
    const [screenSize, setScreenSize]= useState(false);

    // Checking the screen size
    useEffect(()=>{
        const mobileView= window.matchMedia("(max-width: 992px)");
        if( mobileView.matches){
            setScreenSize(true);
        }
    },[])

    // using use Effect for adding margin for the slider button
    useEffect(()=>{
        const divElement= document.querySelector(".first-col img");
        const buttonDiv= document.querySelector(".button-div");
        const divSecond = document.querySelector(".prev-button");
        if(divElement){
            const heigth= divElement.offsetHeight;
            const minusHeigth= divSecond.offsetHeight;
            if(heigth>0){
                buttonDiv.style.marginTop = Number(heigth - minusHeigth)+"px";
            }
        }   
    },[screenSize])

    return (
        <div id="carouselExample" className="carousel slide carousel-content">
            <div className="carousel-inner">

                {/* Carousle First silde */}
                <div className="carousel-item active">
                    <div className='row'>
                        <div className='col-lg-7 p-0 first-col'>
                            {screenSize === true ? 
                                <img src="./images/mobile-image-hero-1.jpg" alt="sildeImage"></img>:
                                <img src="./images/desktop-image-hero-1.jpg" alt="sildeImage"></img>
                            }
                            <Navbar/>
                        </div>
                        <div className='col-lg-5 second-col'>
                            <h1>Discover innovative ways to decorate</h1>
                            <p> We provide unmatched quality, comfort, and style for property owners across the country. 
                                Our experts combine form and function in bringing your vision to life. Create a room in your 
                                own style with our collection and make your property a reflection of you and what you love.
                            </p>
                            <h2>SHOP NOW &#10230;</h2>
                        </div>
                    </div>
                </div>
                
                {/* Carousle Second silde */}
                <div className="carousel-item">
                    <div className='row'>
                        <div className='col-lg-7 p-0 first-col'>
                            {screenSize === true ? 
                                <img src="./images/mobile-image-hero-2.jpg" alt="sildeImage"></img>:
                                <img src="./images/desktop-image-hero-2.jpg" alt="sildeImage"></img>
                            }
                            <Navbar/>
                        </div>
                        <div className='col-lg-5 second-col'>
                            <h1>We are available all across the globe</h1>
                            <p> With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                                store locator. Any questions? Don't hesitate to contact us today.
                            </p>
                            <h2>SHOP NOW &#10230;</h2>
                        </div>
                    </div>
                </div>
                
                {/* Carousle Third slide */}
                <div className="carousel-item">
                    <div className='row'>
                        <div className='col-lg-7 p-0 first-col'>
                            {screenSize === true ? 
                                <img src="./images/mobile-image-hero-3.jpg" alt="sildeImage"></img>:
                                <img src="./images/desktop-image-hero-3.jpg" alt="sildeImage"></img>
                            }
                            <Navbar/>
                        </div>
                        <div className='col-lg-5 second-col'>
                            <h1> Manufactured with the best materials</h1>
                            <p> Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                                experience in this industry, we understand what customers want for their home and office.
                            </p>
                            <h2>SHOP NOW &#10230;</h2>
                        </div>
                    </div>
                </div>

            </div>

            {/* carousel silde button */}
            <div className='button-div'>
                <button className="carousel-control-prev prev-button" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next next-button" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>   
    );
}

export default Upper;
