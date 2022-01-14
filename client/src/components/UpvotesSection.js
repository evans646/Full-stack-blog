import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';

import styled from 'styled-components';


import { useUser } from '../auth/useUser';


const UpvoteButton = styled.button`
box-sizing: border-box;
font-size: 20px;
margin-left: 30px;
padding: 10px;
background-color: rgba(0, 0, 0);
color: white;
border-radius: 8px;
cursor: pointer;
margin-bottom: 40px;
outline: none;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;
`;

const DownvoteButton = styled.button`
box-sizing: border-box;
font-size: 20px;
margin-left: 30px;
padding: 10px;
background-color: rgba(0, 0, 0,0.656);
color: white;
border-radius: 8px;
cursor: pointer;
margin-bottom: 40px;
outline: none;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;
`
const UpvoteSectionWrapper = styled.div`
display: inline-block;
font-family: 'Cantarell';
margin-left: 30px;
font-size: 20px;
line-height: 30px;
`




export function UpvotesSection({ articleName, upvotes, setArticleInfo,hasUpvoted}) {
  
    const history = useHistory();
    const user = useUser();

    const {id} = user || '';
  

    const upvoteArticle = async () =>{
    const response = await axios.post(`/api/articles/${articleName}/${id}/upvote`);
    const body = response.data; 
    setArticleInfo(body);
};

    const downvoteArticle = async () =>{
    const response = await axios.post(`/api/articles/${articleName}/${id}/downvote`);
    const body = response.data;
    setArticleInfo(body);
  }; 


  return (
  <Container id='upvotes-section'>
   {!user ? (<UpvoteButton onClick={() => history.push('/login')}> Upvote</UpvoteButton>) : (<UpvoteButton  onClick={() => upvoteArticle()}>Upvote</UpvoteButton>) && !hasUpvoted ? ( <UpvoteButton  onClick={() =>  upvoteArticle()}>Upvote</UpvoteButton>):(<DownvoteButton   onClick={() => downvoteArticle()}>Downvote</DownvoteButton>)}
   {upvotes > 1 ? <p  className='upvotes-counter'>{upvotes} Upvotes </p> : <p className='upvotes-counter' > {upvotes} Upvote</p>}
  </Container>
  );
};




