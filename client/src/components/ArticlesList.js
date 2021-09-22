import React from 'react';
import { Link } from 'react-router-dom';
//import { useUser } from '../auth/useUser';

const ArticlesList = ({ articles,liked }) => {

    return (
        <>
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/article/${article.name}`} liked={'liked'} >
                <h3 style={{textAlign: 'center',fontSize:'25px',fontWeight:'bold'}}>{article.title}</h3>
                <p>{article.content[0].substring(0, 200)}..<span style={{borderBottom: '1px solid blue'}}>.Read more</span></p>
            </Link>
        ))}
    </>
    )
};

export default ArticlesList;







