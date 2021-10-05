import jwt from 'jsonwebtoken';
import { githubUpdateOrCreate } from '../utils/githubUpdateOrCreate';

  export const githubOauthCallbackRoute = {
    path: '/auth/github/callback',
    method: 'get',
    handler:async (req, res) => {

        const code = req.query.code;
      
     const response = await axios({
          method: 'post',
          url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRETE}&code=${code}`,
          // Set the content type header, so that we get the response in JSON
          headers: {
               accept: 'application/json'
          }
        }).then(res.send(response))
     
      //   jwt.sign(
      //     { id, isVerified, email,name,picture,given_name,Upvoted },
      //     process.env.JWT_SECRET,
      //     (err, token) => {
      //         if (err) return res.sendStatus(500)
      //         res.redirect(`http://localhost:3000/login?token=${token}`)
      //     }
      // );
}};


