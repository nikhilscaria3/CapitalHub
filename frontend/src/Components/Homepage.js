import React from 'react';
import '../Styles/Homepage.css'
import group from '../image/Group1.jpg'
import group2 from '../image/Group.png'
import buddha from '../image/buddha.png'
import fifthimage from '../image/Ellipse14.jpg'
import sixthimage from '../image/sixth.jpg'
import eightfirstimage from '../image/eightfirstimaga.jpg'
import eightsecondimage from '../image/eightsecondimaga.jpg'
import eightthirdimage from '../image/eightthirdimage.jpg'
import Navbar from './Navcomponent';
import Footer from './FooterComponent';



const Homepage = () => {
    return (
        <div>
            <div className='maincontainer'>
                <Navbar />
                {/* secondmaincontainer */}
                <div className="secondmaincontainer">
                    <div className="secondsubcontainer">
                        <div className="secondcontainercolumn">
                            <div className="secondoneside">
                                <div className="secondonsidetitle">Make someone’s Life by giving of yours</div>
                                <div className="secondonesubtitle">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem
                                </div>
                                <div className="donate">Donate Now</div>
                                <div className="donatesideimage">
                                    <img
                                        loading="lazy"
                                        srcset={group}
                                        className="firstsectionimage"
                                        alt='img'
                                    />
                                    <div className="helped">2.5k Helped</div>
                                </div>
                            </div>
                        </div>
                        <div className="secondtwosidecontainer">
                            <img
                                loading="lazy"
                                srcset={buddha}
                                className="img-2"
                                alt='img'
                            />
                        </div>
                    </div>
                </div>

                {/* thirdmain */}

                <div className="thirdmaincontainer">
                    <div className="thirdcosubntainer">
                        <div className="thirdfirstpart">
                            <div className="firsttitle">10k +</div>
                            <div className="secondtitle">Children are back to school</div>
                        </div>
                        <div className="thirdfirstpart">
                            <div className="firsttitle">2M+</div>
                            <div className="secondtitle">Total money donated</div>
                        </div>
                        <div className="thirdfirstpart">
                            <div className="firsttitle">100+</div>
                            <div className="secondtitle">Hospital has been built</div>
                        </div>
                    </div>
                </div>


                {/* Fourth  Section  */}

                <div className="fourthmaincontainer">
                    <div className="fourthsubcontainer">
                        <div className="fourthtitle">
                            Fundraising on Buddha Trust takes just a few minutes
                        </div>
                        <div className="fourthcontent">
                            <div className="fourthsubcontent">
                                <div className="fourthfirstsection">
                                    <div className="fourthsubfirstsection">
                                        <div className="fourthimagecontainer">
                                            <img
                                                loading="lazy"
                                                srcset="https://s3-alpha-sig.figma.com/img/2e01/3163/56078b69a0118cad5c5b2721da09ae05?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-8UcoC4PTvIIHFUB58m1ykDEAtAe2vXAai9Xbcza2pc44cPoeXoL67qACdJ5AxF419TG1CkL4QM6BqA25Q4StLoQwCDOY2trQgCX6yMGq~hy6OlpRo~6gCprw8pnAoLMX~e5JwI~k3V-CrLVuS4K0X00B7SAZT1tnnJY1aWuklkarU5WVgs9~WLqg-6dQWJ8epq5ue8qTMMbN6fXghaUSmxe~7p25Rh4X2hXdBer50t9HANMnqVsEvzbyUgnGnkQHrgCNTa~UwtPCgliZCZq9KlfEUP~hCFJsidbFdxRTYzv5uw2T4BiTgzTtbP1~JfJbnHZW5tCk1j6YUNlQIzTg__"
                                                className="fouthfirstimg"
                                                alt='img'
                                            />
                                        </div>
                                        <div className="givehappiness">Give Happiness</div>
                                        <div className="givinghappiness">
                                            Giving happiness to others is one of the most fulfilling things
                                            you can do in life.
                                        </div>
                                    </div>
                                </div>

                                <div className="fourthsubfirstsection">
                                    <div className="fourthsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            srcset="https://s3-alpha-sig.figma.com/img/4c22/5770/f265735d1872e382715a84df7e497aaf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qM9ssY80U62WweskjamdNJhYw~eR6~zrKvyBpIwhWGwDXuqzuUK20L8VBDpA4PqK4OEug~OtN3z1gCrazCEjbA1~eMNElIbgQ0RzGnj6C235XdonybZQXOzQly07NrR5afoGVbUkwoF2n2DBp6P58I3O1f1yDTY6AGvBbsL03TzvudiSKDCpPdbf5NjyHyIe0fGIkUJTWrmJbS67LlHbjcwpPi6JJ~HKzoixRO59yeruuT30ubroDSFsnjtwngrrebPIRjDTTLusDq8~wEaMZKzlDu2VZIrNIHNOqCKEH95Mk2fO4qYtYonTVbGvnNQWvNZHGKn56vJUIVal1N9h5Q__"
                                            className="fouthsecondimg"
                                            alt='img'
                                        />
                                        <div className="givehappiness">Share Love</div>
                                        <div className="givinghappiness">
                                            When you share love with those around you, you create a ripple
                                            effect of kindness
                                        </div>
                                    </div>
                                </div>

                                <div className="fourthsubthirdsection">
                                    <div className="fourththirdimagecontainer">
                                        <img
                                            loading="lazy"
                                            srcset={group2}
                                            className="fouththirdimg"
                                            alt='img'
                                        />
                                        <div className="givehappiness">Build Socially</div>
                                        <div className="givinghappiness">
                                            Building socially requires not just connecting with others, but
                                            also actively contributing.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Fifth */}


                <div className="fifthmaincontainer">
                    <div className="fifthsubcontainer">
                        <div className="fifthfirstcolumn">
                            <div className="fifthdiv3">
                                <div className="fifthdiv4">
                                    <div className="fifthfirstcolumn">
                                        <div className="fifthfirstsection">
                                            <div className="fifthfirstimagecontainer">
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    className="fifthfirstimage"
                                                    alt='img'
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    className="fifthfirstimage"
                                                    alt='img'
                                                />
                                            </div>
                                            <div className="fifthfirstimagecontainer">
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    className="fifthfirstimage"
                                                    alt='img'
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    className="fifthfirstimage"
                                                    alt='img'
                                                />
                                            </div>
                                            <div className="div-8">
                                                828 Million people in the world are still hungry
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fifthsecondcolumn">
                                        <div className="fifthsecondsection">
                                            <div className="fifthsecondimagecontainer">
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    className="fifthsecondimage"
                                                    alt='img'
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    className="fifththirdimage"
                                                    alt='img'
                                                />
                                            </div>
                                            <div className="fifthfirstimagecontainer">
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    className="fifthfourthimage"
                                                    alt='img'
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    className="fifthfifthimage"
                                                    alt='img'
                                                />
                                            </div>
                                            <div className="div-8">
                                                150 Million people in the world are still Homeless
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="fifthtwosidecontainer">
                            <div className="fifthtwosidesubcontainer">
                                <div className="fifthhead">No More Homeless</div>
                                <div className="fifthhead">No More Hunger</div>
                                <div className="div-16">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem
                                </div>
                                <div className="donatebutton">Donate Now</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Sixth */}


                <div className="sixthmaincontainer">
                    <div className="sixthsubcontainer">
                        <div className="sixthcolum">
                            <div className="sixthdatacontainer">
                                <div className="sixthhead">Great futures are built with a small trust</div>
                                <div className="sixthsubhead">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem
                                </div>
                                <div className="sixthdonatebutton">Donate Now</div>
                            </div>
                        </div>
                        <div className="sixthimagecontainer">
                            <img
                                loading="lazy"
                                srcset={sixthimage}
                                className="sixthimg"
                                alt='img'
                            />
                        </div>
                    </div>
                </div>

                <div className="seventhmaincontainer">We Believe that We can Save<br/> More Life’s with you</div>


                <div className="eighthmaincontainer">
                    <div className="eighthsubcontainer">
                        <div className="eightimagecontainer">
                            <img
                                loading="lazy"
                                srcset={eightfirstimage}
                                className="eightfirstimg"
                                alt='img'
                            />
                            <div className="becomevolunteer">Become Volunteer</div>
                            <div className="volunteersub">
                                Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                proin risus Sit purus ante dictum in malesuada id.Lorem
                            </div>
                        </div>
                    </div>
                    <div className="eighthsubcontainer">
                        <div className="eightimagecontainer">
                            <img
                                loading="lazy"
                                srcset={eightsecondimage}
                                className="eightfirstimg"
                                alt='img'
                            />
                            <div className="becomevolunteer">Quick Fundraise</div>
                            <div className="volunteersub">
                                Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                proin risus Sit purus ante dictum in malesuada id.Lorem
                            </div>
                        </div>
                    </div>
                    <div className="eighthsubcontainer">
                        <div className="eightimagecontainer">
                            <img
                                loading="lazy"
                                srcset={eightthirdimage}
                                className="eightfirstimg"
                                alt='img'
                            />
                            <div className="becomevolunteer">Start Donating</div>
                            <div className="volunteersub">
                                Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                proin risus Sit purus ante dictum in malesuada id.Lorem
                            </div>
                        </div>
                    </div>
                </div>


                <div className="eightthdonatebuttoncontainer">
                    <button className='eightthdonatebutton'>Donate Now</button>
                </div>

                <div className='ninthheadtitle'>
                    <p>Join our community for donating and be a part of a positive change in the world. With over</p>
                </div>

                {/* Tenth */}


                <div className="tenthmaincontainer">
                    <div className="tenthsubcontainer">
                        <div className="tenthcolumnone">
                            <div className="tenthfirstimagecontainer">
                                <img
                                    loading="lazy"
                                    srcset="https://s3-alpha-sig.figma.com/img/d4d1/66bb/d258fbcca4bac36184782d2d2831f528?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWV7BU0TCGPo03gBA9B0NJ12kBS~-HLj0pYZxM231Wug2EdyqWSTNVSdIBRtNsyUDsbS2oNdpsJiBp9h59NPE4GLqGMMXZpCy2hjRPWueDqzw7OymeAGKIvRJXSVVsoLSfai8f1S9sF9-gLMBxMwZXNU-2CrBK9i0X3mPS-lL5JB-aR-GXg~LRme097xySIYDKSEB~axdm8wDELdhix5uGSm7R0w1WnuXXBnGWBz1VhzhUT0i5boOCq-5KsLFvPlm1jxwZVx7v0aZ3KDrg4hWnmWkbq5un1uTxoLc2Zm2y3zk9S-o76Pxr7EyN45-QqXZ1QAotiImPXbpyoUUY483A__"
                                    className="tenthimageone"
                                    alt='img'
                                />
                                <img
                                    loading="lazy"
                                    srcset="https://s3-alpha-sig.figma.com/img/dfc4/07bd/ea587d9cb78f17043d304a9627d67732?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OELsdHHUpE0yexgJhcC-s8G6EOzGptSOEmFzcrOf5NtJOWlxLXKydBfg3f5d8CbWI4APqf-l-L3vgUXs4zRmx~ClOtD1uAEg3cAmn8kJBll6KppxPCGlsQeikLxKOJRR~~BQwOl36D7SqHD70XbJMBcvDkiHYXYk7mk-LOQcrWrTj6cM3QBI8YSNfJrd~p5ookgKmUWhC-BHySnaVx21aEneh8Juvqykws1T9r6NUdtlilFBiHjbA4dN1293yq5JPkYDHjXIQn6pYZX6NESpUJIaVChGAbUp5PZNGPUGUQc9S0iaRolVQdGA4ctegPi7-1y~p5GVNdadsWxt5Bq28g__"
                                    className="tenthimagetwo"
                                    alt='img'
                                />
                            </div>
                        </div>
                        <div className="tenthcolumntwo">
                            <div className="tenthcountcontainer">
                                <div className="countplus">130,987 +</div>
                                <p className="div-6">People already joined</p>
                                <p className="joincommunity">Yes i want join community</p>
                            </div>
                        </div>
                        <div className="tenthcolumnthree">
                            <div className="tenthsecondimagecontainer">
                                <img
                                    loading="lazy"
                                    src='https://shorturl.at/ivFU8'
                                    className="tenthimagethree"
                                    alt='img'
                                />
                                <img
                                    loading="lazy"
                                    srcset="https://shorturl.at/eopsP"
                                    className="tenthimagefour"
                                    alt='img'
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='tenthheadtitle'>
                    <h1 className='tenthheadtitle'>Our Campaign</h1>
                </div>



                {/* Eleventh */}

                <div className='eleventhmaincontainer'>
                    <div className='eleventhsubcontainer'>


                        <div className="eleventhheadcontainer">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ghwGH"
                                className="eleventhfirstimage"
                                alt=''
                            />
                            <div className="eleventhtitlecontainer">
                                <div className="titlediv">Help us to send food</div>
                                <div className="eleventhsecondimagecontainer">
                                    <div className="eleventhsubsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afcb8c5ef6404e6b3334d82a3ef9732fc75be9622380923f04d40f97e6a2e3e?"
                                            className="eleventhsecondimage"
                                            alt=''
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/346680d19af8bb5b08a7d3022df836ec7c18fb9dbb5077299e74f7d8bf530ba5?"
                                            className="elevenththirdimage"
                                            alt=''
                                        />
                                    </div>
                                    <div className="percentage">100%</div>
                                </div>
                                <p >Donator’s</p>
                                <p >50</p>
                            </div>
                        </div>
                        <div className="eleventhheadcontainer">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ghwGH"
                                className="eleventhfirstimage"
                                alt=''
                            />
                            <div className="eleventhtitlecontainer">
                                <div className="titlediv">Help us to send food</div>
                                <div className="eleventhsecondimagecontainer">
                                    <div className="eleventhsubsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afcb8c5ef6404e6b3334d82a3ef9732fc75be9622380923f04d40f97e6a2e3e?"
                                            className="eleventhsecondimage"
                                            alt=''
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/346680d19af8bb5b08a7d3022df836ec7c18fb9dbb5077299e74f7d8bf530ba5?"
                                            className="elevenththirdimage"
                                            alt=''
                                        />
                                    </div>
                                    <div className="percentage">100%</div>
                                </div>
                                <p >Donator’s</p>
                                <p >50</p>
                            </div>
                        </div>
                        <div className="eleventhheadcontainer">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ghwGH"
                                className="eleventhfirstimage"
                                alt=''
                            />
                            <div className="eleventhtitlecontainer">
                                <div className="titlediv">Help us to send food</div>
                                <div className="eleventhsecondimagecontainer">
                                    <div className="eleventhsubsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afcb8c5ef6404e6b3334d82a3ef9732fc75be9622380923f04d40f97e6a2e3e?"
                                            className="eleventhsecondimage"
                                            alt=''
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/346680d19af8bb5b08a7d3022df836ec7c18fb9dbb5077299e74f7d8bf530ba5?"
                                            className="elevenththirdimage"
                                            alt=''
                                        />
                                    </div>
                                    <div className="percentage">100%</div>
                                </div>
                                <p >Donator’s</p>
                                <p >50</p>
                            </div>
                        </div>
                        <div className="eleventhheadcontainer">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ghwGH"
                                className="eleventhfirstimage"
                                alt=''
                            />
                            <div className="eleventhtitlecontainer">
                                <div className="titlediv">Help us to send food</div>
                                <div className="eleventhsecondimagecontainer">
                                    <div className="eleventhsubsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afcb8c5ef6404e6b3334d82a3ef9732fc75be9622380923f04d40f97e6a2e3e?"
                                            className="eleventhsecondimage"
                                            alt=''
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/346680d19af8bb5b08a7d3022df836ec7c18fb9dbb5077299e74f7d8bf530ba5?"
                                            className="elevenththirdimage"
                                            alt=''
                                        />
                                    </div>
                                    <div className="percentage">100%</div>
                                </div>
                                <p >Donator’s</p>
                                <p >50</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="eightthdonatebuttoncontainer">
                    <button className='eightthdonatebutton'>Show more</button>
                </div>
                {/* 

Footer */}


                <Footer />


            </div>
        </div >
    )
}

export default Homepage