
import React from "react"
import '../Styles/About.css'
import Navbar from './Navcomponent';
import buddha from '../image/buddha.png'
import Footer from "./FooterComponent";


const About = () => {
    return (
        <div>
            <Navbar />
            <div className="aboutheadcontainer">
                <div className="aboutmaincontainer">
                    <div className="aboutsubcontainer">
                        <div className="aboutcolumnone">
                            <div className="aboutmainsection">
                                <div className="aboutoneside">
                                    About
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}>Us</span>
                                </div>
                                <div className="abouttwoside">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
                                    sit amet consectetur. At consequat purus hendrerit proin risus Sit
                                    purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
                                    id.Lorem ipsum dolor sit amet consectetur. At consequat purus
                                    hendrerit proin risus Sit purus ante dictum in malesuada id
                                </div>
                            </div>
                        </div>
                        <div className="aboutcolumntwo">
                            <img
                                loading="lazy"
                                srcset={buddha}
                                className="aboutimage"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="aboutmaincontainer">
                    <div className="aboutsubcontainer">
                        <div className="storycolumone">
                            <div className="aboutmainsection">
                                <div className="aboutoneside">
                                    Our
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}>Story</span>
                                </div>
                                <div className="abouttwoside">
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

                <div className="aboutmaincontainer">
                    <div className="aboutsubcontainer">
                        <div className="visioncolumntwo">
                            <img
                                loading="lazy"
                                srcset='https://shorturl.at/evELR'
                                className="visionimage"
                                alt=""
                            />
                        </div>
                        <div className="aboutcolumnone">
                            <div className="aboutmainsection">
                                <div className="aboutoneside">
                                    Our
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}>Vision</span>
                                </div>
                                <div className="abouttwoside">
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


                <div className="aboutmaincontainer">
                    <div className="aboutsubcontainer">
                        <div className="whowearecolumnone">
                            <div className="aboutmainsection">
                                <div className="aboutoneside">
                                    Who We Are
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}></span>
                                </div>
                                <div className="abouttwoside">
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


                <div className="aboutmaincontainer">
                    <div className="aboutsubcontainer">
                        <div className="teamcolumnone">
                            <div className="aboutmainsection">
                                <div className="aboutoneside">
                                    Our
                                    <span style={{ color: "rgba(192, 232, 100, 1)" }}>Team</span>
                                </div>
                                <div className="abouttwoside">
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



                <div className="clientmaincontainer">
                    <div className="clientmainsection">
                        <div className="imagecolumn">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ckoV8"
                                className="clientimage1"
                                alt=""
                            />
                            <div className="clientname-container">
                                <p className="clientname">Rahul</p>
                            </div>

                        </div>
                        <div className="imagecolumn2">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/pDRX9"
                                className="clientimage1"
                                alt=""
                            />
                            <div className="clientname-container">
                                <p className="clientname">Ishaa</p>
                            </div>

                        </div>
                        <div className="imagecolumn3">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ckoV8"
                                className="clientimage1"
                                alt=""
                            />
                            <div className="clientname-container">
                                <p className="clientname">Priya</p>
                            </div>

                        </div>
                        <div className="imagecolumn4">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/pDRX9"
                                className="clientimage1"
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