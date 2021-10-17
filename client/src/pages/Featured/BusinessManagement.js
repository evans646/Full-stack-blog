import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';




import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const h4 = {
    textDecoration:'1px underline',
    fontSize:'20px',
  };

export const BusinessManagement= () =>{



    return(
        <>
        <Container>
            <div className='content-container'>
            <Typography variant="h3" style={{textAlign:'center'}}>Business Management</Typography>

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
<ol>
<li>1.0 CONCEPT OF MANAGEMENT</li>
<li>1.1 FEATURES AND OBJECTIVES OF MANAGEMENT</li>
<li>1.2 MANAGEMENT AND ADMINISTRATION</li>
<li>1.3 LEVELS OF MANAGEMENT AND MANAGERIAL SKILLS</li>
<li>1.4 MANAGERIAL ROLES </li>
<li> 1.5 MANAGEMENT PROCESS AND MANAGEMENT FUNCTION</li>
 </ol>
</div>
 </AccordionDetails>
 </Accordion>
<div>
</div>


<p><b style={{fontSize:'23px',paddingTop:'40px'}}>What is Management ?</b> </p>



            </div>
        </Container>
        </>
    )
}