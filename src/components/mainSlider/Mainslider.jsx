import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../mainSlider/MainSlider.scss";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
const Mainslider = () => {
  return (
    <section className="firstSection">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        className="my-slider"
      >
        <SwiperSlide className="slider-item">
          <img src="/image/slider2.jpg" className="img-fluid" alt="" />
          <div className="container">
            <div className="slider-content">
              <div className="col-lg-6">
                <h1>New Album Out Now</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  ut error quos assumenda eligendi necessitatibus obcaecati vero
                  autem alias repellendus!
                </p>
                {/* <form action="#">
              <input
                className="form-control"
                type="text"
                placeholder="Learn..."
              />
            </form> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item">
          <img src="/image/slider1.jpg" className="img-fluid" alt="" />
          <div className="container">
            <div className="slider-content">
              <div className="col-lg-6">
                <h1>New Single Out Now</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  natus nihil fugit alias odio, amet quos id dolores neque
                  voluptate?
                </p>
                {/* <form action="#">
              <input
                className="form-control"
                type="text"
                placeholder="Learn..."
              />
            </form> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item">
          <img src="/image/slider3.jpg" className="img-fluid" alt="" />
          <div className="container">
            <div className="slider-content">
              <div className="col-lg-6">
                <h1>Best Artist Of The Year</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  atque eos vel praesentium magnam consequatur omnis eveniet
                  reiciendis. Animi, ea.
                </p>
                {/* <form action="#">
              <input
                className="form-control"
                type="text"
                placeholder="Learn..."
              />
            </form> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="music-player">
        <div className="container">
          <div className="ms-player-content">
            <div className="ms-album">
              <div className="ms-thumb">
                <img src="" alt="MusicianImage" />
              </div>
              <div className="ms-info">
                <h4>MusicianName</h4>
                <span>Albumname</span>
              </div>
            </div>
            <div className="ms-player">
              <div className="jb-controller text-center">
                <button className="jb-previus">
                  <SkipPreviousIcon />
                </button>
                <button className="jb-play">
                  <PlayArrowIcon />
                </button>
                <button className="jb-next">
                  <SkipNextIcon />
                </button>
              </div>
              <div className="title-bar">
                <div className="ms-top">
                  <h4> khwef</h4>
                  <div className="jp-time-holder">
                    <div className="jp-current-time" aria-label="time">
                      00:00
                    </div>
                    <div aria-label="duration" className="jp-duration"></div>
                  </div>
                </div>
                <div className="jp-progress">
                  <div className="jp-seek-bar">
                    <div className="jp-play-bar"></div>
                  </div>
                </div>
              </div>
              <div className="jp-valume-controls"></div>
            </div>
          </div>
        </div>
      </div> */}
      <MusicPlayer/>
    </section>
  );
};

export default Mainslider;
