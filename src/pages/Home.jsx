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
import AddIcon from '@mui/icons-material/Add';
import FsLightbox from "fslightbox-react";
import { Skeleton } from "@mui/material";
import { PushSpinner, SequenceSpinner } from "react-spinners-kit";
// import Iframe from "react-iframe-click";
const Home = () => {
  const [musician, setMusician] = useState([]);
  const [musicMusician, setMusicMusician] = useState([]);
  const [music, setMusic] = useState([]);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const getMusician = () => {
    fetch(`${BASE_URL}api/Musician/GetAllMusician`)
      .then((c) => c.json())
      .then((s) => setMusician(s));
  };
  const getMusicMusician = () => {
    fetch(`${BASE_URL}api/Musician/GetAll`)
      .then((c) => c.json())
      .then((s) => setMusicMusician(s));
  };
  const GetMusic = () => {
    fetch(`${BASE_URL}api/Music/GetAll`)
      .then((c) => c.json())
      .then((c) => setMusic(c));
  };
  useEffect(() => {
    getMusician();
    GetMusic();
    getMusicMusician();
  }, []);
  // console.log(show);
  //   musicMusician.map((el) => {
  //   el.musics.map((fel) => console.log( fel.music))
  // });
  return (
    <>
      <Mainslider />
      <LiveShow />
      <section id="artist">
        <div className="container ">
          {
          musician &&
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
                          <img className="img-fluid" src={mus.photo} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )
                }
            {/* //   <SequenceSpinner size={30} color="#686769"  />  } */}
        </div>
      </section>

      <section className="musicVideo">
        <div className="fixed-bg"></div>
        <div className="container">
          {
          music?
          music.map(
            (c) =>
              c.isFeatured && (
                <div className="video">
                  <a
                    onClick={() => setShow(!show)}
                    className="play-btn swipebox"
                  >
                    <PlayArrowIcon />
                  </a>
                  <>
                    <FsLightbox
                      toggler={show}
                      sources={[c.musicVideo]}
                    />
                  </>

                  <h3>New Music Video {c.name}</h3>
                </div>
              )
          ):<Skeleton animation="wave" variant="rectangular" width={210} height={118}/>  } 
        </div>
      </section>

      <section className="Gallery">
        <div className="fixed-gal"></div>
        <div className="container">
          <div className="gallery-section row">
            {musicMusician &&
              musicMusician.map((cs) => (
                <>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="gallery-col overlay2 ">
                      <img
                        alt="galllery-photo"
                        className="img-fluid"
                        src={cs.photo}
                      />
                      <div className="plus">
                        <div className="plus-icon" onClick={() => setHide(!hide)}>
                        <AddIcon/>
                        </div>
                     
                      </div>
                      <FsLightbox
                        toggler={hide}
                        sources={[cs.photo]}
                      />
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Home;
