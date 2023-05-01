import React, { useState } from 'react';
import "../styles/navbar.css"

const Navbar = () => {
    const [close, setClose] = useState(false);

    const handleClcik= ()=>{
        const body= document.querySelector("body");
        setClose(prev=> !prev);
        if (close===false) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }

    return (
    <nav className={ close===false ? "navbar navbar-expand-lg" : "navbar navbar-expand-lg navbar-edit"}>
        <div className="container-fluid">

            {/* Toggle Button */}
            <button className="navbar-toggler toggle-btn" onClick={handleClcik} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                { close=== true ?
                    <img className="hamburger" src="./icons/icon-close.svg" alt="close"></img>  :
                    <img className="hamburger" src="./icons/icon-hamburger.svg" alt="hamburger"></img>
                }
            </button>

             {/* Navbar barnd     */}
            <a className="navbar-brand nav-title" href="/">room</a>

            {/* Navbar menu list */}
            <div className="collapse navbar-collapse navbar-menu" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">about</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">contact</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    );
}

export default Navbar;
