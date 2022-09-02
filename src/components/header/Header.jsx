import React from "react";
import { Link } from "react-router-dom";
import "../header/Header.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Header = () => {
  return (
    <div className="Header">
      <div className="container-fluid">
        <div className="header-content d-flex justify-content-between align-item-center">
          <div className="logo w-100">
            <img className="img-fluid" src="/image/logo.png" alt="logo" />
          </div>
          <nav>
            <ul className="list-unstyled d-flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="album">
                <a href="#">Albums</a>
                <ul className="drop-menu list-unstyled">
                  <li>
                    <a href="#">Discography</a>
                  </li>
                  <li>
                    <a href="#">Single Album</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Live</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <ul className="list-unstyled d-flex">
              <li>
                <FacebookIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
