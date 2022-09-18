import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { 
  Recentblogs,
  Recentcomments
} from'../interface/index';

import {SocialIcons} from '../components/socialIcons';

import  SearchPage from '../pages/searchPage';



export function HomePage(){

    return(
<div className='homePageWrapper'>
   <div className="blogContainer">
  <div className="blogContent">
  <h2>Trending</h2>
    <div className="leftContent">
      <div className="blogCard">
        <a href="article.html" className="figure">
          <img
            src="https://i.postimg.cc/KcwkZQsx/dummy.png"
            alt=""
            loading="lazy"
          />
          <span className="tag">15 JAN</span>
        </a>
        <section>
          <a href="#" className="title">Blog title goes here...this</a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...
          </p>
        </section>
      </div>
 
      <div className="blogCard">
        <a href="#" className="figure">
          <img
            src="https://i.postimg.cc/KcwkZQsx/dummy.png"
            alt=""
            loading="lazy"
          />
          <span className="tag">15 JAN</span>
        </a>
        <section>
          <a href="article.html" className="title">Blog title goes here...</a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...
          </p>
        </section>
      </div>
      <div className="blogCard">
        <a href="article.html" className="figure">
          <img
            src="https://i.postimg.cc/KcwkZQsx/dummy.png"
            alt=""
            loading="lazy"
          />
          <span className="tag">15 JAN</span>
        </a>
        <section>
          <a href="#" className="title">Blog title goes here...</a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...
          </p>
        </section>
      </div>

      <div className="blogCard">
        <a href="#" className="figure">
          <img
            src="https://i.postimg.cc/KcwkZQsx/dummy.png"
            alt=""
            loading="lazy"
          />
          <span className="tag">15 JAN</span>
        </a>
        <section>
          <a href="#" className="title">Blog title goes here...</a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...
          </p>
        </section>
      </div>
 
      <div className="blogCard">
        <a href="#" className="figure">
          <img
            src="https://i.postimg.cc/KcwkZQsx/dummy.png"
            alt=""
            loading="lazy"
          />
          <span className="tag">15 JAN</span>
        </a>
        <section>
          <a href="article.html" className="title">Blog title goes here...</a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...
          </p>
        </section>
      </div>
    </div>
   
    <Link to="/allblogs">
    <button className="btn1 load-btn">Load more </button>
    </Link>

  <h2>Tech cruch</h2>
    
  </div>
  <div className="blogContent rightContent">
    <div className="columns searchColumn">
    <SearchPage/>
    </div>
   <Recentblogs/>
   <Recentcomments/>
   <SocialIcons/>
  </div>
</div>
</div>
    )
};



