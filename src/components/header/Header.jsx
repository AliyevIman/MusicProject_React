import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../header/Header.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/Actions/UserAction";
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const Header = () => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const myUser = useSelector((state) => state.loginUser);

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
                <Link to="/albumdisc">Albums</Link>
                <ul className="drop-menu list-unstyled">
                  <li>
                    <Link to="/albumdisc">Discography</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/liveshow">Live</Link>
              </li>
              {
               myUser && myUser.userInfo && myUser.userInfo.token &&
                <li>
                  <Link to="/artist">BeArtist</Link>
                </li>
              }

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
          {/* <div className="social">
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
          </div> */}
          <div className="personal">
            <div className="personal-icon d-flex">
              <PersonOutlineIcon /> <span>Account</span>
            </div>
            <ul className="list-unstyled account-ul">
              {myUser && myUser.userInfo && myUser.userInfo.token ? (
                <li className="email-box">
                  <Link className="user-email" to="#">
                    <span>{myUser.userInfo.email}</span>
                  </Link>
                  <button onClick={() => dispatch(logoutAction())}>
                    {" "}
                    Logout{" "}
                  </button>
                </li>
              ) : (
                <>
                  {" "}
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="menu-bar">
            <i onClick={() => setShow(!show)} >
              {
                !show ? <MenuIcon /> : <CloseIcon />
              }

            </i>

          </div>
          <div className="mobile-menu">
            {

              show && (
                <ul className={`list-unstyled ${show && `active`}`}>
                  <li><a href="#">Album</a> </li>
                  <li><a href="#">Album</a> </li>
                  <li><a href="#">Album</a> </li>
                  <li><a href="#">Album</a> </li>
                  <li><a href="#">Album</a> </li>
                </ul>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
