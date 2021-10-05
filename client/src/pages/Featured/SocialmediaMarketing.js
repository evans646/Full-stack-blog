import React from 'react';
import Container from '@material-ui/core/Container';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import mediapic from '../../images/media1.png'
import followpic from '../../images/follow.webp'
import connectpic from '../../images/connect.jpg'
import processesPic from '../../images/processes.jpg'
import socialPic from '../../images/social.png'
import facebookPic from '../../images/facebook.png'

const h4={
  textDecoration:'1px underline',
  fontSize:'20px',
}
const center={
   textAlign:'center',
   padding:'20px'
}

export const SocialMediaMarketing = () => {
 

    return (
        <Container maxWidth='lg' className="archItem" >
          
    <div className='content-container'>
              <Accordion style={{backgroundColor:'#D8E2F366',width:'40vh',overflow:'hidden'}}>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
            <Typography  variant="h5" style={h4}>Table of Contents</Typography>
            </AccordionSummary>
          <AccordionDetails>
          <div style={{marginLeft:'20px',listStyle:'none',fontSize:'15px',padding:'5px',lineHeight:'2.0em'}}>
          <ol>
          <li>1.0 BUSINESS CONCEPT OF SOCIAL MEDIA MARKETING </li>
          <li>1.1 TECHNOLOGY SKILL</li>
          <li>1.2 SUMMARY</li>
           </ol>
        </div>
           </AccordionDetails>
           </Accordion>
       <div>
    </div>
    <Typography  variant="h3" style={h4} style={center}> Social Media Marketing for business</Typography>
    <p>
    Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. Your customers are already interacting with brands through social media, and if you're not speaking directly to your audience through social platforms like Facebook, Twitter, Instagram, and Pinterest, you're missing out! Great marketing on social media can bring remarkable success to your business, creating devoted brand advocates and even driving leads and sales.
    </p>
    <img src={mediapic} width={700} style={{marginLeft:'10%',padding:'5%'}}/>
    <p><b style={{fontSize:'25px'}}>What is Social Media  ?</b> </p>
    <ul  style={{paddingLeft:'22px',padding:'14px'}}>
       <li> Blends technology and social interactions</li>
       <li>Creates an online Environment where members of a virtual community can interact.</li>
       <li>Enable people to share subjects of mutual interests through pictures and posts and videos </li>
    </ul>

    <p><b style={{fontSize:'25px'}}>Social Media Marketing </b> </p>
 <p>
 Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on your social media profiles, listening to and engaging your followers, analyzing your results, and running social media advertisements.
 </p>
 <p>
 The major social media platforms (at the moment) are Facebook, Instagram, Twitter, LinkedIn, Pinterest, YouTube, and Snapchat
 </p>

    <h1 style={center}>Purpose of Social media marketing</h1>
    <p>Social media can be used to market a companies product or services and engage with customers online </p>
   <Container maxWidth='lg'>
      <h2><b>Create Brand Awareness</b> </h2>
      <p> ➤ Having your companies presence on platform like Facebook , google and instagram helps to increase awareness of your brand/ products or service. </p>
      <img src={followpic} width={300} style={{marginLeft:'30%',padding:'3%'}}/>
      <h2><b>Build Relationships</b> </h2>
      <p> ➤ Social media can also help you build connections with your audience. By sharing your expertise online you can connect with customers, partners, employees and suppliers</p>
      <img src={connectpic} width={400} style={{marginLeft:'14%',padding:'3%'}}/>
      <h2><b>Improve Business Processes</b> </h2>
      <b>Social media can enable you to :</b>
      <div style={{padding:'20px'}}>
         <p> ➤ Research market competitors </p>
         <p> ➤ Increase increase awareness of your productivity or services / Increase your visibility </p>
         <p> ➤ Provide quick and efficient customer support </p><br/>
         <p> ➤ Collect costumer  feedback</p>
      </div>
      <img src={processesPic} width={700} style={{marginLeft:'14%',padding:'3%'}}/>
      <h1 style={center}>Benefits of Social media marketing</h1>
      <ol>
         <li><h3><b>Inexpensive :</b> </h3></li><p> Most social media platforms are free and easy to join and create account.</p>
         <li><h3><b>Audience Targeting :</b> </h3></li><p>Social media allows you to  reach your target audience and provide a way for your current  customers to reach you. </p>
         <li><h3><b>Inexpensive :</b> </h3></li><p> Most social media platforms are free, easy to join and create account.</p>
         <li><h3><b>Flexible :</b> </h3></li><p> Social media is flexible because you have control over messaging and you can modify the content as your business grows </p>
      </ol>
   <h1 style={center}>Common platforms for Social media marketing</h1>
   <img src={socialPic} width={300} style={{marginLeft:'30%',padding:'1%'}}/>
   <p>
   Your approach to social media for Business will be different form how you use social media in your normal life <br/>
Each platform such as Facebook , instagram and Twitter comes with different functions :
   </p>
  <img src={facebookPic}  width={150}/>
  <h2><b>Facebook   </b> </h2>
  <p>
  Facebook is where you show the human side of your business, you are able to target specific audiences when advertising. Which guarantees your post will be seen by the audiences that matters most to your business. Keep your Facebook page professional and update it at least twice a week
  </p>
  <h2><b>Twitter   </b> </h2>
   </Container>














 </div>
    </Container>
    );
};