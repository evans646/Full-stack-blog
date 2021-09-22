import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';


const userSchema = new Schema({
    username: {
        type: String,
         required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});



// userSchema.plugin(passportLocalMongoose);//this information will be added on to the schema oce we plugged in
export default mongoose.model('User', userSchema);







//to register a user we need to install passport, passport-local, passport-local-mongoose