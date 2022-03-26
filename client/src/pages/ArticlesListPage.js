import React, { useState, useEffect } from "react";

import { ArticlesList } from "../components/index";
import {articles} from "./article-content";

import { FaArrowDown } from "react-icons/fa";

const articlesPerPage = 4;
let arrayForHoldingArticles = [];

export function ArticlesListPage() {
  const [article, setArticlesToShow] = useState([]);
  const [next, setNext] = useState(articles.length/2);

  const loopWithSlice = (start, end) => {
    const slicedArticles = articles.slice(start, end);
    arrayForHoldingArticles = [...arrayForHoldingArticles, ...slicedArticles];
    setArticlesToShow(arrayForHoldingArticles);
  };

  useEffect(() => {
    loopWithSlice(0, articlesPerPage);
  }, []);


  const handleShowMoreArticles = () => {
    loopWithSlice(next, next + articlesPerPage);
    setNext(next + articlesPerPage);
  };
 
  
  return (
    <>
      <h1 className="articles-list-head">Articles</h1>
      <ArticlesList articles={article} />
      <div className="load-more">
      {
        next+articlesPerPage ? <button onClick={handleShowMoreArticles} className='load-more-artciles'>Load more  <FaArrowDown size={20} className="load-more-icon"/></button>: 
          <p style={{display:'inline'}}>You have reached the end</p>
       }
      </div>
    </>
  );
};
