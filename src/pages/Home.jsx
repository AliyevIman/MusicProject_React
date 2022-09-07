import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api/BaseConfig";
import LiveShow from "../components/liveShows/LiveShow";
import Mainslider from "../components/mainSlider/Mainslider";
import "../pages/Home.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Iframe from "react-iframe-click";
const Home = () => {
  const [musician, setMusician] = useState([]);
  const [music, setMusic] = useState([]);
  const [show, setShow] = useState(true);
  const getMusician = () => {
    fetch(`${BASE_URL}api/Musician/GetAllMusician`)
      .then((c) => c.json())
      .then((s) => setMusician(s));
  };
  const GetMusic = () => {
    fetch(`${BASE_URL}api/Music/GetAll`)
      .then((c) => c.json())
      .then((c) => setMusic(c));
  };
  useEffect(() => {
    getMusician();
    GetMusic();
  }, []);
  console.log(show);

  return (
    < >
      <Mainslider />
      <LiveShow />
      <section id="artist">
        <div className="container ">
          {musician &&
            musician.map(
              (mus) =>
                mus.isNew && (
                  <div className="about-section row">
                    <div className="col-lg-6">
                      <div className="about-text">
                        <h2 className="sm-title"> Artist Bio</h2>
                        <span>“{mus.biography}”</span>
                        <p>
                          Southern Avenue is a Memphis street that runs from the
                          easternmost part of the city limits all the way to
                          Soulsville, the original home of Stax Records.
                          Southern Avenue is also the name of a fiery young
                          Memphis quintet that embodies its home city's soul,
                          blues and gospel traditions.
                        </p>
                        <ul>
                          <li>
                            <a href="#">
                              <TwitterIcon />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <GoogleIcon />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FacebookIcon />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <InstagramIcon />
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
                )
            )}
        </div>
      </section>

      <section className="musicVideo">
        <div className="fixed-bg"></div>
        <div className="container">
          {music.map(
            (c) =>
              c.isFeatured && (
                <div className="video">
                  <a
                    onClick={() => setShow(!true)}
                    className="play-btn swipebox"
                  >
                    <PlayArrowIcon />
                  </a>
               
                  <h3>New Music Video {c.name}</h3>
                </div>
              )
          )}
        </div>
      </section>

      {!show? <div className="iframe">
      <iframe width="600" height="300" src="https://www.youtube.com/embed/-mNp3-UX9Qc" title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>

      </div>
     :null}

    </>
  );
};

export default Home;
