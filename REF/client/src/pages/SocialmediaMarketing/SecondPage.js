import React from "react";
import { useNavigate, Link  } from 'react-router-dom';
// import { Link } from "react-router-dom";


import Container from "@material-ui/core/Container";

import { FaRegShareSquare } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CalenderPic from "../../images/calender.webp";
import QuestionPic from "../../images/mark2.png";

export function SecondSocialMediaPage() {
  const history = useNavigate();

  return (
    <Container maxWidth="lg" className="archItem">
      <div className="content-container">
        <p>
          <Link to="/https://tagboard.com/">
            Tagboard<sup>{<FaRegShareSquare />}</sup>
          </Link>
          ,
          <Link to="/https://hashtagify.me/">
            hashtagify.me<sup>{<FaRegShareSquare />}</sup>
          </Link>
          are tools that can help you set alerts to notify you when your brand
          is mentioned. By interacting with your customers on social media
          channels, they are likely to return to your platform for the
          information they value.
        </p>
        <Container>
          <ol>
            <li value="5">
              <h4>
                <b>Measure success:</b>
              </h4>
            </li>
          </ol>
          <p>
            Every social media platform provides metrics to help you measure the
            effectiveness of your social media marketing presence. Smart social
            medial users monitor metrics often.
          </p>
          <h5>Monitor metrics and track overtime:</h5>
          <Container maxWidth="md">
            <ul>
              <li>
                Reach -: Potential number of people who see your content.
              </li>
              <li>
                Engagement -: Number of interactions with your content (likes,
                shares, comments, replies ).
              </li>
              <li>
                Engagement rate -: rate for the number of engagement each time a
                post is viewed.
              </li>
              <li>
                {" "}
                Conversion rate -: the number of users who complete your
                intended goal.
              </li>
            </ul>
          </Container>
          <ol>
            <li value="5">
              <h4>
                <b>Revisit the steps:</b>
              </h4>
            </li>
          </ol>
          <p>
            As your business changes you will want to revisit the steps to
            update your marketing plan often.
          </p>

          <p>
            Creating an editorial calender is a way to keep track of what you
            are doing to promote your business through your social media
            platforms. A <b>calendar</b> is a tool for planning your social
            media content so you share content regularly
          </p>
        </Container>
        <p>Here is an example of a calender.</p>

        <div>
          <img
            src={CalenderPic}
            width={600}
            style={{ marginLeft: "25%", padding: "0.5%" }}
            alt="calender"
          />
        </div>
        <p>
          To create a free social media calender click{" "}
          <Link to="/https://wepik.com/search?q=social+media+calender">
            here <sup>{<FaRegShareSquare />}</sup>
          </Link>
        </p>
        <p>
          It is also a good idea to plan for commonly asked questions and
          comments you may receive from customers through your social media
          platforms.
        </p>
        <img
          src={QuestionPic}
          width={400}
          style={{ marginLeft: "25%", padding: "0.5%" }}
          alt="sample questions"
        />
        <Container maxWidth="md">
          <ul>
            <li>Monitor all activities on all social media platforms </li>
            <li>Prepare responses to commonly asked question scenario </li>
            <li> Respond in timely manner </li>
            <li>Use constant brand voice</li>
          </ul>
        </Container>
        <p>
          Having a response plan will help you maintain a consistent brand voice
        </p>

        <Container maxWidth="md">
          <h3>
            There are two types of promotion post on most social media platforms
          </h3>
          <ol>
            <li>
              <b> Organic</b>:
            </li>
            <p>
              Organic promotions is using free tools provided by the platform by
              default to build community and interact with it, share posts and
              respond to customers comments.
              <br />
              Organic posts do not guarantee you will reach your full target
              audience. Many of the advertising services that help you target
              your audiences are not free.
            </p>

            <li>
              <b>Paid</b>:
            </li>
            <p>
              Is paying to display advertisement or sponsored messages based on
              the user profile. Paid promotions guarantees that your content
              will be seen by the customers that matter to you
            </p>
          </ol>
        </Container>
        <h2 style={{ textAlign: "center" }}>
          Technology skill
          <sup
            style={{ fontSize: "15px", color: "black", textDecoration: "none" }}
          >
            1.1
          </sup>
        </h2>

        <p>
          The first step to start Facebook social media business is to start by
          creating a{" "}
          <Link to="/facebook.com/pages ">
            page <sup>{<FaRegShareSquare />}</sup>
          </Link>{" "}
          select the business type you want.
          <br />
          As you create the Facebook page you need to make sure of the following
          :
        </p>
        <Container maxWidth="md">
          <ul>
            <li> Page name and logo are constant with your branding </li>
            <li>
              The username is unique to make it easier for customers to find{" "}
            </li>
            <li>
              All appropriate fields are completed before publishing the page{" "}
            </li>
            <li>
              All relevant links are listed including other social media profile
              links{" "}
            </li>
          </ul>
        </Container>
        <h3 style={{ textDecoration: "underline" }}>
          SUMMARY{" "}
          <sup
            style={{ fontSize: "15px", color: "black", textDecoration: "none" }}
          >
            1.2
          </sup>
        </h3>
        <Container maxWidth="md">
          <ul>
            <li>
              {" "}
              Social media is inexpensive way to market your products or
              services and engage with customers.
            </li>
            <li>
              A social media marketing plan will help you define your goals,
              audience , business personality and measure success.
            </li>
            <li>
              A social medial editorial calender can help you organize your key
              messages and make sure you are sharing contents regularly.
            </li>
            <li>
              {" "}
              Paid ads will guarantee that your ad will be seen by the people
              that matter to you.
            </li>
          </ul>
        </Container>
        <div style={{ marginTop: "2vh" }}>
          <Stack spacing={2}>
            <Pagination
              count={2}
              variant="outlined"
              shape="rounded"
              defaultPage={2}
              onChange={() => history.push("/featured/socialMediamrkting")}
            />
          </Stack>
        </div>
      </div>
    </Container>
  );
}
