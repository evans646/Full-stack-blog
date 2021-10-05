import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';





export const Footer = () => {

    return (
         <footer id="pageFooter">
         <form action="http://desolve.org" method="post" class="search-form">
          <label for="search">Looking for something? </label>
          <input type="search" placeholder="Search" title="Search" class="q" name="search" id="search"/>
          <input type="submit" class="submit" value="Go" name="submit"/>
        </form>
       
        <p><Link to="http://www.twitter.com/jameswillweb">twitter</Link></p>
    
        <p class="notice">&copy; 2021 Techboost All rights reserved</p>
        <div >
        </div>
      </footer>
    );
};


