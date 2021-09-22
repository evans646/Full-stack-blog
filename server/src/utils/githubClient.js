import  simpleOAuth2Github from 'simple-oauth2';


let options = {}

const github = simpleOAuth2Github.create(options);


  export const oauth2 = github.create({
    client: {
      id: process.env.GITHUB_CLIENT_ID,
      secret: process.env.GITHUB_CLIENT_SECRET
    },
    auth: {
      authorizeHost: 'https://github.com',
      authorizePath: '/login/oauth/authorize',
  
      tokenHost: 'https://github.com',
      tokenPath: '/login/oauth/access_token'
    }
  });

