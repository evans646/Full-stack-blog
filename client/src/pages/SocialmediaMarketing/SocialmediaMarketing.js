import React from "react";
import { useNavigate } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import mediapic from '../../images/media1.png';
import followpic from '../../images/follow.webp';
import connectpic from '../../images/connect.jpg'
import processesPic from '../../images/processes.jpg';
import socialPic from '../../images/social1.jpg';
import planPic from '../../images/plan.webp';


const h4 = {
  textDecoration:'1px underline',
  fontSize:'20px',
};
const center = {
   textAlign:'center',
   padding:'15px',
   fontSize:'27px'
};


export function SocialMediaMarketingPage(){
   const history = useNavigate();
   let contents = [
      <Container maxWidth='lg' className="archItem" >
      <div className='content-container'>
                <Accordion style={{backgroundColor:'#f2f2f2',width:'40vh',overflow:'hidden'}}>
              <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
           >
            <Typography  variant="h5" style={h4}>Table of Contents</Typography>
              </AccordionSummary>
            <AccordionDetails>
            <div style={{marginLeft:'20px',listStyle:'none',fontSize:'15px',padding:'5px',lineHeight:'2.0em'}}>
            <ol  key={11}>
            <li>1.0 BUSINESS CONCEPT OF SOCIAL MEDIA MARKETING </li>
            <li>1.1 TECHNOLOGY SKILL</li>
            <li>1.2 SUMMARY</li>
             </ol>
          </div>
             </AccordionDetails>
             </Accordion>
         <div>
      </div>
      <Typography  variant="h3"  style={{textAlign:'center',padding:'10px',margin:'3vh'}}> Social Media Marketing for business<sup style={{fontSize:'17px',fontSmooth:'smooth',color:'black'}}>1.0</sup></Typography>
      <p>
      Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. Your customers are already interacting with brands through social media, and if you're not speaking directly to your audience through social platforms like Facebook, Twitter, Instagram, and Pinterest, you're missing out! Great marketing on social media can bring remarkable success to your business, creating devoted brand advocates and even driving leads and sales.
      </p>
      <img src={mediapic} width={700} style={{marginLeft:'10%',padding:'2.2%'}} alt='social media'/>
      <p><b style={{fontSize:'23px',float:'left'}}>What is Social Media  ?</b> </p>
     <Container maxWidth='md'>
     <ul  style={{paddingLeft:'22px',padding:'7px'}}  key={33}>
         <li>Social Blends technology and social interactions
          to Creates an online Environment where members of a virtual community can interact.</li>
         <li>It also enable people to share subjects of mutual interests through pictures and posts and videos </li>
      </ul>
     </Container>
   
      <p><b style={{fontSize:'23px',fontWeight:'bold'}}>Social Media Marketing </b> </p>
   <p>
   Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on your social media profiles, listening to and engaging your followers, analyzing your results, and running social media advertisements.
   </p>
   <p>
   The major social media platforms (at the moment) are Facebook, Instagram, Twitter, LinkedIn, Pinterest, YouTube, and Snapchat
   </p>
      <h1 style={center}>Purpose of Social media marketing</h1>
      <p style={{padding:'10px'}}>Social media can be used to market a companies product or services and engage with customers online. With social media, companies are able to,  </p>
     <Container maxWidth='lg'>
        <h4><b>Create Brand Awareness</b> </h4>
        <p> ➤ Having your companies presence on social media platform like <b>Facebook</b> , <b>twitter </b> and <b>instagram</b> can help to increase awareness of your company's brand/products or services. </p>
        <img src={followpic} width={300} style={{marginLeft:'30%',padding:'3%'}} alt='follow'/>
        <h4><b>Build Relationships</b> </h4>
        <p> ➤ Social media can also help you build connections with your audience. By sharing your expertise online you can connect with customers, partners, employees and suppliers</p>
        <img src={connectpic} width={400} style={{marginLeft:'30%',padding:'3%'}} alt='connect with others'/>
        <h4><b>Improve Business Processes</b> </h4>
        <b style={{padding:'5px'}}>Social media can enable you to :</b>
        <div style={{padding:'15px'}}>
           <p> ➤ Research market competitors </p>
           <p> ➤ Increase increase awareness of your productivity or services / Increase your visibility </p>
           <p> ➤ Provide quick and efficient customer support </p><br/>
           <p> ➤ Collect costumer  feedback</p>
        </div>
        <img src={processesPic} width={600} style={{marginLeft:'14%',padding:'0.5%'}} alt='business processes'/>
        <h1 style={center}>Benefits of Social media marketing</h1>
        <p>
           While there are many ways to market a business, social media is an option that provides many Benefits.
        </p>
       <Container maxWidth='lg'>
       <ol  key={6}>
           <li><h4><b>Inexpensive :</b> </h4></li><p> Most social media platforms are free and easy to join and create account.</p>
           <li><h4><b>Audience Targeting :</b> </h4></li><p>Social media allows you to  reach your target audience and provide a way for your current  customers to reach you. </p>
           <li><h4><b>Flexible :</b> </h4></li><p> Social media is flexible because you have control over messaging and you can modify the content as your business grows </p>
        </ol>
       </Container>
     <h1 style={center}>Common platforms for Social media marketing</h1>
     <img src={socialPic} width={400} style={{marginLeft:'30%',padding:'0.5%'}} alt='social'/>
     <p style={{lineHeight:'2.0rem'}}>
        You might understand  the basic functions of social media platforms such as Facebook,Instagram, Twitter from using them in your daily life to stay in touch with family, friends and share photos.<br/>
     Your approach to social media for Business will be different form how you use social media in your personal life. <br/>
   Each platform such as <b>Facebook</b> ,<b>Instagram </b>and <b>Twitter</b> comes with different functions :
     </p>
   <Container maxWidth='md'>
      <ul key={1}>
      <li><b>Facebook</b></li>
     <p>
     Facebook is where you show the human side of your business, you are able to target specific audiences when advertising. Which guarantees your post will be seen by the audiences that matters most to your business. Keep your Facebook page professional and update it at least twice a week.
    </p>
    <li><b>Instagram </b></li>
    <p>
     Instagram is image-based platform , this is a place to share information with visually compelling images or vies about your product with a photo or a short video, instagram stories is a great way to give your audience a view of your business and culture.
    </p>
    <li><b>Twitter</b></li>
    <p>
     Twitter Is a social media platform where users post and interact with short messages called “tweets”.  Twitter is ideal for sharing updates, posting announcements and keeping your followers informed, it can also be used for customer service. Publish  4-5 tweets in a week or more often during an event.
    </p>
    <li><b>Pinterest</b></li>
    <p>
     Pinterest is useful for showing products and sources of inspiration. You can also select images that are useful and relevant to your brand. If it is important to share imagery of your products or services, use Pinterest and update it regularly.
    </p>
    <li><b>LinkedIn</b></li>
    <p>
    Is a former business platform where you can publish your resume. You can expand your professional network and keep up to date with business and pages you follow. 
    If reaching professional audience is important to your business then consider using LinkedIn.
    </p>
    </ul>
   </Container>
   </Container>
   <p style={{padding:'3vh'}}>
    To begin establishing a social media market, you need to build a marketing plan for your business. Here are a few key steps to take. 
   </p>
   <img src={planPic}  width={600} style={{marginLeft:'25%',padding:'0.5%'}} alt='planning'/>
   <Container maxWidth='lg'>
   <ol>
   <li><h4><b>Define your goals:</b> </h4></li>
   <p  style={{padding:'1vh'}}> Define what you want to achieve with your marketing plan: </p>
   <Container maxWidth='md'>
   <ul  style={{listStyle:'disc'}} key={2}>
      <li>	Increase traffic to your website or business </li>
      <li>Build awareness of your brand  </li>
      <li>Establish better business processes</li>
      <li>Increase sales </li>
   </ul>
   </Container>
   <p>
   Make sure your goals are measurable and enable you to track your progress.<br/>
   For example increase website traffic by 20% in one year.
   </p>
   
   <li><h4><b>Define your audience :</b> </h4></li>
   <p>
   Determine your target  audience to help you shape the content and platforms of your social media channels 
   </p>
   <Container maxWidth='md'>
   <ul  style={{listStyle:'disc'}}  key={3}>
      <li>Location </li>
      <li>Age  </li>
      <li>Gender</li>
      <li>Ethnicity</li>
      <li>Income</li>
   </ul>
   </Container>
   <p>
   What are customers interests and need's  your business can solve ? <br/>
   Understanding who your customers are will help you connect with them on a personal level, humanize your brand and serve them at highest levels.
   </p>
   <li><h4><b>Create compelling content:</b> </h4></li>
   <p>
   Your brand’s social personality should reflect : 
   </p>
   <Container maxWidth='md'>
   <ul  style={{listStyle:'disc'}}  key={4}>
      <li>What makes your business special </li>
      <li>It's value to your customer</li>
      <li>What inspires you to do the work you</li>
   </ul>
   </Container>
   <p>
   Timely and relevant content is important on social media. Your content must be meaningful and provide value to customers.
   Your audience will stay connected to you if they regularly see interesting content, products or services they cannot get elsewhere.
   </p>
   <li><h4><b>Engage your audience:</b> </h4></li>
   <p>
   Social media helps build relationships with your customers :
   </p>
   <Container maxWidth='md'>
   <ul style={{listStyle:'disc'}}  key={5}>
      <li> Allows communications to flow in both directions </li>
      <li> Enables you and your customers to add value to the interaction  </li>
   </ul>
   </Container>
   </ol>
   </Container>
   </div>
   </Container>
   ]


 
let indexPage = contents;


    return (
       <div>
    {indexPage}
      <div style={{padding:'0px',margin:'2vh'}}>
     <Stack spacing={2}>
      <Pagination count={2} variant="outlined" shape="rounded"  onChange={()=> history.push('/featured/socialMediamrkting/page=1')}/>
    </Stack>
       </div>
       </div>
    );
};