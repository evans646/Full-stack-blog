import React, { useState, useEffect } from "react";

import { BlogList } from './blogList';
import {blogs} from '../data/blogContents';


import { 
  Categories,
} from'../interface/index';



const blogsPerPage = 4;
let arrayForHoldingBlogs= [];

export function BlogsListPage() {
  const [blogsToShow, setBlogsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedBlogs = blogs.slice(start, end);
    arrayForHoldingBlogs = [...arrayForHoldingBlogs, ...slicedBlogs];
    setBlogsToShow(arrayForHoldingBlogs);
  };

  useEffect(() => {
    loopWithSlice(0, blogsPerPage);
  }, []);

  const handleShowMoreBlogs = () => {
    loopWithSlice(next, next + blogsPerPage);
    setNext(next + blogsPerPage);
  };
  
  return (
    <div style={{textAlign:'center'}}>
      <div className="gridContainer">
      <nav>
        {/* <Categories/> */}
      </nav>
      <article>
        <div>
      <BlogList blogs={blogsToShow} />
      <div className="load-more">
      {
        next ? <button onClick={handleShowMoreBlogs} className='loadMoreBlogs'>Load more</button>:<p style={{display:'inline'}}>You have reached the end</p>
       }
      </div> 
     </div>
      </article>
    </div>
    </div>
  );
};






