export const SecondSocialMediaPage =()=>{
    const history = useHistory();



    return(
        <Container maxWidth='lg' className="archItem" >
        <div className='content-container'>
        <p>
        Tagboard ,<Link to='/https://hashtagify.me/'>hashtagify.me</Link> are tools that can help you set alerts to notify you when your brand is mentioned 
        By interacting with your customers on social media channels, they are likely to return for the information the value 
        </p>

      <Container>
          <ol>
          <li><h4><b>Measure success:</b> </h4></li>
          </ol>
      </Container>












       <div style={{padding:'3px',marginTop:'2vh'}}>
       <Stack spacing={2}> 
       <Pagination count={2} variant="outlined" shape="rounded"  defaultPage={2}  onChange={()=> history.push('/featured/socialMediamrkting/pages/1')}/>
     </Stack>
       </div>

        </div>
        </Container>
    )
 
 }