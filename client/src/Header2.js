import React from 'react';
import {Link} from 'react-router-dom';

import {FaFacebookF,FaFacebook} from "react-icons/fa";

import {IoLogoTwitter} from "react-icons/io";
import {BsInstagram} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";

import { useUser } from "./auth/useUser";



  const iconsStyles = {
    paddingRight:'3px'
};

export const Header2 = () => {

    const user = useUser();
    const { given_name,name, username} = user || '';


  const handleLogOut = (e) => {
    e.preventDefault();
    // We'll want to log the user out here
    localStorage.removeItem("token");
    // history.push('/login');
    window.location.reload();
  };

      
    return (
     
  <div style={{backgroundColor:'lightRed'}}>
       <div style={{float:'right',display:'inline'}}>
          {user? <h4 style={{marginRight:'10px',textAlign:'right',paddingTop:'3px',color:'green'}}>Hi, {username||name||given_name} <span style={{color:'black'}}>| </span><Link style={{color:'green',paddingLeft:'5px',border:'none'}} to="/" onClick={handleLogOut}>Logout</Link></h4>:''}
       </div>


    <h4 style={{marginLeft:'10px',textAlign:'left',paddingRight:'0.2vh',float:'left',color:'green'}}>Stay connected</h4>
    <span style={{padding:'10px'}}>
      <FaFacebook size={25} color={'#3b5998'} style={iconsStyles}/>
      <IoLogoTwitter size={25} color={'#00acee'} style={iconsStyles}/>
      <BsInstagram size={25} color={'#4c68d7'} style={iconsStyles}/>
      <SiLinkedin size={25} color={'#0e76a8'}/>
    </span>
 </div>
 )};

