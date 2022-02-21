import {FaFacebook} from "react-icons/fa";
import {IoLogoTwitter} from "react-icons/io";
import {BsInstagram} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";


export function FooterSection() {
  return (
    <footer id="pageFooter">
        <div style={{ marginLeft:'25px'}}>
        <h1 style={{fontSize:'1.2rem',borderBottom:'2px solid pink',width:'20%'}}>Quick Links</h1>
        <ul style={{listStyle:'none'}}>
          <li>Main</li>
          <li>Main</li>
          <li>Main</li>
        </ul>
        </div>

        <div style={{ marginLeft:'20%',marginTop: "-7%"}}>
        <h1 style={{fontSize:'1.2rem',borderBottom:'3px solid teal',width:'14%'}}>Follow</h1>
        <FaFacebook  size={26} style={{padding:'5px'}}/>
        <IoLogoTwitter size={26} style={{padding:'5px'}}/>
        <BsInstagram size={26} style={{padding:'5px'}}/>
        <SiLinkedin size={26} style={{padding:'5px'}}/>
        </div>

      <p style={{ marginTop: "7%",fontSize:'1.2rem' }}>
        &copy; 2022 Techboost All Rights Reserved
      </p>
      <h1 style={{marginLeft:"35%",marginTop: "7%",fontSize:'1.2rem' }}>Privacy policy | Terms of service</h1>
    </footer>
  );
};






