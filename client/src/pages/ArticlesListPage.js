import React from 'react';

import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const useStyles = {
    textAlign: 'center',
    fontSize:'30px',
    fontWeight:'bold',
    marginBottom: '20px'
};

const ArticlesListPage = () => (
    <>
    <h1 style={useStyles}>Articles</h1>
    <ArticlesList articles={articleContent}  />
    </>
);

export default ArticlesListPage;