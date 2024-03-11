import React from 'react';
import './Homepage.css'
import group from './image/Group1.jpg'
import group2 from './image/Group.png'
import fifthimage from './image/Ellipse14.jpg'
import sixthimage from './image/sixth.jpg'
import eightfirstimage from './image/eightfirstimaga.jpg'
import eightsecondimage from './image/eightsecondimaga.jpg'
import eightthirdimage from './image/eightthirdimage.jpg'
import Navbar from './Navcomponent';



const Homepage = () => {
    return (
        <div>
            <div className='maincontainer'>
                <Navbar />
                {/* secondmaincontainer */}
                <div class="secondmaincontainer">
                    <div class="secondsubcontainer">
                        <div class="secondcontainercolumn">
                            <div class="secondoneside">
                                <div class="secondonsidetitle">Make someone’s Life by giving of yours</div>
                                <div class="secondonesubtitle">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem
                                </div>
                                <div class="donate">Donate Now</div>
                                <div class="donatesideimage">
                                    <img
                                        loading="lazy"
                                        srcset={group}
                                        class="firstsectionimage"
                                        alt='img'
                                    />
                                    <div class="helped">2.5k Helped</div>
                                </div>
                            </div>
                        </div>
                        <div class="secondtwosidecontainer">
                            <img
                                loading="lazy"
                                srcset="https://s3-alpha-sig.figma.com/img/cb4c/52e8/ec487f09c646297354248705fd771bd2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdb6T4hECm2WgAUS3YdOHWlFrwGm6j9QZk~NUmXWcK1NNmx~93fKjSaDIeLG2cFtAcV6dKZOiq7fCBFodobuAvRgxoytnjzv9-8tff25ITuBinm0NkwKrUXvkhzwLYKNPhFXjo3ndjH3pLad4E~e9DH-G~h69O9KQI8YNaTZVzb2D-f8cyl7riyLPvpoCvu20wW~-BVrQtUS1C25jsGpmZ1O0XQ2R8ELPTOqP4C1uUnQlj0l3KZBVI3gZ~hmcINS-7o4aRzMcRc97Ypmi2~t~nypgrktToARcXxyupTvFe3iCybwM2B8HvDdxESHGL-XTNEcztyo7dq~hdsmOVPFZQ__"
                                class="img-2"
                                alt='img'
                            />
                        </div>
                    </div>
                </div>

                {/* thirdmain */}

                <div class="thirdmaincontainer">
                    <div class="thirdcosubntainer">
                        <div class="thirdfirstpart">
                            <div class="firsttitle">10k +</div>
                            <div class="secondtitle">Children are back to school</div>
                        </div>
                        <div class="thirdfirstpart">
                            <div class="firsttitle">2M+</div>
                            <div class="secondtitle">Total money donated</div>
                        </div>
                        <div class="thirdfirstpart">
                            <div class="firsttitle">100+</div>
                            <div class="secondtitle">Hospital has been built</div>
                        </div>
                    </div>
                </div>


                {/* Fourth  Section  */}

                <div class="fourthmaincontainer">
                    <div class="fourthsubcontainer">
                        <div class="fourthtitle">
                            Fundraising on Buddha Trust takes just a few minutes
                        </div>
                        <div class="fourthcontent">
                            <div class="fourthsubcontent">
                                <div class="fourthfirstsection">
                                    <div class="fourthsubfirstsection">
                                        <div class="fourthimagecontainer">
                                            <img
                                                loading="lazy"
                                                srcset="https://s3-alpha-sig.figma.com/img/2e01/3163/56078b69a0118cad5c5b2721da09ae05?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-8UcoC4PTvIIHFUB58m1ykDEAtAe2vXAai9Xbcza2pc44cPoeXoL67qACdJ5AxF419TG1CkL4QM6BqA25Q4StLoQwCDOY2trQgCX6yMGq~hy6OlpRo~6gCprw8pnAoLMX~e5JwI~k3V-CrLVuS4K0X00B7SAZT1tnnJY1aWuklkarU5WVgs9~WLqg-6dQWJ8epq5ue8qTMMbN6fXghaUSmxe~7p25Rh4X2hXdBer50t9HANMnqVsEvzbyUgnGnkQHrgCNTa~UwtPCgliZCZq9KlfEUP~hCFJsidbFdxRTYzv5uw2T4BiTgzTtbP1~JfJbnHZW5tCk1j6YUNlQIzTg__"
                                                class="fouthfirstimg"
                                                alt='img'
                                            />
                                        </div>
                                        <div class="givehappiness">Give Happiness</div>
                                        <div class="givinghappiness">
                                            Giving happiness to others is one of the most fulfilling things
                                            you can do in life.
                                        </div>
                                    </div>
                                </div>

                                <div class="fourthsubfirstsection">
                                    <div class="fourthsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            srcset="https://s3-alpha-sig.figma.com/img/4c22/5770/f265735d1872e382715a84df7e497aaf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qM9ssY80U62WweskjamdNJhYw~eR6~zrKvyBpIwhWGwDXuqzuUK20L8VBDpA4PqK4OEug~OtN3z1gCrazCEjbA1~eMNElIbgQ0RzGnj6C235XdonybZQXOzQly07NrR5afoGVbUkwoF2n2DBp6P58I3O1f1yDTY6AGvBbsL03TzvudiSKDCpPdbf5NjyHyIe0fGIkUJTWrmJbS67LlHbjcwpPi6JJ~HKzoixRO59yeruuT30ubroDSFsnjtwngrrebPIRjDTTLusDq8~wEaMZKzlDu2VZIrNIHNOqCKEH95Mk2fO4qYtYonTVbGvnNQWvNZHGKn56vJUIVal1N9h5Q__"
                                            class="fouthsecondimg"
                                            alt='img'
                                        />
                                        <div class="givehappiness">Share Love</div>
                                        <div class="givinghappiness">
                                            When you share love with those around you, you create a ripple
                                            effect of kindness
                                        </div>
                                    </div>
                                </div>

                                <div class="fourthsubthirdsection">
                                    <div class="fourththirdimagecontainer">
                                        <img
                                            loading="lazy"
                                            srcset={group2}
                                            class="fouththirdimg"
                                            alt='img'
                                        />
                                        <div class="givehappiness">Build Socially</div>
                                        <div class="givinghappiness">
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


                <div class="fifthmaincontainer">
                    <div class="fifthsubcontainer">
                        <div class="fifthfirstcolumn">
                            <div class="fifthdiv3">
                                <div class="fifthdiv4">
                                    <div class="fifthfirstcolumn">
                                        <div class="fifthfirstsection">
                                            <div class="fifthfirstimagecontainer">
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    class="fifthfirstimage"
                                                    alt='img'
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    class="fifthfirstimage"
                                                    alt='img'
                                                />
                                            </div>
                                            <div class="fifthfirstimagecontainer">
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    class="fifthfirstimage"
                                                    alt='img'
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    class="fifthfirstimage"
                                                    alt='img'
                                                />
                                            </div>
                                            <div class="div-8">
                                                828 Million people in the world are still hungry
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fifthsecondcolumn">
                                        <div class="fifthsecondsection">
                                            <div class="fifthsecondimagecontainer">
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    class="fifthsecondimage"
                                                    alt='img'
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    class="fifththirdimage"
                                                    alt='img'
                                                />
                                            </div>
                                            <div class="fifthfirstimagecontainer">
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    class="fifthfourthimage"
                                                    alt='img'
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcset={fifthimage}
                                                    class="fifthfifthimage"
                                                    alt='img'
                                                />
                                            </div>
                                            <div class="div-8">
                                                150 Million people in the world are still Homeless
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="fifthtwosidecontainer">
                            <div class="fifthtwosidesubcontainer">
                                <div class="fifthhead">No More Homeless</div>
                                <div class="fifthhead">No More Hunger</div>
                                <div class="div-16">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem
                                </div>
                                <div class="donatebutton">Donate Now</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Sixth */}


                <div class="sixthmaincontainer">
                    <div class="sixthsubcontainer">
                        <div class="sixthcolum">
                            <div class="sixthdatacontainer">
                                <div class="sixthhead">Great futures are built with a small trust</div>
                                <div class="sixthsubhead">
                                    Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                    proin risus Sit purus ante dictum in malesuada id.Lorem
                                </div>
                                <div class="sixthdonatebutton">Donate Now</div>
                            </div>
                        </div>
                        <div class="sixthimagecontainer">
                            <img
                                loading="lazy"
                                srcset={sixthimage}
                                class="sixthimg"
                                alt='img'
                            />
                        </div>
                    </div>
                </div>

                <div class="seventhmaincontainer">We Believe that We can Save More Life’s with you</div>


                <div class="eighthmaincontainer">
                    <div class="eighthsubcontainer">
                        <div class="eightimagecontainer">
                            <img
                                loading="lazy"
                                srcset={eightfirstimage}
                                class="eightfirstimg"
                                alt='img'
                            />
                            <div class="becomevolunteer">Become Volunteer</div>
                            <div class="volunteersub">
                                Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                proin risus Sit purus ante dictum in malesuada id.Lorem
                            </div>
                        </div>
                    </div>
                    <div class="eighthsubcontainer">
                        <div class="eightimagecontainer">
                            <img
                                loading="lazy"
                                srcset={eightsecondimage}
                                class="eightfirstimg"
                                alt='img'
                            />
                            <div class="becomevolunteer">Quick Fundraise</div>
                            <div class="volunteersub">
                                Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                proin risus Sit purus ante dictum in malesuada id.Lorem
                            </div>
                        </div>
                    </div>
                    <div class="eighthsubcontainer">
                        <div class="eightimagecontainer">
                            <img
                                loading="lazy"
                                srcset={eightthirdimage}
                                class="eightfirstimg"
                                alt='img'
                            />
                            <div class="becomevolunteer">Start Donating</div>
                            <div class="volunteersub">
                                Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
                                proin risus Sit purus ante dictum in malesuada id.Lorem
                            </div>
                        </div>
                    </div>
                </div>


                <div class="eightthdonatebuttoncontainer">
                    <button className='eightthdonatebutton'>Donate Now</button>
                </div>

                <div className='ninthheadtitle'>
                    <p>Join our community for donating and be a part of a positive change in the world. With over</p>
                </div>

                {/* Tenth */}


                <div class="tenthmaincontainer">
                    <div class="tenthsubcontainer">
                        <div class="tenthcolumnone">
                            <div class="tenthfirstimagecontainer">
                                <img
                                    loading="lazy"
                                    srcset="https://s3-alpha-sig.figma.com/img/d4d1/66bb/d258fbcca4bac36184782d2d2831f528?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWV7BU0TCGPo03gBA9B0NJ12kBS~-HLj0pYZxM231Wug2EdyqWSTNVSdIBRtNsyUDsbS2oNdpsJiBp9h59NPE4GLqGMMXZpCy2hjRPWueDqzw7OymeAGKIvRJXSVVsoLSfai8f1S9sF9-gLMBxMwZXNU-2CrBK9i0X3mPS-lL5JB-aR-GXg~LRme097xySIYDKSEB~axdm8wDELdhix5uGSm7R0w1WnuXXBnGWBz1VhzhUT0i5boOCq-5KsLFvPlm1jxwZVx7v0aZ3KDrg4hWnmWkbq5un1uTxoLc2Zm2y3zk9S-o76Pxr7EyN45-QqXZ1QAotiImPXbpyoUUY483A__"
                                    class="tenthimageone"
                                    alt='img'
                                />
                                <img
                                    loading="lazy"
                                    srcset="https://s3-alpha-sig.figma.com/img/dfc4/07bd/ea587d9cb78f17043d304a9627d67732?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OELsdHHUpE0yexgJhcC-s8G6EOzGptSOEmFzcrOf5NtJOWlxLXKydBfg3f5d8CbWI4APqf-l-L3vgUXs4zRmx~ClOtD1uAEg3cAmn8kJBll6KppxPCGlsQeikLxKOJRR~~BQwOl36D7SqHD70XbJMBcvDkiHYXYk7mk-LOQcrWrTj6cM3QBI8YSNfJrd~p5ookgKmUWhC-BHySnaVx21aEneh8Juvqykws1T9r6NUdtlilFBiHjbA4dN1293yq5JPkYDHjXIQn6pYZX6NESpUJIaVChGAbUp5PZNGPUGUQc9S0iaRolVQdGA4ctegPi7-1y~p5GVNdadsWxt5Bq28g__"
                                    class="tenthimagetwo"
                                    alt='img'
                                />
                            </div>
                        </div>
                        <div class="tenthcolumntwo">
                            <div class="tenthcountcontainer">
                                <div class="countplus">130,987 +</div>
                                <p class="div-6">People already joined</p>
                                <p class="div-7">Yes i want join community</p>
                            </div>
                        </div>
                        <div class="tenthcolumnthree">
                            <div class="tenthsecondimagecontainer">
                                <img
                                    loading="lazy"
                                    src='https://shorturl.at/ivFU8'
                                    class="tenthimagethree"
                                    alt='img'
                                />
                                <img
                                    loading="lazy"
                                    srcset="https://shorturl.at/eopsP"
                                    class="tenthimagefour"
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


                        <div class="eleventhheadcontainer">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ghwGH"
                                class="eleventhfirstimage"
                                alt=''
                            />
                            <div class="eleventhtitlecontainer">
                                <div class="titlediv">Help us to send food</div>
                                <div class="eleventhsecondimagecontainer">
                                    <div class="eleventhsubsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afcb8c5ef6404e6b3334d82a3ef9732fc75be9622380923f04d40f97e6a2e3e?"
                                            class="eleventhsecondimage"
                                            alt=''
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/346680d19af8bb5b08a7d3022df836ec7c18fb9dbb5077299e74f7d8bf530ba5?"
                                            class="elevenththirdimage"
                                            alt=''
                                        />
                                    </div>
                                    <div class="percentage">100%</div>
                                </div>
                                <p >Donator’s</p>
                                <p >50</p>
                            </div>
                        </div>
                        <div class="eleventhheadcontainer">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ghwGH"
                                class="eleventhfirstimage"
                                alt=''
                            />
                            <div class="eleventhtitlecontainer">
                                <div class="titlediv">Help us to send food</div>
                                <div class="eleventhsecondimagecontainer">
                                    <div class="eleventhsubsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afcb8c5ef6404e6b3334d82a3ef9732fc75be9622380923f04d40f97e6a2e3e?"
                                            class="eleventhsecondimage"
                                            alt=''
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/346680d19af8bb5b08a7d3022df836ec7c18fb9dbb5077299e74f7d8bf530ba5?"
                                            class="elevenththirdimage"
                                            alt=''
                                        />
                                    </div>
                                    <div class="percentage">100%</div>
                                </div>
                                <p >Donator’s</p>
                                <p >50</p>
                            </div>
                        </div>
                        <div class="eleventhheadcontainer">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ghwGH"
                                class="eleventhfirstimage"
                                alt=''
                            />
                            <div class="eleventhtitlecontainer">
                                <div class="titlediv">Help us to send food</div>
                                <div class="eleventhsecondimagecontainer">
                                    <div class="eleventhsubsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afcb8c5ef6404e6b3334d82a3ef9732fc75be9622380923f04d40f97e6a2e3e?"
                                            class="eleventhsecondimage"
                                            alt=''
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/346680d19af8bb5b08a7d3022df836ec7c18fb9dbb5077299e74f7d8bf530ba5?"
                                            class="elevenththirdimage"
                                            alt=''
                                        />
                                    </div>
                                    <div class="percentage">100%</div>
                                </div>
                                <p >Donator’s</p>
                                <p >50</p>
                            </div>
                        </div>
                        <div class="eleventhheadcontainer">
                            <img
                                loading="lazy"
                                srcset="https://shorturl.at/ghwGH"
                                class="eleventhfirstimage"
                                alt=''
                            />
                            <div class="eleventhtitlecontainer">
                                <div class="titlediv">Help us to send food</div>
                                <div class="eleventhsecondimagecontainer">
                                    <div class="eleventhsubsecondimagecontainer">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afcb8c5ef6404e6b3334d82a3ef9732fc75be9622380923f04d40f97e6a2e3e?"
                                            class="eleventhsecondimage"
                                            alt=''
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/346680d19af8bb5b08a7d3022df836ec7c18fb9dbb5077299e74f7d8bf530ba5?"
                                            class="elevenththirdimage"
                                            alt=''
                                        />
                                    </div>
                                    <div class="percentage">100%</div>
                                </div>
                                <p >Donator’s</p>
                                <p >50</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="eightthdonatebuttoncontainer">
                    <button className='eightthdonatebutton'>Show more</button>
                </div>
                {/* 

Footer */}


                <div class="footermaincontainer">
                    <div class="footersubcontainer">
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae vulputate
                                eu vitae tristique.</p>
                        </div>
                        <div class="aboutcontainer">
                            <div class="general">General</div>
                            <div class="aboutus">About Us</div>
                        </div>
                        <div class="securtiycontainer">
                            <div class="policiies">Policies</div>
                            <div class="div-9">Security safeguards</div>
                            <div class="moredata">Terms of service</div>
                            <div class="moredata">Privacy</div>
                            <div class="moredata">Accessibility</div>
                        </div>
                        <div class="contactcontainer">
                            <div class="getintouch">Get in touch</div>
                            <div class="followus">
                                Follow us on social media and stay updated with the latest information
                                about our services
                            </div>
                            <div class="contacticon">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd6a7deb424407b94f603730b4c70ce6cc58a62dca6600f324caf0e86ef0152?"
                                    class="img"
                                    alt=''
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/052b905db31584d7dc4c0e104d2691ab70aff12cf903600ff9ec9933b3cda1fb?"
                                    class="img"
                                    alt=''
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/451b3436ceccb4a7784f73ece7e3a5bdfa4df841f3e0c916c890b8e1950de0f3?"
                                    class="img"
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Homepage