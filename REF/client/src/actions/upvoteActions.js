


export const SET_USER_UPVOTE_SUCCESS = 'SET_USER_UPVOTE_SUCCESS'

export const setUpvoteOnArticle = upvotes=> ({
    type:SET_USER_UPVOTE_SUCCESS,
    payload: { upvotes},
});