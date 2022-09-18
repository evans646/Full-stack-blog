import { useState, useEffect } from "react";
import {  useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/react";

import {blogs} from '../data/blogContents';
import {NotFound} from './index';
import {getBlogsLoading,getBlog} from './selectors';

import { useUser } from "../auth/useUser";

import {UpvotesSection} from "../components/upvoteSection";
import {CommentsList} from "../components/commentLists";
import { CommentForm } from "../components/commentForm";

import { SocialIcons } from "../components/socialIcons";


export function BlogPage ({isLoading, startLoadingBlog,}){       

    const user = useUser();
    const { id } = user || "";  
    const {name} = useParams();
    console.log(name);



    const [blogInfo, setBlogInfo] = useState({ upvotes: 0, comments: [],upvotedIds: [] });

    //for ring-loader 
    const [loading, setLoading] = useState(false);
    let   [color, setColor] = useState("#ffffff");

 
    useEffect(() =>{
      try{
        const fetchBlog = async () => {
            const result = await fetch(`http://localhost:8080/api/blogs/${name}`);
            const body = await result.json();
            setBlogInfo(body);
            setLoading(false);
            setColor("#207d9c");
            setTimeout(() => {
              setLoading(false);
            },1800);
        };
        fetchBlog();
    } catch (error) {
        console.log(error);
        setLoading(false);
      } 
    },[name]);

    const blog=blogs.find(blogContent => blogContent.name ===name);

    const loadingMessage = (
      <div style={{justifyContent:'center',marginLeft:'32%',padding:'14%'}}>
        <ClimbingBoxLoader color={color} loading={loading} size={10} />
        <h2>Loading blog...</h2>
      </div>
 );

   if(loading) return loadingMessage;

   if (!blog) return <NotFound/>
     //check to see if the user has added upvote on the article
   const data = blogInfo.upvotedIds

  const voted = Object.values(data).filter((userId) => userId === id).length > 0 ? true :false;
 

    return(
        <div className="gridContainer">
      <nav>
      <h3>
        0 Views 
      </h3>
      <UpvotesSection blogName={name} upvotes={blogInfo.upvotes}  hasUpvoted={voted} setBlogInfo={setBlogInfo}/>
      </nav>
      <article>
        <h2>{blogInfo.name}</h2>
        <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="article banner" />
         {blog.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <CommentForm blogName={name} setBlogInfo={setBlogInfo} />
        <CommentsList  comments={blogInfo.comments}/>
        {/* <BlogList blogs={blogs}/> */}
      </article>
      <aside>
        <ul>
          <li  key={1}>
            <h3> Published on:</h3>
            <strong>June 4th 2022</strong>
          </li>
          <li key={12} >
            <h3>In the category: <strong>Games & Consoles</strong></h3>
          </li>
          <li key={122}>
            <h3>Writted by:</h3>
            <strong>SK</strong>
          </li>
          <SocialIcons/>
        </ul>
      </aside>  
    </div>
    )
};
