import { getDbConnection } from '../db';
import { ObjectID } from 'mongodb';
import jwt from 'jsonwebtoken';

export const getUserDataRoute = {
    path: '/api/:userId/getUser',
    method: 'get',
    handler: async(req, res) => {
       const db = getDbConnection('my-blog');
       const {userId } = req.params;
      // console.log(userId)
      
       const result = await db.collection('users').findOne(  { _id: ObjectID(userId) })
       if(result){
        const {_id:id,email, username,Upvoted,upvotedId,isVerified} = result;
        // console.log(upvotedId)
       jwt.sign({id, email, isVerified, username,Upvoted,upvotedId}, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
           if (err) return res.sendStatus(500)
           res.status(200).json({ token })
       });
       }
   }
};