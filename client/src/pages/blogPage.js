import React, { useState, useEffect } from "react";
import {  useParams,Link } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";
import ReadNextBlogsFilter from "../components/ReadNext";

import readingTime from "reading-time";

import {NotFoundPage} from "./index"; 
import blogs from "../data/blog-content";
import {useUser} from "../authentication/useUser";

import {SocialShareIcons} from "../components/ShareBlogIcons";

export function BlogPage () {
    const {name} = useParams();
    const user = useUser();
    const {id} = user || "";


    const blog = blogs.find(blog => blog.name === name);

    const [blogInfo, setBlogInfo] = useState({ upvotes: 0, comments: [],upvotedIds:[]});
       //for ring-loader 
    const [loading, setLoading] = useState(false);
    let   [color, setColor] = useState("#ffffff");

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8080/api/blogs/${name}`);
            const body = await result.json();
            setLoading(true);
            setColor("#207d9c");
            setTimeout(() => {
              setLoading(false);
            },800); 
            setBlogInfo(body);
        }
        fetchData();
    }, [name]);

 const loadingMessage = (
        <div className="loading-messageWrapper">
          <ClimbingBoxLoader color={color} loading={loading} size={10} /> 
          <h2>Loading blog...</h2>
        </div>
   );
  
    if(loading) return loadingMessage;
  
    if (!blog) return <NotFoundPage />
    
  
    
    const stats = readingTime(blog.content.map(content=>content.toString()));
    console.log(blog.content.map(content=>content.toString()),stats)

    const upvoteData = blogInfo.upvotedIds||""
    const checkUserUpvote= Object.values(upvoteData).filter((userId) => userId === id).length > 0 ? true : false;
   


    return (
     <div id="page-body">
          <h1 className="page-title">{blog.title}</h1>
          <Link to="#" className="figure">
            <img  src={blog.imageUrl} 
            alt="" loading="lazy"  style={{width:'100%',height:"20%",borderRadius:"5px"}}/>
          </Link>
          <UpvotesSection blogName={name} upvotes={blogInfo.upvotes} setBlogInfo={setBlogInfo} hasUpvoted={checkUserUpvote} stats={stats}/>
        {blog.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <SocialShareIcons/>
        <CommentsList comments={blogInfo.comments} />
        <AddCommentForm blogName={name} setBlogInfo={setBlogInfo} />
        <h2 style={{padding:"10px"}}>Read next Posts</h2>
        <ReadNextBlogsFilter name={name}/>
      </div>
    );
};

