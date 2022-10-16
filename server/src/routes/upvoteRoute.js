import { getDbConnection } from '../db';


export const upvoteRoute = {
     path: '/api/blogs/:name/:userId/upvote',
     method: 'post',
     handler: async (req, res) => {
        const db = getDbConnection('techarena'); 
        const blogName = req.params.name;
        const {userId } = req.params;

        const blogInfo = await db.collection('blogs').findOne({ name: blogName });
        await db.collection('blogs').updateOne({ name: blogName },{
                   '$set': {
                      upvotes: blogInfo.upvotes + 1,
                  }}); 
        await db.collection('blogs').updateOne({ _id: blogInfo._id },
         { $push: {
               upvotedIds:userId
         }});
       const updatedBlogInfo = await db.collection('blogs').findOne({ name: blogName }); 
       res.status(200).json(updatedBlogInfo);
    }
};
