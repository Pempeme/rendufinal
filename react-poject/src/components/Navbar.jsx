import React from 'react'
import Logo from "../img/images.jpg"
import {Link} from "react-router-dom"


const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='container'>
                <div className='logo'>
                  <img src={Logo} alt=''/>
                  </div>
                <div className='links'>
                <Link className='link' to="/?cat=art">
                    <h6>ART</h6>
                </Link>
                <Link className='link' to="/?cat=alimentation">
                    <h6>ALIMENTATION</h6>
                </Link>
                <Link className='link' to="/?cat=science">
                    <h6>SCIENCE</h6>
                </Link>
                <Link className='link' to="/?cat=technologie">
                    <h6>TECHNOLOGIE</h6>
                </Link>
                <Link className='link' to="/?cat=cinema">
                    <h6>CINEMA</h6>
                </Link>
                <Link className='link' to="/?cat=design">
                    <h6>DESIGN</h6>
                </Link>
                <span>James</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className='link' to="/write">Write</Link>
                </span>
                 </div>
            </div>
        </div>
    )
}

export default Navbar