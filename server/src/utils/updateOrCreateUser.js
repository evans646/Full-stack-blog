import { getDbConnection } from '../db';

export const updateOrCreateUserFromOauth = async({ oauthUserInfo }) => {
    const {
        id: googleId,
        verified_email: isVerified,
        email,
        name,
        given_name,
        picture,
    } = oauthUserInfo;

    const db = getDbConnection('my-blog');
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
        const result = await db.collection('users').findOneAndUpdate({ email }, { $set: { googleId, isVerified, hasUpvoted: false } }, { returnOriginal: false }, );
        return result.value;
    } else {
        const result = await db.collection('users').insertOne({
            given_name,
            picture,
            Upvoted: false,
            name,
            email,
            given_name,
            googleId,
            isVerified,
        });
        return result.ops[0];
    }
};