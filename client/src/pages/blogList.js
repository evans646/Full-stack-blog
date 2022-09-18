import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegShareSquare } from "react-icons/fa";


export function BlogList ({blogs}) {
    return (
    <div className="blogList">
     <h1>Blogs</h1>
    {blogs.map((blog, key) => (
            <Link className="blogListItem" key={key} to={`/blog/${blog.name}`}>
                <h3>{blog.title}</h3>
                <p>{blog.content[0].substring(0, 150)}...<span className='readMore'>read more <sup>{<FaRegShareSquare/>}</sup> </span></p>
            </Link>
        ))}
    </div>
    );
};
