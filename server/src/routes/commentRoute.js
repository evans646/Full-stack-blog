import { getDbConnection } from '../db';


export const commentRoute = {
    path: '/api/blogs/:name/add-comment',
    method: 'post',
    handler: async (req, res) => {
        try {
        const db = getDbConnection('techarena');
        const { username, text } = req.body;
        const blogName = req.params.name
        const blogInfo = await db.collection('blogs').findOne({ name: blogName });
        await db.collection('blogs').updateOne({ name: blogName }, {
            '$set': {
                comments: blogInfo.comments.concat({ username, text ,date:new Date().toISOString().slice(0,10),time:new Date().toISOString().slice(11,19)})},
        });
        const updatedBlogInfo = await db.collection('blogs').findOne({ name: blogName });
        res.status(200).json(updatedBlogInfo);
        } catch (err) {
            res.sendStatus(500);
       };
    }
};


