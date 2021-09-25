import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    name: String,
    upvotes: Number,
    comments:[],
    upvotedIds:[
       {
           user:String
       }
    ],
});



export default mongoose.model('Article', articleSchema);