import React from 'react';
import {Link} from 'react-router-dom';


import {FaFacebook} from "react-icons/fa";
import {IoLogoTwitter} from "react-icons/io";
import {BsInstagram} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";

import { useUser } from "../auth/useUser";




export const TopHeader = () => {

    const user = useUser();
    const { given_name,name, username} = user || '';


    const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload();
  };

      
    return (
  <div className='header-background'>
      <div className='header-links'>
          {user ? <h4 className='header-greet'>Hi, {username||name||given_name} <span className='header-greet-divider'>|</span><Link className='header-logout-link' to="/" onClick={handleLogOut}>Logout</Link></h4>:''}
     </div>

    <h4 className='header-str-connect'>Stay connected</h4>
    <span className='header-social-icons'>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={25} color={'#3b5998'}  id='header-icon'/></a>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><IoLogoTwitter size={25} color={'#00acee'}  id='header-icon'/></a>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><BsInstagram size={25} color={'#4c68d7'}  id='header-icon'/></a>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><SiLinkedin size={25} color={'#0e76a8'} id='header-icon'/></a>
    </span>
 </div>
 )};


