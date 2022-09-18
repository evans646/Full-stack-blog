import React from 'react';
import axios from 'axios';
import {useUser} from "../auth/useUser";
import {FormModal} from "../interface/index"

export function UpvotesSection({ blogName, upvotes, setBlogInfo,hasUpvoted}) {
    const user = useUser();
    const {id} = user || '';
  
    
    const upvoteBlog = async () => {
    const response = await axios.post(`http://localhost:8080/api/blogs/${blogName}/${id}/upvote`);
    const body = response.data; 
    setBlogInfo(body);
};


    const downvoteBlog = async () =>{
    const response = await axios.post(`http://localhost:8080/api/blogs/${blogName}/${id}/downvote`);
    const body = response.data;
    setBlogInfo(body);
  };


  return (
  <div id='upvoteSection'>
   {upvotes > 1 ? <h3  className='upvotesCounter'>{upvotes} Upvotes </h3> : <h3 className='upvotesCounter' > {upvotes} Upvote</h3>}
   {!user ? (<FormModal/>) : 
   (<button  onClick={() => upvoteBlog()}>Upvote</button>) && !hasUpvoted ?
    ( <button  onClick={() =>  upvoteBlog()}>Upvote</button>):
   (<button  onClick={() => downvoteBlog()}>Downvote</button>)}
  </div>
  );
};



