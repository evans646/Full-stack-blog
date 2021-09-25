import React from 'react';
import { Link } from 'react-router-dom';
//import { useUser } from '../auth/useUser';

let h3Styles = {
    textAlign: 'center',
    fontSize:'25px',
    fontWeight:'bold'
};
const span = {
    borderBottom:'1px solid blue'
};

const ArticlesList = ({ articles}) => {

    return (
    <>
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/article/${article.name}`}  >
                <h3 style={h3Styles}>{article.title}</h3>
                <p>{article.content[0].substring(0, 200)}..<span style={span}>.Read more</span></p>
            </Link>
        ))}
    </>
    )
};

export default ArticlesList;