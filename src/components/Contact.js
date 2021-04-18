import React, { useState, useEffect } from 'react';
import './Contact.css';
import Navbar from "./Navbar"
import emailjs from 'emailjs-com';


export default function About(props) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_1', e.target, 'user_MKPjjgD2nisTzyWUsmrmJ')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      <>
      <Navbar value={2} />
      <div className="contact">
        <div className="form">
            <h2>Kérdésed van?</h2>
            <p>Keress bátran!</p>
            <form onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <div className="form-text">
                    <textarea name="html_message" required/>
                    <label>Kérdés</label>
                </div>
                <div className="user-box">
                    <input type="text" name="from_name" required/>
                    <label>Név</label>
                </div>
                <div class="user-box">
                    <input type="text" name="from_email" required/>
                    <label>Email</label>
                </div>
                <div>
                    <input class="send_btn" type="submit" value="Küldés"/>
                </div>
            </form>
      </div>
      <div class="footer">
        <a href="https://www.qdiak.hu">Powered by Quantum</a>
      </div>
    </div>
    </>
  );
}