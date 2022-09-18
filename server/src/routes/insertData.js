import { getDbConnection } from '../db';


const blogs = [
    {
        name: 'learn-react',
        upvotes: 0,
        comments:[{username:'Evans',text:'I am in love with this comment'}],
        upvotedIs:[
         
        ],
    }, {
        name: 'learn-node',
        upvotes: 0,
        comments:[],
        upvotedIds:[
          
        ],
    },
    {
        name: 'my-thoughts-on-resumes',
        upvotes: 0,
        comments:[],
        upvotedIs:[],
    }, {
        name: 'python',
        upvotes: 0,
        comments:[],
        upvotedIs:[],

    }
];


export const insertDataRoute = {
    path: '/api/insert',
    method: 'post',
    handler: async(req, res) => {
        const db = getDbConnection('techarena');
        const dataExist = await db.collection('blogs').find(blogs);
        if(dataExist){
            await  db.collection('blogs').deleteMany({})
            const data = await db.collection('blogs').insertMany(blogs);
            res.json(data);
        }
        await  db.collection('blogs').deleteMany({})
        const data = await db.collection('blogs').insertMany(blogs);
        res.json(data);
    }
};
