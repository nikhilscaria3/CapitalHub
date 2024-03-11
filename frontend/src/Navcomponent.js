import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <div class="navmaincontainer">
                <div class="navsubcontainer">
                    <div class="navonepart">
                        <div class="navhome">Home</div>
                        <Link class="navaboutus" to='/about'>About Us</Link>
                        <Link class="navcontactus" to="/contactus">Contact Us</Link>
                    </div>
                    <div class="navsecondpart">
                        <div class="navdonate">Donate</div>
                        <div class="navsignin">Sign In</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar