import React from 'react'
import { animateScroll as scroll } from "react-scroll";
import Down from '../Down.svg'

const Home = () => {
    const toDownload = () => { 
        scroll.scrollToBottom()
    }
    const learnMore = () => { 
        scroll.scrollTo(1000, 0)
    }

    return (
        <div>
            <div className="gradient">
                <p className='home-gradient-title'>Umbrella...</p>
                <p className='home-gradient-paragraph'>Never forget your umbrella again,
                The Umbrella sends you a notification in the morning if you should take
                an umbrella to work </p>
                <p className='home-gradient-button' onClick={learnMore}><b>LEARN MORE</b></p>
                <p className='home-gradient-button' onClick={toDownload} style={{ backgroundColor: '#01caff', color: 'white' }}><b>DOWNLOAD</b></p>
            </div>

            <div className='home-section' style={{ color: 'black' }}>
                <p className='home-section-title'><b>Easy. Quick. Fast</b></p>
                <hr className='home-section-break'></hr>
                <p className='home-section-paragraph'>Umbrella runs in the background so once you download don't have to do a thing</p>
                <p className='home-gradient-button' onClick={toDownload} style={{ backgroundColor: '#01caff', color: 'white' }}><b>GET NOW</b></p>

            </div>

            <div className='home-section' style={{ backgroundColor: '#01caff', color: 'white' }}>
                <p className='home-section-title'><b>We keep it simple.</b></p>
                <hr className='home-section-break'></hr>
                <p className='home-section-paragraph'>Only sending reminders when they matter</p>
                <p className='home-gradient-button' onClick={toDownload}><b>DOWNLOAD</b></p>

            </div>


            <div className='home-section' style={{ color: 'black' }}>
                <p className='home-section-title'><b>Download</b></p>
                <hr className='home-section-break'></hr>
                <div className='card'>
                    <p style={{ fontSize: '30px' }}>ANDROID</p>
                    <hr style={{ width: '20%' }} />
                    <img src={Down} alt='' />
                    
                </div>
                <div className='card'>
                    <p style={{ fontSize: '30px' }}>DESKTOP</p>
                    <hr style={{ width: '20%' }} />
                    <p className='card-p'>Coming Soon</p>
                    

                </div>
            </div>

        </div>
    )
}

export default Home;


