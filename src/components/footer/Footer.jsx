import React from 'react'
import '../footer/footer.scss'
import ScrollToTop from "react-scroll-to-top";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function Footer() {
  const form = useRef();
  const navi = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v0oh9t8', 'template_b30wsfl', form.current, 'TKiLo8a30fb70K3yg')
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: `Sizin sorgunuz gonderildi, artıq siz email vasitesi ile bizden mesaj alaceysüz . Xoş dinlemeler`,
          showConfirmButton: false,
          timer: 4000,
        }).then(c => {
          e.target.reset();
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Bir xəta baş verdi.',
          text: `${error}`
        })
      });
     

  };
  return (
    <>
      <section className='block'>
        <div className="fixed-bg black-bg" ></div>
        <div className="subscribe-section text-center wow slideInUp">
          <h2>Stay in Touch</h2>
          <span>Subscribe to our newsletter and stay updated on the latest music albums, live shows and music releases.</span>


          <form className='subs-form' ref={form} onSubmit={sendEmail}>
            <div className="input-field" >
              <input type="email" required="true" name="user_email" placeholder='Enter your email address' />
              <span className='em-icon'>
                <EmailIcon />
              </span>
            </div>
            <button type='submit' value="Send" className='theme-btn'>
              <SendIcon />
              Subscribe
            </button>
          </form>



        </div>


      </section>
      <footer className="footer-bottom">
        <div className="container">
          <div class="row footer-content align-items-center">
            <div className="col-lg-6">
              <div className="footer-bottom-left">
                <span>© 2022 Furnihaus. All rights reserved</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-right">
                <ul className="footer-icons v2 list-unstyled ">
                  <li><FacebookIcon /></li>
                  <li><TwitterIcon /></li>
                  <li><InstagramIcon /></li>
                  <li><YouTubeIcon /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer