import React from "react";
import axios from "axios";
import {BiUpvote} from "react-icons/bi";
import {BiTime} from "react-icons/bi";
import {BiDownvote} from "react-icons/bi";
import {useUser} from "../authentication/useUser";
import {FormModal} from "../interface/FormModal";


const UpvotesSection = ({ blogName, upvotes, setBlogInfo,hasUpvoted,stats}) => {
    const user = useUser();
    const {id} = user || '';
   
    const upvoteBlog = async () => {
        const result = await fetch(`http://localhost:8080/api/blogs/${blogName}/${id}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setBlogInfo(body);
    };


    const downvoteBlog = async () =>{
        const response = await axios.post(`http://localhost:8080/api/blogs/${blogName}/${id}/downvote`);
        const body = response.data;
        setBlogInfo(body);
      };
        
    return (
        <div id="upvotes-section">
         {!user ? (<FormModal style={{}}/>) : (<BiUpvote  onClick={() =>  upvoteBlog()} id="upvote-button"/>) && !hasUpvoted ?
          ( <BiUpvote  onClick={() =>  upvoteBlog()} id="upvote-button"/>):
          (<BiDownvote  onClick={() =>  downvoteBlog()} id="upvote-button"/>)}
          <span> {upvotes} {upvotes > 1 ? 'upvotes':'upvote'}</span>
           <BiTime id="read-time"/><span>{stats.text==='0 min read' ? '1 min read':stats.text}</span>
          <span>{stats.words ===0 ? "239 words":stats.words + "word"}</span>
          <span>
            shared By Autor
          </span>
        </div>
    );
};

export default UpvotesSection;


