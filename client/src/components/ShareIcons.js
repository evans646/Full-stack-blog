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
  TwitterIcon,
} from "react-share";
import { useState } from "react";
import { FaRegShareSquare } from "react-icons/fa";




export const ShareIcons = ({ content }) => {
  
let icons = 
   <section className="share-icons">
   <FacebookShareButton
     url={"http://www.techboost.com"}
     quote={content}
     hashtag="#techboost"
   >
     <FacebookIcon size={45} />
   </FacebookShareButton>
   <TwitterShareButton
     url={"http://www.techboost.com"}
     quote={content}
     hashtag="#techboost"
   >
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


  const [Icons, setOpenIcons] = useState(false);

  return (
    <section className="share-icons-wrapper">
      <span>
        <FaRegShareSquare
          className="share-icon"
          onClick={() => setOpenIcons(true)}
        />
      </span>
      {icons}
    </section>
  );
};
