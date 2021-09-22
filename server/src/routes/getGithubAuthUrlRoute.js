import { oauth2}  from '../utils/githubClient'


  export const githubOauthUrlRoute = {
    path: '/auth/github',
    method: 'get',
    handler: async (req, res) => {
      const authorizationUri =  oauth2.authorize()
      res.redirect(authorizationUri);  
    }
    // Ask the user to authorize
};

