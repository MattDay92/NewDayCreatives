import React, {useState, useEffect} from 'react'
import Nav from '../Nav'
import Name from '../images/MattDayName.png'
import BannerIMG from '../images/BannerIMG.png'
import ParkingLot from '../images/ParkingLot.webp'
import PaperSwordsLogo from '../images/PaperSwords-Square.webp'
import MMAMLogo from '../images/MMAM-IndyFringe-Square-01-2.webp'
import SMIDLogo from '../images/SMID-Logo.webp'
import ManiacManorLogo from '../images/ManiacManorLogo.png'
import '../../Music.css'
import Footer from '../Footer'

export default function Music({currentPage, setCurrentPage}) {
    useEffect(() => {
        setCurrentPage('music')
    }, [])

    return (
        <div>
            <Nav currentPage={currentPage} />

            <div id="banner">
                <div class="banner-name-div"><img class="banner-img" alt="Matt Day" src={Name} /></div>
                <div class="banner-img-div"><img class="banner-img" alt="Matt Day with guitar" src={BannerIMG} /></div>
            </div>
            
            <div id="about">
                <div class="about-box">
                    <div>
                        <h2 class="section-header">About Matt</h2>
                    </div>
                    <div class="about-info">
                        <div class="about-1">
                            <div class="about-img-div"><img class="about-img" alt="Matt Day - Headshot with Guitar"
                                src={ParkingLot} /></div>
                        </div>
                        <div class='about-2'>
                            <div class="normal-font">
                                Matt Day is a musical theatre composer/lyricist and professional guitarist currently based out
                                of Indianapolis, IN. His work includes <em> Paper Swords</em> (2020 Chicago Musical Theatre
                                Festival), <em>Make Me A Match</em> (2019 IndyFringe Audience Choice Award), 
                                <em>Super Mario is Dead </em>, and <em>Murders at Maniac Manor</em>. His work has also been
                                accepted to various cabarets including the Allen and Grey New Voices Concert, the Latest Draft
                                Podcast, and the Under the
                                Arch Incubator in St. Louis, MO. Matt's songs are available for streaming on Spotify, Apple Music, Napster, and anywhere else
                                you want to look.
                            </div>
                            <div class="social-icons">
                                <a href='https://www.instagram.com/mattday92' target="_blank" rel="noopener"><i
                                    class="fa-brands fa-instagram"></i></a>
                                <a href='https://www.youtube.com/@mattday5449' target="_blank" rel="noopener"><i
                                    class="fa-brands fa-youtube"></i></a>
                                <a href='https://www.tiktok.com/@mattday92' target="_blank" rel="noopener"><i
                                    class="fa-brands fa-tiktok"></i></a>
                                <a href='https://www.twitter.com/mattday92' target="_blank" rel="noopener"><i
                                    class="fa-brands fa-twitter"></i></a>
                                <a href='https://open.spotify.com/artist/6PiAIZaF02pP1JNO58yt1H?si=MDPWHRPwTlKKlpvpn-gyvg'
                                    target="_blank" rel="noopener"><i class="fa-brands fa-spotify"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="works">
                <div class="works-box">
                    <div>
                        <h2 class="section-header works-section-header">Works</h2>
                    </div>
                    <div class="works-IMGs">
                        <a href='https://mattdaymusic.net/PaperSwords.html' target='_blank'><img class="works-IMG" alt="Paper Swords Logo"
                            src={PaperSwordsLogo} /></a>
                        <a href='https://player2productions.com/MakeMeAMatch' target='_blank'><img class="works-IMG" alt="Make Me A Match Logo"
                            src={MMAMLogo} /></a>
                        <a href='https://player2productions.com/SuperMarioIsDead' target='_blank'><img class="SMID-works-IMG works-IMG" alt="Super Mario is Dead Logo"
                            src={SMIDLogo} /></a>
                        <a href='https://player2productions.com/ManiacManor' target='_blank'><img class="works-IMG" alt="Maniac Manor Logo"
                            src={ManiacManorLogo} /></a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
            )
}
