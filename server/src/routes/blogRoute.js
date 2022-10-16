import { getDbConnection } from '../db';


export const blogRoute = {
    path: '/api/blogs/:name',
    method: 'get',
    handler: async (req, res) => {
        const blogName = req.params.name;
        const db = getDbConnection('techarena');
        const articleInfo = await db.collection('blogs').findOne({ name: blogName });
        res.status(200).json(articleInfo);
    },
};