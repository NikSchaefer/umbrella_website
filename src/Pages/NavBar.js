import React from 'react'
import { animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    window.onscroll = () => {
        const header = document.getElementById('header')
        if (window.scrollY > 100) {
            header.style.color = 'gray'
            header.style.backgroundColor = 'white'
        }
        else {
            header.style.color = 'rgba(230, 230, 230, 0.8)'
            header.style.backgroundColor = 'transparent'
        }
    }
    return (
        <div>
            <header id='header'>
                <p className='nav-title' onClick={scroll.scrollToTop}>UMBRELLA</p>
                <p className='nav-link' onClick={scroll.scrollToBottom}>DOWNLOAD</p>
            </header>

        </div>
    )
}

export default NavBar;