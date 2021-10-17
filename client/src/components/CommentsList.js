import React, { useState,useEffect } from 'react';
import Avatar, { ConfigProvider }  from 'react-avatar';
import axios from 'axios';
import Typography from '@mui/material/Typography';

import { useUser } from '../auth/useUser'; 
import { 
   PinterestShareButton,
   PinterestIcon,
    RedditShareButton,
    RedditIcon,
   VKShareButton,
    VKIcon,
    FacebookIcon,
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon
  } from 'react-share';

let colors = [
    'red', 
    'blue',
    'teal',
];


const CommentsList = ({ comments ,content}) => {

   const [googleOauthUrl, setGoogleOauthUrl] = useState('');  
 
    const user = useUser();
    const { given_name,name, picture} = user || '';
    
    useEffect(() => {
      const loadOauthUrl = async () => {
          try {
              const response = await axios.get('/auth/google/url');
              const { url } = response.data;
              setGoogleOauthUrl(url);
          } catch (e) {
              console.log(e);
          }
      }
      loadOauthUrl();
  }, []);



    return  (
        <ConfigProvider colors={colors}>
         <div className='comment-list-section'>
      
   <section>
        <FacebookShareButton url={"http://www.techboost.com"} quote={content} hashtag="#techboost">
                 <FacebookIcon size={45}  style={{marginTop:'25px'}}/>
              </FacebookShareButton>
             <TwitterShareButton 
                url={"http://www.techboost.com"}
                quote={content}
                hashtag="#techboost">
                 <TwitterIcon size={45} />
              </TwitterShareButton>
             <WhatsappShareButton 
                url={"http://www.techboost.com"}
                quote={content}
                hashtag="#techboost"
                >
                 <WhatsappIcon size={45} />
              </WhatsappShareButton>
             <VKShareButton  
                url={"http://www.techboost.com"}
                quote={content}
                hashtag="#techboost"
                >
                 <VKIcon size={45} />
              </VKShareButton>
             <PinterestShareButton
                url={"http://www.techboost.com"}
                quote={content}
                hashtag="#techboost"
                >
                 <PinterestIcon size={45} />
              </PinterestShareButton>
             <RedditShareButton
                url={"http://www.techboost.com"}
                quote={content}
                hashtag="#techboost"
                >
                 <RedditIcon size={45} />
              </RedditShareButton>
            </section>  
   
      {comments.length > 1 ? <Typography variant='h6' className='comments-list-h4' >{comments.length} COMMENTS</Typography>:<Typography variant='h6' className='comments-list-h4' >{comments.length} COMMENT</Typography >  }
            {comments.map((comment, key) => (
                <div className='comment' key={key} >
                    <Typography variant='h6' className='comment-username'><Avatar src={picture}  size="70" round={true} name={comment.username ||name} /><span > {comment.username || name|| given_name} </span> wrote</Typography>
                    <p >{comment.text}</p>
               <span>
              <p className=' date-time' ><b>On</b> {comment.date}  <b>at</b> {comment.time} </p>
               </span>
                </div>
            ))}
         </div>
        </ConfigProvider>
     )
};
export default CommentsList;

