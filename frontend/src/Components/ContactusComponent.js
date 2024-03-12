
import React from "react"
import '../Styles/ContactUs.css'
import Navbar from './Navcomponent';
import Footer from "./FooterComponent";


const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className="contactusmaincontainer">
                <div className="contactussubcontainer">
            
                <div className="contactustitle">
                    <h1>Contact Us</h1>
                </div>

                <div className="contactustitletwo">
                    <p>What can we help you with?</p>
                </div>

                <div className="searchcontainer">
                    <input className="inputdata" placeholder="Search for your query"></input>
                    <button className="searchbutton">Search</button>
                </div>
            </div>
            </div>
            <div className="formandaddressdetails">
                <div className="addresscontainer">
                    <div className="addressone">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2301876fe2e5148b62f2520fa803331644fe45f8f7ba97550f4482e12e7f182d?"
                            className="icon1"
                            alt=""
                        />
                        <div className="callus">Call Us</div>
                    </div>

                    <div className="number">+91 9234567899</div>

                    <div className="addresstwo">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/320693eb58777692dc7966eae6ca55152d1ff2fdddef0ab18a340e56565e7bc1?"
                            className="icon2"
                            alt=""
                        />
                        <div className="location">Location</div>
                    </div>
                    <div className="addressthree">
                        Workingdom, Plot No 17, Sector-7, Palam Extension, Dwarka, New Delhi-110075
                        <br />
                        India
                    </div>
                    <div className="addressfour">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a90ea394028d494e368bcfeb63fecf77460c6846ded194c12cf9284b0178344?"
                            className="icon3"
                            alt=""
                        />
                        <div className="email">Email</div>
                    </div>
                    <div className="emailaddress">Buddha@gmail.com</div>
                </div>
                <div className="contactformcontainer">
                    <form className="formdata">
                        <input className="inputdata" placeholder="Your Name"></input>
                        <input className="inputdata" placeholder="Your Email"></input>
                        <input className="inputdata" placeholder="Your Phone Number"></input>
                        <input className="inputdata" placeholder="Your Message"></input>
                        <button className="contactformsubmit">Submit</button>
                    </form>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default ContactUs