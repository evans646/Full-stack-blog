import { getDbConnection } from '../db';
import { ObjectID } from 'mongodb';



export const downVoteRoute = {
     path: '/api/articles/:name/:userId/downvote',
     method: 'post',
     handler: async(req, res) => {
        const db = getDbConnection('my-blog');
        const articleName = req.params.name;

        const {userId} = req.params;
        
        const user = await db.collection('users').findOne({ _id:ObjectID(userId)}); 
               
            try {
                const articleInfo = await db.collection('articles').findOne({name: articleName });
                if(userId===articleInfo.Upvoted_id) return;
                    await db.collection('articles').updateOne({ name: articleName }, {
                        '$set': {
                            upvotes: articleInfo.upvotes - 1,
                            hasUpvoted:false,
                        },
                    });
            } catch (e) {
                res.sendStatus(500);
            }
        
       const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName })
       res.status(200).json(updatedArticleInfo);
    }
};


