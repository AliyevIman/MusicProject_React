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
import jwtDecode from "jwt-decode";
import { Box } from "@mui/system";
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { Logout, PersonAdd, Settings } from "@mui/icons-material";

const Header = () => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const myUser = useSelector((state) => state.loginUser);
  const { userInfo } = useSelector(st => st.loginUser);

    if (userInfo) {
        var decode = jwtDecode(userInfo.token.result.token);
      }
      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
              </li>
              <li>
                <Link to="/liveshow">Live</Link>
              </li>
              {
               myUser && myUser.userInfo && myUser.userInfo.token &&
                <li>
                  <Link to="/artist">Artist</Link>
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
              </li>       {myUser && myUser.userInfo && myUser.userInfo.token ? ( 
                // <li className="email-box">
                //   <Link className="user-email" to="#">
                //     <span>{myUser.userInfo.email}</span>
                //   </Link>
                  
                //   <Link className="user-email" to={`/usermusics/${decode.Id}`}>
                //     <span>See Your Musics</span>
                //   </Link>
                //   <Link className="user-email" to={`/useralbum/${decode.Id}`}>
                //     <span>See Your Albums</span>
                //   </Link>
                //   <button onClick={() => dispatch(logoutAction())}>
                //     {" "}
                //     <Link to="/">
                //     Logout{" "}

                //     </Link>
                //   </button>
                // </li>
                <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem>
                    <Avatar /> Profile :{myUser.userInfo.email}
                  </MenuItem>
                  <MenuItem>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    <Link style={{textDecoration:"none",color:"#202020"}}  to={`/register`}>

                    Add another account
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                    <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Link style={{textDecoration:"none",color:"#202020"}}  to={`/useralbum/${decode.Id}`}>
                    <span>See Your Albums</span>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                    <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Link style={{textDecoration:"none",color:"#202020"}}  to={`/usermusics/${decode.Id}`}>
                    <span>See Your Musics</span>
                  </Link>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(logoutAction())}>
                    <ListItemIcon >
                      <Logout fontSize="small" />
                    </ListItemIcon >
              
                 {" "}
                     <a style={{textDecoration:"none",color:"#202020"}} >
                  Sign Out{" "}

                    </a>
                    
                  </MenuItem>
                </Menu>
              </React.Fragment>
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
          </nav>

    
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
                  <li><Link to="/">Home</Link> </li>
                  <li><Link to="/albumdisc">Albums</Link> </li>
                  <li><Link to="/liveshow">Live Shows</Link> </li>
                  {
               myUser && myUser.userInfo && myUser.userInfo.token &&
                <li>
                  <Link to="/artist">Artist</Link>
                </li>
              }
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
