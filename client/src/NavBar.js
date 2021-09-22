import React,{useState} from 'react';
import { Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Header} from '../src/Header';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { useUser } from './auth/useUser';
import './index.css'





//material ui styles
const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: theme.spacing(2),
  },
}));


export const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
    const user = useUser();
    const {username ,name,give_name} = user || '';
    
    const handleLogOut = (e) => {
        e.preventDefault();
        // We'll want to log the user out here  
        localStorage.removeItem('token');
        // history.push('/login');
        window.location.reload();
    };
    return user ? (
        <nav id='mainNav'>
            <>
            <header>
              <Header/>
            </header>
                <ul>
                    <li>
                        <Link className='home' to='/'>Home
                            <em> navigate to home </em>
                        </Link>
                    </li>
                    <li>
                    <Link className='about' to='/about'>About
                        <em> the author </em>
                    </Link>
                  </li>
                    <li>
                        <Link className='articles' to='/articles-list'>Articles
                         <em> our articles</em>
                    </Link>
                </li>
             <li>
         <div>
<Link to='#' aria-controls="simple-menu"  aria-haspopup="true" onClick={handleClick}>
  E- Library
  <em>e library</em>
  </Link>
 <Menu className={classes.paper}
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
        onClose={handleClose}>
      <MenuItem onClick={handleClose}><Link className='articles' to="/e-library">E-Books</Link> </MenuItem>
   <MenuItem onClick={handleClose}><Link className='articles' to="/article-list">Tutorials</Link> </MenuItem>
 </Menu>
 </div>
    </li>
        <li>
        <Link className='logout' to="/" onClick={handleLogOut}> Logout
                            <em>log out here <span style={{fontWeight:'bold'}}>{username||name||give_name}</span></em>
                        </Link>
                    </li>
                </ul>
            </>
        </nav>
    ) : (
        <div>
            <nav id='mainNav'>
                <>
                <header>
              <Header/>
            </header>
                </>
                <ul>
                    <li>
                        <Link className='home' to="/">Home
                            <em>navigate to home</em>
                        </Link>
                    </li>
                    <li>
                        <Link className='about' to="/about">About
                            <em>the author</em>
                        </Link>
                    </li>
                    <li>
                        <Link className='articles' to="/articles-list">Articles
                            <em> our articles</em>
                     </Link>
              </li>
         <li>
         <div>
<Link to='#' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
E- Library
  <em>e library</em>
</Link>
<Menu className={classes.paper}
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}>
<MenuItem onClick={handleClose}><Link className='articles' to="/e-library">E-Books</Link> </MenuItem>
<MenuItem onClick={handleClose}><Link className='articles' to="/article-list">Tutorials</Link> </MenuItem>
<MenuItem onClick={handleClose}><Link className='articles' to="/article-list">Tutorials</Link> </MenuItem>
<MenuItem onClick={handleClose}><Link className='articles' to="/article-list">Tutorials</Link> </MenuItem>
<MenuItem onClick={handleClose}><Link className='articles' to="/article-list">Tutorials</Link> </MenuItem>
</Menu>
</div>
     </li>
         <li>
            <Link className='signup' to="/signup">Register
                            <em>new account</em>
                        </Link>
                    </li>
                    <li>
                        <Link className='login' to="/login">Sign In
                            <em>account</em>
                        </Link>
                    </li>
                    <li>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
