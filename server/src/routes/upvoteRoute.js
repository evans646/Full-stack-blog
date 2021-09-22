import { getDbConnection } from '../db';
import { ObjectID } from 'mongodb';



export const upvoteRoute = {
     path: '/api/articles/:name/:userId/upvote',
     method: 'post',
     handler: async(req, res) => {
        const db = getDbConnection('my-blog');
        const articleName = req.params.name;
        const {userId } = req.params;
        const user = await db.collection('users').findOne(ObjectID(userId));
       
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
               //  console.log(articleInfo.upvotedIds)
        await db.collection('articles').updateOne({ name: articleName }, {
                   '$set': {
                      upvotes: articleInfo.upvotes + 1,
                      hasUpvoted:true,
                      upvotedIds:[]
                     }});
              const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName }); 
       res.status(200).json(updatedArticleInfo);
    }
};