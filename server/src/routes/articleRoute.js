import { getDbConnection } from '../db';

export const articleRoute = {
    path: '/api/articles/:name',
    method: 'get',
    handler: async (req, res) => {
        const articleName = req.params.name;
        const db = getDbConnection('my-blog');
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    },
};
