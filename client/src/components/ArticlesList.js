import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const ArticlesList = ({ articles}) => {

    return (
    <Container maxWidth='lg'>
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/article/${article.name}`}  >
                <h3 className='article-list-title'>{article.title}</h3>
                <p>{article.content[0].substring(0, 200)}...<span className='read-more'>Read more</span></p>
            </Link>
        ))}
    </Container>
    )
};

export default ArticlesList;