import { getDbConnection } from '../db';



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
                        },
                    });
            } catch (e) {
                res.sendStatus(500);
            };
     //update the article by removing the userId from the upvoted id's in order to undo upvote 
       await db.collection('articles').updateOne({ name: articleName},{ $pull: { upvotedIds:userId}});

       const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName })
       res.status(200).json(updatedArticleInfo);
    }
};


