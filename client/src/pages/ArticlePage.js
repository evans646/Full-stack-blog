import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Container from '@material-ui/core/Container';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";


import '../index.css'
import { useUser } from '../auth/useUser';

const override = css`
  display: block;
  margin: 0 auto;
`;

const ArticlePage = ({ match }) => {
  
    const name = match.params.name;

    let location = useLocation();
    let currentUrl = location.pathname;

    const user = useUser();
    const {id} = user ||''

    const article = articleContent.find(article => article.name === name);


    const [articleInfo, setArticleInfo] = useState({ upvotes:0, comments: [],upvotedIds:[]});
    const [loading,setLoading] = useState(false)
    let [color,setColor] = useState("#ffffff");
    
  
    useEffect(() => {
        try{
         const fetchData = async () => {
             const result = await fetch(`/api/articles/${name}`);
             const body = await result.json();
             setArticleInfo(body)
             setLoading(true)
             setColor('teal')
             setTimeout(() => {
            setLoading(false)
           },500)
         };
          fetchData();
        }catch(error){
          console.log(error)
          setLoading(true)
        }
     },[name]);

    const loadingMessage =  <RingLoader  color={color} loading={loading} css={override} size={100} />
    // <div style={{textAlign:'center'}}>Loading article...</div>;

    if (!article) return <NotFoundPage/>;

    const voted = Object.values(articleInfo.upvotedIds).filter(userId => userId ===id).length > 0 ? true : false;
 
    const otherArticles = articleContent.filter(article => article.name !== name);//instead of other articles, it will be related articles. 

    let content = (
        <>
            <h1 className='article-title'>{article.title}</h1>

            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}  hasUpvoted={voted}/>
           <Container maxWidth='lg'>
           {article.content.map((paragraph, key) => (
                <p className='article' key={key}>{paragraph}</p>
        
            ))}
           </Container>

            <CommentsList comments={articleInfo.comments} content={article.content}/>
            
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

            <h3 className='other-article-list'>Other Articles</h3>
            <ArticlesList articles={otherArticles} liked={'liked'} />
        </>
    );
    return loading ? loadingMessage : content;
};

export default ArticlePage;