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
         <div className='comment-list-section' style={{ paddingBottom:'10px'}}>
       {comments.length > 1 ? <Typography variant='h5' fontWeight='600'  style={{padding:'2%',fontWeight:'bold'}}>{comments.length } COMMENTS</Typography>:<Typography variant='h5' fontWeight='600'  style={{padding:'2%',fontWeight:'bold'}}>{comments.length } COMMENT</Typography> }
            {comments.map((comment, key) => (
                <div className='comment' key={key} >
                    <Typography variant='h6' className='comment-username' fontWeight='500'><Avatar src={picture}  size="70" round={true} name={comment.username ||name} /><span style={{fontWeight:'bold' }}> {comment.username || name|| given_name} </span> <span style={{marginLeft:'10%' }}>wrote</span></Typography>
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
