import { getDbConnection } from '../db';
import { ObjectID } from 'mongodb';



export const downVoteRoute = {
     path: '/api/articles/:name/:userId/downvote',
     method: 'post',
     handler: async(req, res) => {
        const db = getDbConnection('my-blog');
        const articleName = req.params.name;

        const {userId} = req.params;

            try {
                const articleInfo = await db.collection('articles').findOne({name: articleName });
                    await db.collection('articles').updateOne({ name: articleName }, {
                        '$set': {
                            upvotes: articleInfo.upvotes - 1,
                            hasUpvoted:false,
                        },
                    });
            } catch (e) {
                res.sendStatus(500);
            }
   
            await db.collection('articles').updateOne(
                { name: articleName},
                { $pull: { upvotedIds:userId} })
        
       const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName })
       res.status(200).json(updatedArticleInfo);
    }
};


