import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: String,
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
export default mongoose.model('Comment', commentSchema);