
export const LOAD_BLOG_IN_PROGRESS = 'LOAD_BLOGS_IN_PROGRESS';
export const loadBlogInProgress = () => ({
    type: LOAD_BLOG_IN_PROGRESS,
});

export const LOAD_BLOG_SUCCESS = 'LOAD_BLOGS_SUCCESS';
export const loadBlogSuccess = blog => ({
    type: LOAD_BLOG_SUCCESS,
    payload: { blog},
});

export const LOAD_BLOG_ERROR = 'LOAD_BLOGS_ERROR';
export const loadBlogError = () => ({
    type: LOAD_BLOG_ERROR,
});

