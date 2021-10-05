import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../auth/useUser';





 const AddCommentForm = ({ articleName, setArticleInfo }) => {
    
     const [,setUsername] = useState('');
     const [commentText, setCommentText] = useState('');
     
     const user = useUser();
     const { username, given_name,name } = user || '';

     const addComment = async () => {
          const response = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username,name,given_name,text: commentText }),
            headers: { 
                'Content-Type': 'application/json',
            }
        });
        const body = await response.json();
        setArticleInfo(body);
        setUsername(username||given_name||name);
        setCommentText('');
    };


    if (user) {
        return (
            <div id='add-comment-form'>
                <h3>Comment as <span> { username||given_name||name}</span></h3>
                <label>
                    <textarea rows='4' cols='50' value={commentText} onChange={(event) => setCommentText(event.target.value)} />
                </label>
                <button id='submit' disabled={!commentText} onClick={() => addComment()}>Add Comment</button>
            </div>
        )
    } return (
        <div  id='other'>
            <Link to={'/login'}><p> Sign in or register to comment</p></Link>
        </div>
    );
};

export default AddCommentForm;