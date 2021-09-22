import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import ExpressError  from './utils/ExpressError.js';
import MongoStore from 'connect-mongo'
import cors from 'cors'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import LocalStrategy from 'passport-local'
import User from './models/user.js'
import path from 'path';
//import bcrypt from 'bcrypt';
const __dirname = path.resolve();
import Article from './models/articles.js';
import Comment from './models/comments.js';

const dbUrl = 'mongodb://localhost:27017/Blog';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR:"));
db.once("open", () => { console.log("DATABASE CONNECTED")});

// const secret = process.env.SECRET || 'Mylastonewhichshouldwork';
// const store = new MongoStore({
//     mongoUrl: dbUrl,
//     secret,
//     touchAfter: 24 * 60 * 60
// });

// store.on("error", function (e) {
//     console.log("SESSION STORE ERROR", e)
// });


// const sessionConfig = {
//     store,
//     secret,
//     name: 'session',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,
//         // secure: true,
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7
//     }
// };
// app.use(session(sessionConfig));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    cors({
        origin:[ "http://localhost:3000","http://localhost:8000"], // <-- location of the react app were connecting to
        credentials: true,
    })
);
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.get('/api/articles/:name', async (req, res) => {
    const articleName = req.params.name;
    try {
        const articleInfo = await Article.findOne({ name: articleName }).populate({
            path: 'comments',
            populate: {
                path: 'author'
            }
        }).populate('author');
        res.status(200).json(articleInfo)
        // console.log(req.session)
    } catch (err) {
        console.log(err)
        throw new ExpressError('Something went wrong')
        // res.status(500).send("Something went wrong");
    };
});
app.post('/api/articles/:name/upvote', async (req, res) => {
    const articleName = req.params.name;
    try {
        const articleInfo = await Article.findOne({ name: articleName })
        await Article.updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
//   console.log(req.session)
    const updatedArticleInfo = await Article.findOne({ name: articleName })
    res.status(200).json(updatedArticleInfo)
    } catch (err) {
        console.log(err)
        res.status(500).send("Something went wrong",err);
    };
});
app.post('/api/articles/:name/add-comment', async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
        // const comment = req.body;
        const articleName = req.params.name;
        const article = await Article.findOne({ name: articleName })
     if(!article) {
            return res.status(400).send("Article cannot be found"); 
        };
        const comment = new Comment(req.body)
        // comment.author = req.user._id;
        console.log(comment);
        article.comments.push(comment)
        await article.save();
        await comment.save();
        const updatedArticleInfo = await Article.findOne({ name: articleName }).populate('comments')
        res.status(200).json(updatedArticleInfo)
    } catch (err) {
        console.log(err)
        res.status(500).send("Something went wrong");
    }; 
});

app.delete('/api/articles/:postId/:commentId', async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.postId, { $pull: { comments: req.params.commentId }, }, { new: true });
        if (!article) {
            return res.status(400).send('Article cannot be found');
        }
        await Comment.findByIdAndDelete(req.params.commentId);
        const updatedArticleInfo = await Article.findById(req.params.postId);
        res.status(200).json(updatedArticleInfo);
    } catch (err) {
        res.status(500).send('Something went wrong');
    };
});

// _id: 60d0f429550db95815916f04,
//   username: '2222',
//   email: 'jw207740222@gmail.com',
//   password: '$2b$10$ciSwg5ZwdK6qwJXblvbCT.6p/xvAEz.YHlqPiamlXoSAJr0jLrRg6',
//   __v: 0

app.post('/api/register', async (req, res, next) => {
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        const result = await user.save()
        const { password, ...data } = result.toJSON()
        res.send(data)
        console.log(result)
    } catch (e) { 
        console.log(e)
        res.status(400).send(next(e))
    }
});
app.post('/api/login', async (req, res) => {
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
        return res.status(404).send({
            message: 'user not found'
        })
    }
    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send({
            message: 'invalid credentials'
        })
    }
    const token = jwt.sign({ _id: user._id }, "secret")
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    })
    res.send({
        message: 'success'
    })
    console.log(user.username)
});


app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Something Went Wrong!'
    res.status(statusCode).send(err)
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('SEVER IS LISTENING...')
});


