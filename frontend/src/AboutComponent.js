
import React from "react"
import './About.css'
import Navbar from './Navcomponent';
import buddha from './image/buddha.png'
import Footer from "./FooterComponent";


const About = () => {
    return (
        <div>
            <Navbar />
            <div className="aboutheadcontainer">
                <div class="aboutmaincontainer">
                    <div class="aboutsubcontainer">
                        <div class="aboutcolumnone">
                            <div class="aboutmainsection">
                                <div class="aboutoneside">
                                    About
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}>Us</span>
                                </div>
                                <div class="abouttwoside">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
                                    sit amet consectetur. At consequat purus hendrerit proin risus Sit
                                    purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
                                    id.Lorem ipsum dolor sit amet consectetur. At consequat purus
                                    hendrerit proin risus Sit purus ante dictum in malesuada id
                                </div>
                            </div>
                        </div>
                        <div class="aboutcolumntwo">
                            <img
                                loading="lazy"
                                srcset={buddha}
                                class="aboutimage"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div class="aboutmaincontainer">
                    <div class="aboutsubcontainer">
                        <div class="storycolumone">
                            <div class="aboutmainsection">
                                <div class="aboutoneside">
                                    Our
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}>Story</span>
                                </div>
                                <div class="abouttwoside">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
                                    sit amet consectetur. At consequat purus hendrerit proin risus Sit
                                    purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
                                    id.Lorem ipsum dolor sit amet consectetur. At consequat purus
                                    hendrerit proin risus Sit purus ante dictum in malesuada id
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="aboutmaincontainer">
                    <div class="aboutsubcontainer">
                        <div class="visioncolumntwo">
                            <img
                                loading="lazy"
                                srcset='https://shorturl.at/evELR'
                                class="visionimage"
                                alt=""
                            />
                        </div>
                        <div class="aboutcolumnone">
                            <div class="aboutmainsection">
                                <div class="aboutoneside">
                                    Our
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}>Vision</span>
                                </div>
                                <div class="abouttwoside">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
                                    sit amet consectetur. At consequat purus hendrerit proin risus Sit
                                    purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
                                    id.Lorem ipsum dolor sit amet consectetur. At consequat purus
                                    hendrerit proin risus Sit purus ante dictum in malesuada id
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="aboutmaincontainer">
                    <div class="aboutsubcontainer">
                        <div class="whowearecolumnone">
                            <div class="aboutmainsection">
                                <div class="aboutoneside">
                                    Who We Are
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}></span>
                                </div>
                                <div class="abouttwoside">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
                                    sit amet consectetur. At consequat purus hendrerit proin risus Sit
                                    purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
                                    id.Lorem ipsum dolor sit amet consectetur. At consequat purus
                                    hendrerit proin risus Sit purus ante dictum in malesuada id
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="aboutmaincontainer">
                    <div class="aboutsubcontainer">
                        <div class="teamcolumnone">
                            <div class="aboutmainsection">
                                <div class="aboutoneside">
                                    Our
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}>Team</span>
                                </div>
                                <div class="abouttwoside">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
                                    sit amet consectetur. At consequat purus hendrerit proin risus Sit
                                    purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
                                    id.Lorem ipsum dolor sit amet consectetur. At consequat purus
                                    hendrerit proin risus Sit purus ante dictum in malesuada id
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="clientmaincontainer">
                    <div class="clientmainsection">
                        <div class="imagecolumn">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ckoV8"
                                class="clientimage1"
                                alt=""
                            />
                            <div className="clientname-container">
                                <p className="clientname">Rahul</p>
                            </div>

                        </div>
                        <div class="imagecolumn2">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/pDRX9"
                                class="clientimage1"
                                alt=""
                            />
                            <div className="clientname-container">
                                <p className="clientname">Ishaa</p>
                            </div>

                        </div>
                        <div class="imagecolumn3">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ckoV8"
                                class="clientimage1"
                                alt=""
                            />
                            <div className="clientname-container">
                                <p className="clientname">Priya</p>
                            </div>

                        </div>
                        <div class="imagecolumn4">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/pDRX9"
                                class="clientimage1"
                                alt=""
                            />
                            <div className="clientname-container">
                                <p className="clientname">Jackson</p>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        </div>
    )
}

export default About