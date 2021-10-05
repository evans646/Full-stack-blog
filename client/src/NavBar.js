import React, { useState } from "react";
import { Link,NavLink,useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { FaLinkedinIn, FaUserCircle} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

import { IconContext } from "react-icons";

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


import { useUser } from "./auth/useUser";
import "./index.css";

//material ui styles
const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export const NavBar = () => {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useUser();
  const { given_name,name, picture,username} = user || '';
  

  const handleLogOut = (e) => {
    e.preventDefault();
    // We'll want to log the user out here
    localStorage.removeItem("token");
    // history.push('/login');
    window.location.reload();
  };

  return user ? (
   
    <nav id="mainNav">
       <Link className="hamburger" href="#navbar" aria-label="Open main menu" >
    <GiHamburgerMenu/>
  </Link>
      <>
        <ul>
          <li >
            <NavLink exact className="current" to="/">
              Home
              <em> navigate to home </em>
            </NavLink>
          </li>
          <li  activeClassName="active">
            <NavLink  to="/about" >
              About
              <em> the author </em>
            </NavLink>
          </li>
          <li >
            <NavLink  to="/articles-list" activeClassName="active" >
              Articles
              <em> our articles</em>
            </NavLink>
          </li>
          <li  >
              <Link
              activeClassName="active"
                to="#"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                E- Library
                <em>e library</em>
              </Link>
           <Box>
           <Menu
           className={classes.paper}
           id="simple-menu"
           anchorEl={anchorEl}
           keepMounted
           open={Boolean(anchorEl)}
           onClose={handleClose}
         >
           <span className='e-lib-item' >
           <MenuItem>
             <NavLink exact  to="/e-library"  activeClassName="active" >
               E-Books
             </NavLink>
           </MenuItem>
           <Divider />
           <MenuItem onClick={handleClose}>
             <NavLink className="articles" to="/tutorials" activeClassName="active" >
               Tutorials
             </NavLink>
           </MenuItem>
           <Divider />
           <MenuItem onClick={handleClose}>
             <NavLink className="articles" to="/forum" activeClassName="active">
               Forum
             </NavLink>
           </MenuItem>
           </span>
         </Menu>
           </Box>
          </li>
          <li >
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Link variant="contained" {...bindTrigger(popupState)}>
  
          <IconContext.Provider
      value={{ color: 'black', size: '23px' }}
    >
      <div>
      <FaUserCircle/>
      <em>welcome {username}</em>
      </div>
    </IconContext.Provider>
          </Link>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/" onClick={handleLogOut}>Logout</Link></MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
          </li>
        </ul>
        <Link className="close"  href="#" aria-label="Close main menu">
        <span className="sr-only">Close main menu</span>
       <AiOutlineClose/>
      </Link>
      </>
    </nav>
  ) : (
    <div>
      <nav id="mainNav">
        <ul>
          <li>
            <Link  to="/" className="current" activeClassName="active" >
              Home
              <em>navigate to home</em>
            </Link>
          </li>
          <li >
            <NavLink className="about" to="/about" activeClassName="active">
              About
              <em>the author</em>
            </NavLink>
          </li>
          <li >
            <NavLink className="articles" to="/articles-list" activeClassName="active">
              Articles
              <em> our articles</em>
            </NavLink>
          </li>
          <li>
              <Link
                to="#"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                E- Library
                <em>e library</em>
              </Link>
             <Menu
                className={classes.paper}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
               <span className='e-lib-item'>
               <MenuItem onClick={handleClose} >
                  <Link className="articles" to="/e-library">
                    E-Books
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Link className="articles" to="/tutorials">
                    Tutorials
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Link className="articles" to="/forum">
                    Forum
                  </Link>
                </MenuItem>
               </span>
              </Menu>
          </li>
          <li >
            <NavLink className="signup" to="/signup" activeClassName="active">
              Register
              <em>new account</em>
            </NavLink>
          </li>
          <li >
            <NavLink className="login" to="/login" activeClassName="active">
              Sign In
              <em>account</em>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
