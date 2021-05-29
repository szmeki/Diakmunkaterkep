import React, { useState } from 'react';
import './Contact.css';
import Navbar from "./Navbar"
import emailjs from 'emailjs-com';


export default function About(props) {

  const [open, setOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_1', e.target, 'user_MKPjjgD2nisTzyWUsmrmJ')
      .then((result) => {
          setOpen(true);
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
            {!open ?
            (<form onSubmit={sendEmail}>
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
            </form>) :
              (<div>
                  <h1>Az emailed-et sikeresen megkaptam, igyekszem minnél hamarabb válaszolni.</h1>
              </div>
                
            )}

      </div>
      <div class="footer">
        <a href="https://www.qdiak.hu">Powered by Quantum</a>
      </div>
    </div>
    </>
  );
}