import { getDbConnection } from '../db';

export const updateOrCreateUserFromOauth = async({ oauthUserInfo }) => {
    const {
        id: githubId,
        verified_email: isVerified,
        email,
        name,
        avatar,
    } = oauthUserInfo;

    const db = getDbConnection('my-blog');
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
        const result = await db.collection('users').findOneAndUpdate({ email }, { $set: { githubId, isVerified } }, { returnNewDocument: false });
        return result.value;
    } else {
        const result = await db.collection('users').insertOne({
            username,
            avatar,
            name,
            email,
            githubId,
            isVerified,
        });
        return result.ops[0];
    }
};
