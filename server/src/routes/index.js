import { logInRoute } from './logInRoute';
import { signUpRoute } from './signUpRoute';
import { testEmailRoute } from './testRoute';
//import { updateUserInfoRoute } from './updateUserInfoRoute';
import { articleRoute } from './articleRoute';
import { upvoteRoute } from './upvoteRoute';
import { commentRoute } from './commentRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleUrlAuthRoute';
import { googleOauthCallbackRoute } from './googleAuthCallbackRoute';
import {getUserDataRoute } from './loadUserDataRoute';
import {downVoteRoute} from './downVoteRoute';


export const routes = [
    upvoteRoute,
    downVoteRoute,
    getUserDataRoute ,
    getGoogleOauthUrlRoute,
    googleOauthCallbackRoute,
    articleRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    logInRoute,
    signUpRoute,
    testEmailRoute,
    verifyEmailRoute,
    commentRoute,
];