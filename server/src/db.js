import { MongoClient } from 'mongodb';

const dbUrl = 'mongodb://localhost:27017'
// process.env.DB_URL ||
let client;


export const initializeDbConnection = async() => {
    client = await MongoClient.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
};