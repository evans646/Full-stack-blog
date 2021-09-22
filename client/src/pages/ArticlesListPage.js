import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <>
    <h1 style={{textAlign: 'center',fontSize:'30px',fontWeight:'bold',marginBottom: '20px'}}>Articles</h1>
    <ArticlesList articles={articleContent}  />
    </>
);

export default ArticlesListPage;