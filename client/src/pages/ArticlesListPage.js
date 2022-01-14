import { ArticlesList } from "../components/index";
import articleContent from "./article-content";

export function ArticlesListPage() {
  return (
    <>
      <h1 className="articles-list-head">Articles</h1>
      <ArticlesList articles={articleContent} />
    </>
  );
}
