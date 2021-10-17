import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Avatar, { ConfigProvider }  from 'react-avatar';

import { useUser } from '../auth/useUser';






export const ProfilePage = ()=>{

const user = useUser();
let {username,picture,id,email,name} = user;


    return(
       <Container maxWidth='md'>
        <div className='bottom-container'>
            <h1>Hi there i am the profile page</h1>
          <div>
          <h3>Username:</h3>
            <p>{username}</p>
          </div>
           <div>
           <h3>Email:</h3>
            <p>{email}</p>
           </div>
           <h3>Avatar</h3>
           <Avatar src={picture}  size="100" round={true} name={username ||name} />
        </div>
        <p>You can make changes to your account <Link to='/user/profile/settings'>here</Link></p>
       </Container>
    )

}