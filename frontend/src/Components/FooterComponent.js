import React from "react"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div>
              <div className="footermaincontainer">
                    <div className="footersubcontainer">
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae vulputate
                                eu vitae tristique.</p>
                        </div>
                        <div className="aboutcontainer">
                            <div className="general">General</div>
                            <div className="aboutus">About Us</div>
                        </div>
                        <div className="securtiycontainer">
                            <div className="policiies">Policies</div>
                            <div className="div-9">Security safeguards</div>
                            <div className="moredata">Terms of service</div>
                            <div className="moredata">Privacy</div>
                            <div className="moredata">Accessibility</div>
                        </div>
                        <div className="contactcontainer">
                            <div className="getintouch">Get in touch</div>
                            <div className="followus">
                                Follow us on social media and stay updated with the latest information
                                about our services
                            </div>
                            <div className="contacticon">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd6a7deb424407b94f603730b4c70ce6cc58a62dca6600f324caf0e86ef0152?"
                                   className="img"
                                    alt=''
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/052b905db31584d7dc4c0e104d2691ab70aff12cf903600ff9ec9933b3cda1fb?"
                                    className="img"
                                    alt=''
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/451b3436ceccb4a7784f73ece7e3a5bdfa4df841f3e0c916c890b8e1950de0f3?"
                                    className="img"
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>


        </div>
    )
}

export default Footer