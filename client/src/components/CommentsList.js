import React, { useState,useEffect } from 'react';
import Avatar, { ConfigProvider }  from 'react-avatar';
import axios from 'axios';

import { useUser } from '../auth/useUser'; 
import {
   FacebookShareCount, 
   OKShareCount,
   PinterestShareCount,
   RedditShareCount,
   VKShareCount,  
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
                 <FacebookIcon size={45} />
              </FacebookShareButton>
             <TwitterShareButton 
                url={"http://www.techboost.com"}
                quote={''}
                hashtag="#techboost">
                 <TwitterIcon size={45} />
              </TwitterShareButton>
             <WhatsappShareButton 
                url={"http://www.techboost.com"}
                quote={''}
                hashtag="#techboost"
                >
                 <WhatsappIcon size={45} />
              </WhatsappShareButton>
             <VKShareButton  
                url={"http://www.techboost.com"}
                quote={'JJ'}
                hashtag="#techboost"
                >
                 <VKIcon size={45} />
              </VKShareButton>
             <PinterestShareButton
                url={"http://www.techboost.com"}
                quote={'JJ'}
                hashtag="#techboost"
                >
                 <PinterestIcon size={45} />
              </PinterestShareButton>
             <RedditShareButton
                url={"http://www.techboost.com"}
                quote={'JJ'}
                hashtag="#techboost"
                >
                 <RedditIcon size={45} />
              </RedditShareButton>
            </section>  
   
      {comments.length > 1 ? <h4 className='comments-list-h4' >{comments.length} COMMENTS</h4>:<h4 className='comments-list-h4' >{comments.length} COMMENT</h4>  }
            {comments.map((comment, key) => (
                <div className='comment' key={key} >
                    <h4 className='comment-username'><Avatar src={picture}  size="70" round={true} name={comment.username ||name} /><span > {comment.username || name|| given_name} </span> wrote</h4>
                    <p >{comment.text}</p>
               <span>
              <em><p className='comment-span' ><b>On</b> {comment.date}  <b>at</b> {comment.time} </p></em>
               </span>
                </div>
            ))}
         </div>
        </ConfigProvider>
     )
};
export default CommentsList;

