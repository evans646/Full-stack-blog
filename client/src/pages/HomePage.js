import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import softwareImg from '../images/software.jpeg';
import hardwareImg from '../images/hardware.jpeg';
//import { useMediaQuery } from 'react-responsive'
import { FirstNews ,SecondNews,ThirdNews} from './NewsLandingPage';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DiCode} from "react-icons/di";

import ScrollAnimation from 'react-animate-on-scroll';

// FcNews
// GiNewspaper


const HomePage = () => {

  const [content, setContent] = useState('');



  const handleChange = (event) => {
    setContent(event.target.value);
  };


 return (
 <section id="content">
  <div className="banner">
    <h1>I love Software And I love Technology</h1>
    <p>We’re betting you do to. Welcome to our site, a growing collection of galleries taken by a small group of passionate urban photographers. Visit our galleries, buy some of our prints, or drop us a line. While you’re at it, feel free to submit a gallery of your own. <strong>Welcome</strong>.</p>
  </div>
  <article id="latest">
  <span style={{float:'right'}}><DiCode size={75} color={'rgb(3, 176, 176)'} className='icon'/></span>
    <h1>Latest Tech news</h1>


   <div>
   <FirstNews/>
   <SecondNews/>
   <ThirdNews />
   </div>
  
  </article>
  <aside>
    <nav id="archives">
      <h2>FEATURED CONTENT</h2>
      <ul>
        <li><Link to="/featured/webtechnologies" title="web technologies">Web Technologies</Link></li>
        <li><Link to="/featured/webdevelopement" title="web development">Web Development</Link></li>
        <li><Link to="/featured/graphicDesign" title="graphic design">Graphic Design</Link></li>
        <li><Link to="/featured/dataStructures" title="data structures">Data Structures</Link></li>
        <li><Link to="/featured/databaseManSys" title="data bases">Database Management  Systems </Link></li>
        <li><Link to="/featured/businessManagement" title="school">Business Management</Link></li>
        <li><Link to="/featured/socialMediamrkting/pages/1" title="social media marketing">Social Media Marketing</Link></li>
        <li><Link to="cincinnati.htm" title="school">Typing</Link></li>
      </ul>
      <select>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={content}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </select>
    </nav>

    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' >
    <section className="contest">
      <h2>Software</h2>
     <Link to='/software'> <img  src={softwareImg} width="200" height="200" alt="software"/></Link>
      <p>
         Do you know where this is? Send your guess to us via the contact page. All correct entries will be added to a drawing at the end of the month.
         The randomly selected winner will win a framed print of their choice from our shop. Cool!
         The randomly selected winner will win a framed print of their choice from our shop. Cool!
         
      </p>
    </section>
</ScrollAnimation>
<ScrollAnimation animateIn='fadeIn'  animateOut='fadeOut'> 
<section className="contest">
    <h2>Hardware</h2>
   <Link to='/hardware'><img src={hardwareImg} width="200" height="200" alt="hardware"/></Link>
    <p>
Tempora obcaecati velit suscipit at sunt officiis nostrum excepturi facilis repudiandae cum nam, consequuntur in assumenda iure? Earum iure ut rem iusto explicabo inventore ipsam, 
</p>
    </section>
</ScrollAnimation>

  </aside>
</section>
     
)};

export default HomePage;




