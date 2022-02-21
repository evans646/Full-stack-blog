import { getDbConnection } from '../db';
//import { ObjectID } from 'mongodb';



export const upvoteRoute = {
     path: '/api/articles/:name/:userId/upvote',
     method: 'post',
     handler: async (req, res) => {
        const db = getDbConnection('blog-project');
        const articleName = req.params.name;
        const {userId } = req.params;

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName },{
                   '$set': {
                      upvotes: articleInfo.upvotes + 1,
                  }}); 
        await db.collection('articles').updateOne({ _id: articleInfo._id },
         { $push: {
               upvotedIds:userId
         }});
       const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName }); 
       res.status(200).json(updatedArticleInfo);
    }
};

