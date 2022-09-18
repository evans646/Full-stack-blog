import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import { RiMenu3Line, RiCloseLine, RiLinkedinFill } from 'react-icons/ri';
import logo from '../logo.svg';

import { useUser } from '../auth/useUser';

export function Navbar () {


  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const user = useUser();

  return user ?(
    <div className="mainNavbar">
      <div className="navbarLinks">
        <div className="navbarLogo">
          <img src={logo} />
        </div>
        <div className="navlinksWrapper">
          <p><a href="/">Home</a></p>
          <p><Link to="/allblogs">All Blogs</Link></p>
        </div>
      </div>
      <div className="navbarSignLinks">
      <p><Link to="/signout" onClick={handleLogOut}>Sign out</Link></p>
      </div>
      <div className="navMenu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navMenuContainer scale-up-center">
          <div className="navMenuLinks">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/allblogs">All Blogs</Link></p>
          </div>
          <div className="navMenuSignLinks">
          <p><Link to="/signout" onClick={handleLogOut}>Sign out</Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
  ):(
    <div className="mainNavbar">
    <div className="navbarLinks">
      <div className="navbarLogo">
        <img src={logo} />
      </div>
      <div className="navlinksWrapper">
        <p><Link to="/">Home</Link></p>
        <p><a href="/allblogs">All Blogs</a></p>
      </div>
    </div>
    <div className="navbarSignLinks">
      <p><Link to="/signin">Sign in</Link></p>
      <button type="button"><Link to="/signup">Sign up</Link></button>
    </div>
    <div className="navMenu">
      {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
      <div className="navMenuContainer scale-up-center">
        <div className="navMenuLinks">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/allblogs">All Blogs</Link></p>
        </div>
        <div className="navMenuSignLinks">
          <p>Sign in</p>
          <button type="button"><Link to="/signup">Sign up</Link></button>
        </div>
      </div>
      )}
    </div>
  </div>
  )
};