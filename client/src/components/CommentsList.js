import React from 'react';
import Avatar, { ConfigProvider }  from 'react-avatar';
import Typography from '@mui/material/Typography';

import { useUser } from '../auth/useUser'; 

import '../index.css'

let colors = [
    'red',
    'teal',
];


export function CommentsList ({ comments}){
    
    const user = useUser();
    const { given_name,name, picture} = user || '';
 
    return(
     <ConfigProvider colors={colors}>
         <div className='comment-list-section'>
       {comments.length > 1 ? <Typography variant='h6' fontWeight='600' ><span className='comments-list-head'>{comments.length } COMMENTS</span></Typography>:'' }
            {comments.map((comment, key) => (
                <div className='comment' key={key} >
                    <Typography variant='h6' className='comment-username' fontWeight='500'><Avatar src={picture}  size="70" round={true} name={comment.username ||name} /><span> {comment.username || name|| given_name} </span> wrote</Typography>
                    <p >{comment.text}</p>
               <span>
              <p className='comment-date-time' ><b>On</b> {comment.date}  <b>at</b> {comment.time} </p>
               </span>
                </div>
            ))}
         </div>
     </ConfigProvider>
     )
};
