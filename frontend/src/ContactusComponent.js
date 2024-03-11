
import React from "react"
import './ContactUs.css'
import Navbar from './Navcomponent';
import Footer from "./FooterComponent";


const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className="contactusmaincontainer">
                <div className="contactustitle">
                    <h1>Contact Us</h1>
                </div>

                <div class="contactustitletwo">
                    <p>What can we help you with?</p>
                </div>

                <div class="searchcontainer">
                    <input class="inputdata" placeholder="Search for your query"></input>
                    <button class="searchbutton">Search</button>
                </div>
            </div>

            <div class="formandaddressdetails">
                <div class="addresscontainer">
                    <div class="addressone">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2301876fe2e5148b62f2520fa803331644fe45f8f7ba97550f4482e12e7f182d?"
                            class="icon1"
                            alt=""
                        />
                        <div class="callus">Call Us</div>
                    </div>

                    <div class="number">+91 9234567899</div>

                    <div class="addresstwo">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/320693eb58777692dc7966eae6ca55152d1ff2fdddef0ab18a340e56565e7bc1?"
                            class="icon2"
                            alt=""
                        />
                        <div class="location">Location</div>
                    </div>
                    <div class="addressthree">
                        Workingdom, Plot No 17, Sector-7, Palam Extension, Dwarka, New Delhi-110075
                        <br />
                        India
                    </div>
                    <div class="addressfour">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a90ea394028d494e368bcfeb63fecf77460c6846ded194c12cf9284b0178344?"
                            class="icon3"
                            alt=""
                        />
                        <div class="email">Email</div>
                    </div>
                    <div class="emailaddress">Buddha@gmail.com</div>
                </div>
                <div class="contactformcontainer">
                    <form className="formdata">
                        <input class="inputdata" placeholder="Your Name"></input>
                        <input class="inputdata" placeholder="Your Email"></input>
                        <input class="inputdata" placeholder="Your Phone Number"></input>
                        <input class="inputdata" placeholder="Your Message"></input>
                        <button class="contactformsubmit">Submit</button>
                    </form>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default ContactUs