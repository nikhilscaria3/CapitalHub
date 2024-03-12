import React from "react"
import '../Styles/Navbar.css'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <div className="navmaincontainer">
                <div className="navsubcontainer">
                    <div className="navonepart">
                        <Link className="navhome" to='/'>Home</Link>
                        <Link className="navaboutus" to='/about'>About Us</Link>
                        <Link className="navcontactus" to="/contactus">Contact Us</Link>
                    </div>
                    <div className="navsecondpart">
                        <div className="navdonate">Donate</div>
                        <div className="navsignin">Sign In</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar