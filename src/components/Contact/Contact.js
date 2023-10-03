import React, { useRef } from 'react';
import './Contact.css'
import LBWK from '../../assets/LBWK.png'
import RB from '../../assets/rocket bunny.png'
import Nismo from '../../assets/Nismo-Logo.png'
import Greddy from '../../assets/greddy_logo.png'

import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import telegram from '../../assets/telegram.png'

// import emailjs from '@emailjs/browser';

//Not Complete look At https://www.emailjs.com/docs/examples/reactjs/ For More About Send Email :)

const Contact = () => {
    //     const form = useRef();

    //     const sendEmail = (e) => {
    //         e.preventDefault();

    //         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //             .then((result) => {
    //                 e.target.reset();
    //                 alert('Email Sent!');
    //             }, (error) => {
    //                 console.log(error.text);
    //             });
    //     };
    // ref={form} onSubmit={sendEmail}
    return (
        <section id="contact-page">
            <div id="clients">
                <h1 className="contact-page-title">My Clients</h1>
                <p className="clients-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptas ea quo incidunt,<br />
                    id sint esse illo blanditiis corrupti, officiis deleniti perferendis perspiciatis est et ipsa corporis.
                </p>
                <div className="clients-imgs">
                    <img className='clients-img' src={LBWK} alt="clients" />
                    <img className='clients-img' src={RB} alt="clients" />
                    <img className='clients-img' src={Nismo} alt="clients" />
                    <img className='clients-img' src={Greddy} alt="clients" />
                </div>
            </div>
            <div id="contact-page">
                <h1 className="contact-page-title">Contact Me</h1>
                <span className="contact-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam eum sint iure aliquam. Sunt, quibusdam. <br />
                    Ipsam voluptas totam aliquam, ut quaerat eius? Corrupti ex provident minus, quam est veritatis?
                </span>
                <form action="" className="contact-form">
                    <input type="text" placeholder='Your Name' className="name" name='your_name' />
                    <input type="email" placeholder='Your Email' className="email" name='your_email' />
                    <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
                    <button type='submit' value="send" className="submit-btn">Submit</button>
                    <div className="links">
                        <img src={instagram} alt="" className="link" />
                        <img src={facebook} alt="" className="link" />
                        <img src={telegram} alt="" className="link" />
                        <img src={youtube} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact