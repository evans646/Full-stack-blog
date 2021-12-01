import axios from 'axios';
import {githubOauthClient} from '../utils/githubOauthClient';

const getAccessAndBearerTokenUrl = ({ clientId }) => `https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientId}`;

export const getGithubUser = async ({ code }) => {
    const { tokens } = await githubOauthClient.getToken(code);
    const response = await axios.get(
        getAccessAndBearerTokenUrl({ clientId: tokens.access_token }),
        { headers: { Authorization: `Bearer ${tokens.id_token}` } },
    );
    console.log(response.data);
    return response.data;
};


