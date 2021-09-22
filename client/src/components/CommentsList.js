import React from 'react';
import Avatar from 'react-avatar';
import { useUser } from '../auth/useUser';



const useStyles = { 
    fontSize: '18px', 
    fontWeight: 'semiBold'
    };
    
const CommentsList = ({ comments }) => {


    const user = useUser();
    const { given_name, picture} = user ||'';
    
    return  (
        <div className='comment-list-section'>
           {comments ?  <h4> Comments : </h4> :''}
            {comments.map((comment, key) => (
                <div className='comment' key={key} >
                    <h4 style={useStyles} ><Avatar src={picture} id='profile'   alt='profile'/><span> {comment.username || given_name} </span> wrote</h4>
                    <p >{comment.text}</p>
                </div>
            ))}
        </div>
     )

};
export default CommentsList;

