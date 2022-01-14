import { Link } from "react-router-dom";
import dateFormat from "dateformat";

import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaRegShareSquare } from "react-icons/fa";

import ScrollAnimation from "react-animate-on-scroll";

const key = "fb95e2c7f55b4402ad060bee57afce8c";

let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`;



export const FirstNews =() => {
  const [data, setData] = useState(" ");

  const newsData = async () => {
    let res = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const body = JSON.parse(JSON.stringify(res.data.articles[4]));
    setData(body);
  };
  useEffect(()=>{
        newsData()
  },)

  let description = data.description && data.description.substring(0, 150);

  return (
    <div>
      <section className="news">
        <h2>
          <a href={data.url} target="_blank" rel="noreferrer" title="Tech crunch">
            {data.title}
          </a>
        </h2>
        <p className="pubdate">
          <time pubdate="true" className="date-time">
            {dateFormat(data.publishedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
          </time>
        </p>
        <img
          src={data.urlToImage}
          width={800}
          style={{ padding: "0", height: "50vh" }}
          alt="tech-crunch"
          className="tech-crunch-img"/>
        <p>
          {
            <p>
              {description}... read more{" "}
              <sup>
                <Link to="/">
                  <FaRegShareSquare />
                </Link>
              </sup>
            </p>
          }
        </p>
      </section>
    </div>
  );
};

export const SecondNews = () => {
  const [data, setData] = useState("");
  const newsData = async () => {
    let res = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const body = JSON.parse(JSON.stringify(res.data.articles[2]));
    setData(body);
  };
  useEffect(()=>{
        newsData()
  },)

  let description = data.description && data.description.substring(0, 150);

  
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <section className="news">
        <h2>
          <a href={data.url} target="_blank" rel="noreferrer" title="Tech news">
            {data.title}
          </a>
        </h2>
        <p className="pubdate">
          <time pubdate="true" className="date-time">
            {dateFormat(data.publishedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
          </time>
        </p>
        <img
          src={data.urlToImage}
          width={800}
          style={{ padding: "0", height: "50vh" }}
          alt="tech-crunch"
          className="tech-crunch-img"
        />
        <p className="caption">
          {
            <p>
              {description}... read more{" "}
              <sup>
                <Link to="/">
                  <FaRegShareSquare />
                </Link>
              </sup>
            </p>
          }
        </p>
      </section>
    </ScrollAnimation>
  );
};

export const ThirdNews = () => {
  const [data, setData] = useState("");
  const newsData = async () => {
    let res = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const body = JSON.parse(JSON.stringify(res.data.articles[5]));
    setData(body);
  };
  useEffect(()=>{
        newsData()
  },)

  let description = data.description && data.description.substring(0, 150);

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <section className="news">
        <h2>
          <a href={data.url} target="_blank" rel="noreferrer" title="Tech news">
            {data.title}
          </a>
        </h2>
        <p className="pubdate">
          <time pubdate="true" className="date-time">
            {dateFormat(data.publishedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
          </time>
        </p>
        <img
          src={data.urlToImage}
          width={800}
          style={{ padding: "0", height: "50vh" }}
          alt="tech-crunch"
          className="tech-crunch-img"
        />
        <p className="caption">
          {
            <p>
              {description}... read more
              <sup>
                <Link to="/">
                  <FaRegShareSquare />
                </Link>
              </sup>
            </p>
          }
        </p>
      </section>
    </ScrollAnimation>
  );
};
