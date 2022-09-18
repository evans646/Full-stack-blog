import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegShareSquare } from "react-icons/fa";


export function CategoriesList ({blogs}) {
    return (
    <div className="blogList">
    {blogs.map((blog, key) => (
            <Link className="blogListItem" key={key} to={`/blog/${blog.name}`}>
                <h3>{blog.title}</h3>
            </Link>
        ))}
    </div>
    );
};
