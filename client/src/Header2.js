import React from 'react';
import {Link} from 'react-router-dom';

import {FaFacebook} from "react-icons/fa";

import {IoLogoTwitter} from "react-icons/io";
import {BsInstagram} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";

import { useUser } from "./auth/useUser";



  const iconsStyles = {
    paddingRight:'3px',
    textDecoration:'none'
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
     
  <div style={{backgroundColor:'#E1E2E2',paddingTop:'5px'}}>
       <div style={{float:'right',display:'inline'}}>
          {user ? <h4 style={{marginRight:'10px',textAlign:'right',paddingTop:'3px',color:'rgb(3, 176, 176)'}}>Hi, {username||name||given_name} <span style={{color:'black',fontWeight:'light'}}>| </span><Link style={{color:'rgb(3, 176, 176)',paddingLeft:'5px',border:'none'}} to="/" onClick={handleLogOut}>Logout</Link></h4>:''}
       </div>

    <h4 style={{marginLeft:'10px',textAlign:'left',paddingRight:'0.2vh',float:'left',color:'rgb(3, 176, 176)'}}>Stay connected</h4>
    <span style={{padding:'10px'}} className='social-icons'>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={25} color={'#3b5998'} style={iconsStyles}/></a>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><IoLogoTwitter size={25} color={'#00acee'} style={iconsStyles}/></a>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><BsInstagram size={25} color={'#4c68d7'} style={iconsStyles}/></a>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><SiLinkedin size={25} color={'#0e76a8'}/></a>
    </span>
 </div>
 )};

