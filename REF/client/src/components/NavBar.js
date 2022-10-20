import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import { FaBars,FaTimes } from "react-icons/fa";

import { IconContext } from "react-icons";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useUser } from "../auth/useUser";
// import menuIcon from './images/menu.png';
// import '../css/navbar.css';


//material ui styles
const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export const Navbar = () => {
  //to control nav responsiveness
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavClick = () => setToggleMenu(!toggleMenu);
  const Close = () => setToggleMenu(false);


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useUser();

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload();
  };

  return user ? (
    <div >
        <NavLink className="hamburger" href="#navbar" aria-label="Open main menu">
          <span className="sr-only">Open main menu</span>
          <FaBars aria-hidden="true" style={{padding:'10px'}} />
        </NavLink>
      <nav id="mainNav">
        <ul>
          <li>
            <NavLink exact className="current" to="/">
              Home 
              <em> navigate to home </em>
            </NavLink>
          </li>
          <li activeclassname="active">
            <NavLink to="/about">
              About
              <em> the author </em>
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles-list" activeclassname="active">
              Articles
              <em> our articles</em>
            </NavLink>
          </li>
          <li>
            <Link
              activeclassname="active"
              to="#"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
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
                <span className="e-lib-item">
                  <MenuItem onClick={handleClose}>
                    <NavLink exact to="/e-library" activeclassname="active">
                      E-Books
                    </NavLink>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      className="articles"
                      to="/tutorials"
                      activeclassname="active"
                    >
                      Tutorials
                    </NavLink>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <a
                      className="articles"
                      href="https://techboost.nodebb.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Forum
                    </a>
                  </MenuItem>
                </span>
              </Menu>
            </Box>
          </li>
          <li>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <div>
                  <div variant="contained" {...bindTrigger(popupState)}>
                    <IconContext.Provider
                      value={{ color: "black", size: "23px" }}
                    >
                      <FaUserCircle size={50} color={"rgb(3, 176, 176)"} />
                      <span>
                        <IoMdArrowDropdown
                          style={{ marginBottom: "5px", marginRight: "15vh" }}
                        />
                      </span>
                    </IconContext.Provider>
                  </div>
                  <Menu {...bindMenu(popupState)}>
                    <div className="profile-items">
                      <MenuItem onClick={popupState.close}>
                        <Link to="/user/profile">My account</Link>
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={popupState.close}>
                        <Link to="/" onClick={handleLogOut}>
                          Logout
                        </Link>
                      </MenuItem>
                    </div>
                  </Menu>
                </div>
              )}
            </PopupState>
          </li>
        </ul>
        <NavLink class="close" href="#" aria-label="Close main menu">
            <span class="sr-only">Close main menu</span>
            <i class="fas fa-times" aria-hidden="true"></i>
          </NavLink>
      </nav>
    </div>
  ) : (
    <div>
        <NavLink className="hamburger"  to="#navbar" aria-label="Open main menu">
          Menu<FaBars aria-hidden="true"  onClick={handleClick}/>
       </NavLink>
      <nav id="mainNav" onClick={e => e.stopPropagation()} >
        <ul>
          <li>
            <Link to="/" className="current" activeclassname="active">
              Home
              <em>navigate to home</em>
            </Link>
          </li>
          <li>
            <NavLink className="about" to="/about" activeclassname="active">
              About
              <em>the author</em>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="articles"
              to="/articles-list"
              activeclassname="active"
            >
              Articles
              <em> our articles</em>
            </NavLink>
          </li>
          <li>
            <Link
              to="#"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
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
              <span className="e-lib-item">
                <MenuItem onClick={handleClose}>
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
          <li>
            <NavLink
              className="signup"
              to="/register"
              activeclassname="active"
            >
              Register
              <em>new account</em>
            </NavLink>
          </li>
          <li>
            <NavLink className="login" to="/login" activeclassname="active">
              Sign In
              <em>account</em>
            </NavLink>
          </li>
        </ul>
        <Link className="close-menu"  to="#" aria-label="Close main menu">
          <FaTimes   aria-hidden="true"  onClick={handleClick}/>
        </Link>
      </nav>
    </div>
  );
};
