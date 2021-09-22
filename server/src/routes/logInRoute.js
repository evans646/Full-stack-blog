import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';


export const logInRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req, res) => {
        const { username, password } = req.body;

        const db = getDbConnection('my-blog');
        const user = await db.collection('users').findOne({ username });

        if (!user) return res.sendStatus(401);

        const { _id: id, isVerified, passwordHash, salt,Upvoted } = user;

        const pepper = process.env.PEPPER_STRING;

        const isCorrect = await bcrypt.compare(salt + password + pepper, passwordHash);
        if (isCorrect) {
            jwt.sign({ id, isVerified, username ,Upvoted}, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
                if (err) {
                    // throw new ExpressError('Authentication failed try again', 500)//internal error
                    res.sendStatus(500);
                }
                res.status(200).json({ token });
            })
        } else {
            return res.sendStatus(401);
        };
    },
};