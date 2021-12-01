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
        const result = await db.collection('users').findOneAndUpdate({ email }, { $set: { googleId, isVerified } }, { returnNewDocument: false });
        return result.value;
    } else {
        const result = await db.collection('users').insertOne({
            given_name,
            picture,
            name,
            email,
            given_name,
            googleId,
            isVerified,
        });
        return result.ops[0];
    }
};
export const updateOrCreateGithubUserFromOauth = async({ oauthUserInfo }) => {
    const {
        id: clientId,
        verified_email: isVerified,
        email,
        name,
        avatar,
    } = oauthUserInfo;

    const db = getDbConnection('my-blog');
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
        const result = await db.collection('users').findOneAndUpdate({ email }, { $set: { clientId, isVerified } }, { returnNewDocument: false });
        return result.value;
    } else {
        const result = await db.collection('users').insertOne({
            avatar,
            name,
            email,
            username,
            clientId,
            isVerified,
        });
        return result.ops[0];
    }
};