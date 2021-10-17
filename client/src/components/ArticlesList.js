import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
//import Typography from '@material-ui/core/Typography';
import { FaRegShareSquare } from "react-icons/fa";

const ArticlesList = ({ articles}) => {

    return (
    <Container maxWidth='lg'>
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/article/${article.name}`}  >
                <h3 className='article-list-title'>{article.title}</h3>
                {/* <Typography variant='h3' className='article-list-title'>{article.title}</Typography> */}
                <p>{article.content[0].substring(0, 200)}...<span className='read-more'>read more <sup>{<FaRegShareSquare/>}</sup> </span> </p>
            </Link>
        ))}
    </Container>
    )
};

export default ArticlesList;