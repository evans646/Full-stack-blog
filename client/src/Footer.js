import React from 'react';
import { Link } from 'react-router-dom';



export const FooterSection = () => {

    return (
         <footer id="pageFooter">
         <form action="http://desolve.org" method="post" class="search-form">
          <label for="search">Looking for something? </label>
          <input type="search" placeholder="Search" title="Search" class="q" name="search" id="search"/>
          <input type="submit" class="submit" value="Go" name="submit"/>
        </form>
      
      
        <p><Link to="http://www.twitter.com/jameswillweb">twitter</Link></p>
    
        <p class="notice">&copy; 2021 Techboost All rights reserved</p>
        <div >
        </div>
      </footer>
     
//       <div>
//       <Footer
      
//   columns={[
    
//     {
//       icon: (
//         <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
//       ),
//       title: '语雀',
//       url: 'https://yuque.com',
//       description: '知识创作与分享工具',
//       openExternal: true,
//     },
//     {
//       icon: (
//         <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
//       ),
//       title: '语雀',
//       url: 'https://yuque.com',
//       description: '知识创作与分享工具',
//       openExternal: true,
//     },
//     {
//       title: (<h1>Quick Nav</h1>),
//       url: 'https://yuque.com',
//       description: '知识创作与分享工具',
//       openExternal: true,
//     },
  
//   ]}
//   bottom="Made with ❤️ by Techboost"
//   backgroundColor='rgb(173, 169, 130)'
// />
//     </div>
      
    );
};


