import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineLink} from "react-icons/hi";
import blogContent from "../data/article-content";

const CategoriesFilter = ({name}) => {

  const readNextBlogs =  blogContent.filter((blog) => {
     return blog.name !== name;
  });
 
 
  return(
    <>
    {readNextBlogs.map((blog, key) => (
    <div>
      <p>
        <Link to={`/blog/${blog.name}`}><h2> <HiOutlineLink style={{color:"#25d366"}}/> {blog.title}</h2></Link>
      </p>
    </div>
    ))}
    </>
  )
};

export default CategoriesFilter;
