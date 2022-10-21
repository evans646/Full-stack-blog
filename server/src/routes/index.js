import { blogRoute } from './blogRoute';
import { logInRoute } from './logInRoute';
import { signUpRoute } from './signUpRoute';
import { testEmailRoute } from './testRoute';
import { commentRoute } from './commentRoute';  
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleUrlAuthRoute';
import { googleOauthCallbackRoute } from './googleAuthCallbackRoute';
import { downVoteRoute } from './downVoteRoute';
import { upvoteRoute } from './upvoteRoute';
import {insertDataRoute} from './insertData';


export const routes = [
    blogRoute,
    insertDataRoute, 
    upvoteRoute,
    downVoteRoute,
    getGoogleOauthUrlRoute,
    googleOauthCallbackRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    logInRoute,
    signUpRoute,
    testEmailRoute,
    verifyEmailRoute,
    commentRoute,
];