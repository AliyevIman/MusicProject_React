import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api/BaseConfig";
import LiveShow from "../components/liveShows/LiveShow";
import Mainslider from "../components/mainSlider/Mainslider";
import "../pages/Home.scss";
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Home = () => {
  const [musician, setMusician] = useState([]);
  const getMusician = () => {
    fetch(`${BASE_URL}api/Musician/GetAllMusician`)
      .then((c) => c.json())
      .then((s) => setMusician(s));
  };
  useEffect(() => {
    getMusician();
  }, []);

  return (
    <>
      <Mainslider />
      <LiveShow />
      <section id="artist">
        <div className="container ">
          {
            musician&&
            musician.map(mus=>(
              mus.isNew&&
              <div className="about-section row">
              <div className="col-lg-6">
                <div className="about-text">
                  <h2 className="sm-title"> Artist Bio</h2>
                  <span>
                    “{mus.biography}” 
                  </span>
                  <p>
                    Southern Avenue is a Memphis street that runs from the
                    easternmost part of the city limits all the way to Soulsville,
                    the original home of Stax Records. Southern Avenue is also the
                    name of a fiery young Memphis quintet that embodies its home
                    city's soul, blues and gospel traditions.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <TwitterIcon/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <GoogleIcon/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FacebookIcon/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <InstagramIcon/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="prz-thumb">
                  <div className="img-thumb">
                    <img src="/image/BinaAlbum.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
        
           ))
          }
        </div>
      </section>
    </>
  );
};

export default Home;
