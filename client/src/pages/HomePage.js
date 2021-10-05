import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import softwareImg from '../images/software.jpeg';
import hardwareImg from '../images/hardware.jpeg';
//import { useMediaQuery } from 'react-responsive'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





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
    <h1>Latest Tech news</h1>
    <section class="philly">
      <h2><Link to="philadelphia.htm" title="Philadelphia gallery">Philadelphia</Link></h2>
      <p className="pubdate">
        <time datetime="2011-08-16" pubdate>Aug 2011</time>
      </p>
      <div className="preview"><Link to="philadelphia.htm" title="Philadelphia gallery"></Link></div>
      <p className="caption">Join us as we visit the city of brotherly love.</p>
    </section>
    <section className="chicago">
      <h2><Link to="chicago.htm" title="Chicago gallery">Chicago</Link></h2>
      <p className="pubdate">
        <time datetime="2011-04-24" pubdate>April 2011</time>
      </p>
      <div className="preview"><Link to="chicago.htm" title="Chicago gallery"></Link></div>
      <p class="caption">Big wind, big shoulders. See a different side of Chicago.</p>
    </section>
    <section class="nyc">
      <h2><Link to="new_york.htm" title="New York gallery">New York</Link></h2>
      <p className="pubdate">
        <time datetime="2011-01-10" pubdate>Jan 2011</time>
      </p>
      <div className="preview"><Link to="new_york.htm" title="New York gallery"></Link></div>
      <p className="caption">A little Christmas magic, Big Apple style.</p>
    </section>
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
        <li><Link to="cincinnati.htm" title="school">Business Management</Link></li>
        <li><Link to="/featured/socialMediamrkting" title="social media marketing">Social Media Marketing</Link></li>
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
    <section className="contest">
      <h2>Software</h2>
     <Link to='/sofware'> <img  src={softwareImg} width="200" height="200" alt="software"/></Link>
      <p>Do you know where this is? Send your guess to us via the contact page. All correct entries will be added to a drawing at the end of the month.
         The randomly selected winner will win a framed print of their choice from our shop. Cool!
         The randomly selected winner will win a framed print of their choice from our shop. Cool!
  
         
      </p>
    </section>
    <section class="contest">
    <h2>Hardware</h2>
      <img src={hardwareImg} width="200" height="200" alt="hardware"/>
      <p>Cultural District, Denver CO</p>
    </section>
  </aside>
</section>
     
)};

export default HomePage;




