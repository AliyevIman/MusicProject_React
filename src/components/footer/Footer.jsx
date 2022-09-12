import React from 'react'
import '../footer/footer.scss'
import ScrollToTop from "react-scroll-to-top";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <section className='section-footer'>
      <ScrollToTop smooth top="20" />
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="footer-top-left">
                <div className="row">
                  <div className="col-lg-4">
                    <ul className="list-unstyled">
                      <li><h4>About the Company</h4></li>
                      <li>About Us</li>
                      <li>Careers</li>
                      <li>Affiliates</li>
                      <li>Press</li>
                      <li>Investor Relations</li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <ul className="list-unstyled">
                      <li><h4>Information</h4></li>
                      <li>About Us</li>
                      <li>Careers</li>
                      <li>Affiliates</li>
                      <li>Press</li>
                      <li>Investor Relations</li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <ul className="list-unstyled">
                      <li><h4>Site Terms</h4></li>
                      <li>Sitemap</li>
                      <li>Careers</li>
                      <li>Affiliates</li>
                      <li>Press</li>
                      <li>Investor Relations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-top-right">
                <ul className="list-unstyled">
                  <li><h4>Newsletter Subscribe</h4></li>
                  <li className='yellow-li'>Get 5% OFF when you signup for our email newsletter!</li>
                  <li><input type="text" /></li>
                  <li><span>By entering your email address, you agree to receive offers, promotions, and other commercial.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div class="row align-items-center">
            <div className="col-lg-6">
              <div className="footer-bottom-left">
                <span>© 2022 Furnihaus. All rights reserved</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-right">
                <div className="footer-icons">
                  <a href="#"><FacebookIcon/></a>
                  <a href="#"><TwitterIcon/></a>
                  <a href="#"><InstagramIcon/></a>
                  <a href="#"><YouTubeIcon/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer