import React from "react";
import { Link } from "react-router-dom";
import softwareImg from "../images/software.jpeg";
import hardwareImg from "../images/hardware.jpeg";
//import { useMediaQuery } from 'react-responsive'
import {FirstNews,SecondNews,ThirdNews} from "./NewsLandingPage";

import { DiCode } from "react-icons/di";
import ScrollAnimation from "react-animate-on-scroll";

const HomePage = () => {


  return (
    <section id="content">
      <div className="banner">
        <h1>I love Software And I love Technology</h1>
        <p>
          We’re betting you do to. Welcome to our site, a growing small group of
          passionate programmers. feel free to browse through for any
          information you may need concerning TECH <strong>Welcome</strong>.
        </p>
      </div>
      <article id="latest">
        <span style={{ float: "right" }}>
          <DiCode size={75} color={"rgb(3, 176, 176)"} className="icon" />
        </span>
        <h1>Tech Crunch</h1>
        <div>
         <FirstNews/>
         <SecondNews/>
         <ThirdNews/>
        </div>
      </article>
      <aside>
        <nav id="archives">
          <h2>FEATURED</h2>
          <ul>
            <li>
              <Link to="/featured/webtechnologies" title="web technologies">
                Web Technologies
              </Link>
            </li>
            <li>
              <Link to="/featured/webdevelopement" title="web development">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/featured/graphicDesign" title="graphic design">
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/featured/dataStructures" title="data structures">
                Data Structures
              </Link>
            </li>
            <li>
              <Link to="/featured/databaseManSys" title="data bases">
                Database Management Systems
              </Link>
            </li>
            <li>
              <Link
                to="/featured/businessManagement"
                title="business management"
              >
                Business Management
              </Link>
            </li>
            <li>
              <Link
                to="/featured/socialMediamrkting"
                title="social media marketing"
              >
                Social Media Marketing
              </Link>
            </li>
          </ul>

          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </nav>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <section className="contest">
            <h2>Software</h2>
            <Link to="/software">
              <img src={softwareImg} width="200" height="200" alt="software" />
            </Link>
            <p>
              Do you know where this is? Send your guess to us via the contact
              page. All correct entries will be added to a drawing at the end of
              the month. The randomly selected winner will win a framed print of
              their choice from our shop. Cool! The randomly selected winner
              will win a framed print of their choice from our shop. Cool!
            </p>
          </section>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <section className="contest">
            <h2>Hardware</h2>
            <Link to="/hardware">
              <img src={hardwareImg} width="200" height="200" alt="hardware" />
            </Link>
            <p>
              Tempora obcaecati velit suscipit at sunt officiis nostrum
              excepturi facilis repudiandae cum nam, consequuntur in assumenda
              iure? Earum iure ut rem iusto explicabo inventore ipsam,
            </p>
          </section>
        </ScrollAnimation>
      </aside>
    </section>
  );
};


export default HomePage;


