import React from "react";
import { Link } from "react-router-dom";
import softwareImg from "../images/software.jpeg";
import hardwareImg from "../images/hardware.jpeg";

import Techpic from "../images/dev.jpeg";
import FeaturedImg from "../images/featured.png";

import { FirstNews, SecondNews, ThirdNews } from "./NewsLandingPage";

import { DiCode } from "react-icons/di";
import ScrollAnimation from "react-animate-on-scroll";

export function HomePage (){


  return (
    <section id="content">
      <div className="banner">
        <h1>Modern Technology</h1>
        <p>
          A growing small group of passionate programmers. feel free to browse
          through for any information you may need concerning TECH.
        </p>
      </div>
      <article id="latest">
        <span style={{ float: "right" }}>
          <DiCode size={75} color={"rgb(3, 176, 176)"} className="icon" />
        </span>
        <h1>Tech Crunch</h1>
        <div>
          <FirstNews />
          <SecondNews />
          <ThirdNews />
        </div>
        <ScrollAnimation animateIn='bonce' animateOut='bounce' duration={10} initiallyVisible={false}>
          <h1>The future of technology</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum
          est rem ullam, odio dolores aspernatur architecto reprehenderit
          facilis velit natus, facere aliquam. Suscipit ea fuga dolore modi
          illum, dicta aperiam veritatis cumque praesentium aliquam corrupti id
          totam qui sunt aut libero soluta minima, reprehenderit non expedita
          harum eveniet! Facere!
          <img src={Techpic} width='840' height='400' alt=''/>
        </ScrollAnimation>
      </article>
      <aside>
        <nav id="archives">
          {/* <h2>FEATURED</h2> */}
          <img src={FeaturedImg} width='100' height='90' alt='' style={{marginLeft:'7vh'}}/>
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
              <Link to="/featured/businessManagement" title="business management" >
                Business Management
              </Link>
            </li>
            <li>
              <Link
                to="/featured/socialMediamrkting"
                title="social media marketing">
                Social Media Marketing
              </Link>
            </li>
          </ul>
          <select name="cars" id="cars">
            <option value="volvo" id="cars">
              Volvo
            </option>
            <option value="saab" id="cars">
              Saab
            </option>
            <option value="mercedes" id="cars">
              Mercedes
            </option>
            <option value="audi" id="cars">
              Audi
            </option>
          </select>
        </nav>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <section className="contest">
            <h2>Software</h2>
            <Link to="/software">
              <img src={softwareImg} width="200" height="200" alt="software" />
            </Link>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              suscipit, a consequatur nostrum magnam non accusamus incidunt
              explicabo voluptas impedit eveniet, perferendis asperiores ?
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
              iure? Earum iure ut rem iusto explicabo inventore ipsam
            </p>
          </section>
        </ScrollAnimation>
        <h2>Social media display</h2>
      </aside>
    </section>
  );
};



