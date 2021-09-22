import jwt from 'jsonwebtoken';
import {github}  from '../utils/githubClient';

  export const githubOauthCallbackRoute = {
    path: '/auth/github/callback',
    method: 'get',
    handler:async (req, res) => {

        const code = req.query.code;
        const options = {
          code,
          redirect_uri: 'http://localhost:3000/auth/github/callback'
        };
      
        try {
          // The resulting token.
          const result = await  oauth2.authorizationCode.getToken(options);
      
          // Exchange for the access token.
          const token =  oauth2.accessToken.create(result);
      
          return res.status(200).json(token);
        } catch (error) {
          console.error('Access Token Error', error.message);
          return res.status(500).json('Authentication failed');
        }
    }
};


