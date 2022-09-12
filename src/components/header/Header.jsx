import React from "react";
import { Link } from "react-router-dom";
import "../header/Header.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="Header">
      <div className="container-fluid">
        <div className="header-content d-flex justify-content-between align-item-center">
          <div className="logo w-100">
            <Link to="/">
            <img className="img-fluid" src="/image/logo.png" alt="logo" />

            </Link>
          </div>
          <nav>
            <ul className="list-unstyled d-flex menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="album">
                <a href="#">Albums</a>
                <ul className="drop-menu list-unstyled">
                  <li>
                    <Link to="/albumdisc">Discography</Link>
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
              <li>
                <Link className="text-deceration-none" to="/shop">
                  {" "}
                  <ShoppingBasketIcon />{" "}
                  <div className="reqem">
                    {cart && cart.cartitems
                      ? cart.cartitems.reduce(
                          (total, item) => total + item.quantity,
                          0
                        )
                      : 0}
                  </div>
                </Link>
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
          <div className="menu-bar">
            <i>
              <MenuIcon />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
