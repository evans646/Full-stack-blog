import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineLink} from "react-icons/hi";
import blogContent from "../data/blog-content";

const ReadNextBlogsFilter = ({name}) => {

  const readNextBlogs =  blogContent.filter((blog) => {
     return blog.name !== name;
  });
 
 
  return(
    <>
    {readNextBlogs.map((blog, key) => (
    <div className="read-next">
      <p key={key}>
        <Link to={`/blog/${blog.name}`}><h2><HiOutlineLink style={{color:"rgba(105, 175, 14, 0.81)"}}/> {blog.title}</h2></Link>
      </p>
    </div>
    ))}
    </>
  )
};

export default ReadNextBlogsFilter;
