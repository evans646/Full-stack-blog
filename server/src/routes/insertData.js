import { getDbConnection } from '../db';


const articles = [
    {
        name: 'learn-react',
        upvotes: 0,
        upvotedIs:[
         
        ],
    }, {
        name: 'learn-node',
        upvotes: 0,
        upvotedIds:[
          
        ],
    },
    {
        name: 'my-thoughts-on-resumes',
        upvotes: 0,
        upvotedIs:[],
    }, {
        name: 'python',
        upvotes: 0,
        upvotedIs:[],
    }
];


export const insertDataRoute = {
    path: '/api/insert',
    method: 'get',
    handler: async(req, res) => {
        const db = getDbConnection('react-blog-project');
        const dataExist = await db.collection('articles').find(articles);
        if(dataExist){
            await  db.collection('articles').deleteMany({})
            const data = await db.collection('articles').insertMany(articles);
            res.json(data);
        }
        await  db.collection('articles').deleteMany({})
        const data = await db.collection('articles').insertMany(articles);
        res.json(data);
    }
};

