import React, { useState } from 'react';
import './navbar.css';
import logo from "../../assets/Airdrop_logo_ogV2-removebg.png";
import contactimg from "../../assets/instagram logo.png"
import burgerbar from "../../assets/Hamburger_icon_white.png"
import { Link } from 'react-scroll';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="NavLogo" className='Logo' />
            <div className="menu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menu-list-item">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="menu-list-item">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="menu-list-item">Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className="menu-list-item">Clients</Link>
            </div>
            <button className="menu-btn" onClick={() => {
                document.getElementById('contact-page').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactimg} alt="" className="menu-img" />
                Contact Me
            </button>

            <img src={burgerbar} alt="NavLogo" className='mob-menu' onClick={() => setShowMenu(!showMenu)} />
            <div className="nav-mob-menu" style={{ display: showMenu ? 'flex' : 'none' }} >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="list-item" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="list-item" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="list-item" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className="list-item" onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact-page' spy={true} smooth={true} offset={-70} duration={500} className="list-item" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar