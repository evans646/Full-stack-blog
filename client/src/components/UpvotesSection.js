import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';

import { useUser } from '../auth/useUser';

import '../App.css'


const UpvotesSection = ({ articleName, upvotes, setArticleInfo,hasUpvoted}) => {
  
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
   {!user ? (<button onClick={() => history.push('/login')}> Upvote</button>) : (<button onClick={() => upvoteArticle()}>Upvote</button>) && !hasUpvoted ? ( <button onClick={() =>  upvoteArticle()}>Upvote</button>):(<button className='downvote-btn' style={{backgroundColor:'black'}} onClick={() => downvoteArticle()}>Downvote</button>)}
   {upvotes > 1 ? <p>{upvotes} Upvotes </p> : <p> {upvotes} Upvote</p>}
  </Container>
  );
};

export default UpvotesSection;

// export default UpvotesSection;
