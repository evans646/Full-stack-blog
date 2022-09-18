import { getDbConnection } from '../db';


export const searchRoute = {
    path: '/api/blogs',
    method: 'get',
    handler: async (req, res) => {
        const db = getDbConnection('techarena');
        await db.collection('blogs').find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).json(result);
          });
    },
};
