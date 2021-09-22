import mongoose from 'mongoose';
import Article from '../models/articles.js'

mongoose.connect('mongodb://localhost:27017/my-blog', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR:"));
db.once("open", () => {
    console.log("DATABASE CONNECTED")
});

const articles = [
    {
        name: 'learn-react',
        upvotes: 0,
        upvotedIs:[],
    }, {
        name: 'learn-node',
        upvotes: 0,
        upvotedIds:[],
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

const seedDb = async () => {
    await Article.deleteMany({})
    await Article.insertMany(articles)
        .then(res => {
            console.log(res)
            mongoose.connection.close();
        }).catch(err => {
            console.log(err)
        });
};
seedDb();