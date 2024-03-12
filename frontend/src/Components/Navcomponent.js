import React from "react"
import '../Styles/Navbar.css'
import { Link, useLocation } from "react-router-dom"
const Navbar = () => {

    const location = useLocation();

    const getLinkStyle = (path) => {
      // Define the default font weight and the font weight for the current page
      const defaultFontWeight = 100;
      const currentPageFontWeight = 700;
    
      // Compare the current path with the path of the link
      return path === location.pathname ? { fontWeight: currentPageFontWeight } : { fontWeight: defaultFontWeight };
    };
    
    return (
        <div>
            <div className="navmaincontainer">
                <div className="navsubcontainer">
                    <div className="navonepart">
                        <Link className="navhome" to='/' style={getLinkStyle('/')}>Home</Link>
                        <Link className="navaboutus" to='/about' style={getLinkStyle('/about')}>About Us</Link>
                        <Link className="navcontactus" to="/contactus" style={getLinkStyle('/contactus')}>Contact Us</Link>
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