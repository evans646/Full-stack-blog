import { createSelector } from 'reselect';

export const getBlogs = state => state.blog.data;
export const getBlogsLoading = state => state.blogs.isLoading;


export const getBlog = createSelector(
    getBlogs,
    (blogs) => blogs.map(blog=>blog)
    // blogs.map(blog =>blog),
);
