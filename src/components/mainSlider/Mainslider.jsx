import React from "react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
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
    <section className="firstSection ">
      <Swiper
        // install Swiper modules
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 1,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}

        className="my-slider"
      >
        <SwiperSlide className="slider-item ">
          <img src="/image/slider2.jpg" className="img-fluid" alt="" />
          <div className="container">
            <div className="slider-content">
              <div className="col-lg-6">
                <h1>New Album Out Now</h1>
                <div className="slider-p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                    ut error quos assumenda eligendi necessitatibus obcaecati vero
                    autem alias repellendus!
                  </p>
                </div>

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
                <div className="slider-p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    natus nihil fugit alias odio, amet quos id dolores neque
                    voluptate?
                  </p>
                </div>

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
                <div className="slider-p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                    ut error quos assumenda eligendi necessitatibus obcaecati vero
                    autem alias repellendus!
                  </p>
                </div>
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

    </section>
  );
};

export default Mainslider;
