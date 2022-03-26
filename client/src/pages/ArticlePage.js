import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import dateFormat from "dateformat";
import axios from 'axios';

import Container from "@material-ui/core/Container";

import { FaRegEye, FaRegClock } from "react-icons/fa";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

import { useUser } from "../auth/useUser";

import {
  ArticlesList,
  ShareIcons,
  AddCommentForm,
  UpvotesSection,
  CommentsList,
} from "../components/index";

import { NotFoundPage } from "./index";

import {articles} from "./article-content";

const override = css`
  display: block;
  margin: 17% auto;
`;

let views = [2]
  
export const ArticlePage = () => {

    const user = useUser();
    const { id } = user || "";  

    const {name} = useParams();


    const article = articles.find(Articlecontent => Articlecontent.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [],upvotedIds: [] });
   
    //for ring-loader 
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");

    useEffect(() => {
      try{
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body)
            setArticleInfo(body);
            setLoading(true);
            setColor("teal");
            setTimeout(() => {
              setLoading(false);
            }, 800);
        };
        fetchData();
    } catch (error) {
        console.log(error);
        setLoading(true);
      }
    }, [name]);
 


      
    const loadingMessage = (
       <RingLoader color={color} loading={loading} css={override} size={100} />
 );

    if(loading) return loadingMessage;

    if (!article) return <NotFoundPage />

   //check to see if the user has added upvote on the article
   let data = articleInfo.upvotedIds

    const voted = Object.values(data).filter((userId) => userId === id)
   .length > 0
   ? true
   : false;
  

   const relatedArticles = articles.filter((article) => article.name === name);
 
    return (
     <>
        <h1 className="article-title">{article.title}</h1>
        <span style={{ marginLeft: "27vh", padding: "0" }}>
     <p style={{ fontWeight: "bold" }}>
        <FaRegEye
        style={{fontSize: "1.7em", marginBottom: "-10px", color: "#d1fd1d", cursor: "pointer"}}/>
        {views} Views
      </p>
    <p style={{ fontWeight: "bold" }}>
    <span style={{color: "#6c757d",marginLeft: "2vh",fontFamily: "Cardo", fontSize: "1rem", }}>
      <FaRegClock style={{fontSize: "1.8em",marginBottom: "-4px", color: "#d1fd1d", cursor: "pointer" }}/>
    </span>
     2 mins Commitment
     </p>
    <p style={{color: "#6c757d", marginLeft: "30vh", fontFamily: "Cardo",fontSize: "1rem"}}>
    {dateFormat(article.pupdate, "dddd, mmmm dS, yyyy, h:MM:ss TT")} 
      </p>
     </span>
        <ShareIcons content={JSON.stringify(article)} />
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes}  hasUpvoted={voted} setArticleInfo={setArticleInfo} />
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
     <Container maxWidth="lg">
        {article.content.map((paragraph, key) => (
          <p className="article" key={key}>
            {paragraph}
          </p>
        ))}
      </Container>
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <CommentsList comments={articleInfo.comments}/>
        <h3 className="read-next-articles-list"> Read Next</h3>
        <ArticlesList articles={relatedArticles} />
        </>
    );
}

