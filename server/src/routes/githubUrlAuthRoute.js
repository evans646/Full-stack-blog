import { getGoogleOauthUrl } from '../utils/getGoogleAuthUrl';

export const getGithubOauthUrlRoute = {
    path: '/auth/github/url',
    method: 'get',
    handler: (req, res) => {
        const url = getGoogleOauthUrl();
        res.status(200).json({ url });
    }
};