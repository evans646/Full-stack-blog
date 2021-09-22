import { getDbConnection } from '../db';


export const commentRoute = {
    path: '/api/articles/:name/add-comment',
    method: 'post',
    handler: async (req, res) => {
        try {
        const db = getDbConnection('my-blog');
        const { username, text } = req.body;
        const articleName = req.params.name
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
        } catch (err) {
            res.sendStatus(500);
       };
    }
};


