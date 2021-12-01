import axios from  'axios';
import {getGithubUser} from '../utils/getGithubUser';
import { updateOrCreateGithubUserFromOauth} from '../utils/githubUpdateOrCreate';

let token = null;

export const githubOauthCallbackRoute = {
    path: '/auth/google/callback',
    method: 'get',
    handler: async (req, res) => {
        const { code } = req.query;        

   const oauthUserInfo = await getGithubUser({ code });
   const updatedUser = await updateOrCreateGithubUserFromOauth({ oauthUserInfo });
   const { _id: clientId, isVerified, email,username,avatar} = updatedUser;

   jwt.sign(
    { id:clientId, isVerified, email,username,avatar },
    process.env.JWT_SECRET,
    (err, token) => {
        if (err) return res.sendStatus(500)
        res.redirect(`http://localhost:3000/login?token=${token}`)
    }
);
}
};