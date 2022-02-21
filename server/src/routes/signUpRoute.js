import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { sendEmail } from '../utils/sendEmail';
import { getDbConnection } from '../db';

export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async(req, res) => {
        const { email, username, password } = req.body;
        const db = getDbConnection('blog-project');
        const user = await db.collection('users').findOne({ email });
        if (user) {
            res.status(409).json({ message: 'User exist with this account' });
        } else {
            const salt = uuid();
            const pepper = process.env.PEPPER_STRING;
            const passwordHash = await bcrypt.hash(salt + password + pepper, 10);
            const verificationString = uuid();
            const result = await db.collection('users').insertOne({
                email,
                username,
                salt,
                passwordHash,
                isVerified: false,
                Upvoted: false,
                verificationString
            });
            const { insertedId } = result;
            //before we sign the jwt token and send it to the user we will use send the verification email with the function that we created previously 
            try {
                await sendEmail({
                    to: email,
                    from: 'jw207740@gmail.com',
                    subject: 'Email Verification',
                    text: `Thanks for signing up, click here to verify your email address : http://localhost:3000/verify-email/${verificationString}`,
                });
            } catch (e) {
                console.log(e)
                return res.status(400).json({ message: 'Failed to send verification email' })
            };

            jwt.sign({
                    id: insertedId,
                    username,
                    email,
                    isVerified: false,
                    Upvoted: false,
                },
                process.env.JWT_SECRET, {
                    expiresIn: '2d',
                },
                (err, token) => {
                    if (err) {
                        return res.sendStatus(500);
                    }
                    res.status(200).json({ token });
                });
        }
    }
};


