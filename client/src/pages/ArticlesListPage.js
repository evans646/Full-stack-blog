import { ArticlesList } from "../components/index";
import {articles} from "./article-content";

import { FaArrowDown } from "react-icons/fa";

export function ArticlesListPage() {
  return (
    <>
      <h1 className="articles-list-head">Articles</h1>
      <ArticlesList articles={articles} />
      <div className="load-more">
        <p>Load more</p>
        <FaArrowDown className="load-more-icon" />
      </div>
    </>
  );
};
