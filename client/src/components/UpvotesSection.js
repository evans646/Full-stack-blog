import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { useUser } from '../auth/useUser';
import audio from '../audios/upvotesound2.mp3'


const UpvotesSection = ({ articleName, upvotes, setArticleInfo,hasUpvoted}) => {
  
  const playAudio = () => {
    new Audio(audio).play();
  }

    const history = useHistory();
    const user = useUser();

    const {id} = user || '';

    const upvoteArticle = async () => {
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
   {!user ? (<button onClick={() => history.push('/login')}> Upvote</button>) : (<button onClick={() => upvoteArticle() && playAudio()}>Upvote</button>) && !hasUpvoted ? ( <button onClick={() =>  upvoteArticle()&&playAudio()}>Upvote</button>):(<button onClick={() => downvoteArticle()}>Downvote</button>)}
  
   {upvotes > 1 ? <p>{upvotes} Upvotes </p> : <p> {upvotes}</p>}
  </Container>
  );
};



export default UpvotesSection;


