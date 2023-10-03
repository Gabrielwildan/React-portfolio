import React from 'react'
import "./Intro.css";
import bg from '../../assets/person2.png';
import btnimg from '../../assets/instagram logo.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <sectiion id="intro">
            <div className="intro-content">
                <span className="hello">Hello!</span>
                <span className="intro-text">I'am  <span className="nama">Olajide Babatunde</span><br />Im From Africa</span>
                <p className="intro-para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sed itaque placeat laudantium iure eius,<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                </p>
                <Link><button className="btn"><img className='hire-me' src={btnimg} alt="hireme" />Ayonima</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </sectiion>
    )
}

export default Intro