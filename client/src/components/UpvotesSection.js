import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../auth/useUser';
//import { useToken } from '../auth/useToken';


const UpvotesSection = ({ articleName, upvotes, setArticleInfo,hasUpvoted,upvotedId}) => {
  
  const history = useHistory();
  const user = useUser();

  
  const {id,Upvoted} = user || '';
  console.log(upvotedId);


const upvoteArticle = async () => {
    const response = await axios.post(`/api/articles/${articleName}/${id}/upvote`)
    const body = response.data; 
    setArticleInfo(body);
};

  
const downvoteArticle = async () =>{
    const response = await axios.post(`/api/articles/${articleName}/${id}/downvote`)
    const body = response.data;
    setArticleInfo(body);
  };

  return (
  <div id='upvotes-section'>
   {!user ? (<button onClick={() => history.push('/login')}>Add Upvote</button>):(<button onClick={() =>{upvotedId === id && upvotes > 0? downvoteArticle():upvoteArticle()}}>Upvote</button>)}
     {/* upvotedId ===id ? (<button onClick={() => downvoteArticle()} style={{backgroundColor:'red'}}>Downvote</button>) :( <button onClick={() =>  upvoteArticle()} style={{color:'teal'}}>Upvote</button>)} */}
    {upvotes > 1 ? <p>{upvotes} Upvotes</p> : <p>{upvotes} Upvote</p>}
  </div>
  );
};

export default UpvotesSection;

// {!user ? (<button onClick={() => history.push('/login')}>Add Upvote</button>) : (<button onClick={() => upvoteArticle()}>Upvote</button>) && 
// upvotedId ===id ? (<button onClick={() => downvoteArticle()} style={{backgroundColor:'red'}}>Downvote</button>) :( <button onClick={() =>  upvoteArticle()} style={{color:'teal'}}>Upvote</button>)}
  



 //const [token,setToken] = useToken();
//  if(token){
//   useEffect(async () =>{
//     const loadUserData = async () => {
//       try {
//           const response = await axios.get(`/api/${id}/getUser`);
//           const { token: newToken } = await response.data;
//             setToken(newToken);
//       } catch (e) {
//           console.log(e);
//       }
//   }
//     loadUserData()
//   },[])
//  }
