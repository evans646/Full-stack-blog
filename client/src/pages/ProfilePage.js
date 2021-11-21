import Container from '@material-ui/core/Container';

import { useUser } from '../auth/useUser';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';



export const ProfilePage = ()=>{

  const user = useUser();
  let {username,email} = user;

  
    return(
       <Container maxWidth='md'>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <div className='bottom-container'>
          <h3>Username:</h3>
            <p>{username}</p>
          </div>
           <div>
           <h3>Email:</h3>
            <p>{email}</p>
           </div>
           <h3>Avatar</h3>
        </CardContent>
      </CardActionArea>
    </Card>
       </Container>
    )

};