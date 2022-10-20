import express from 'express';
import cors from 'cors';
import path from 'path';
import { routes } from './routes';
import { initializeDbConnection } from './db';

const PORT = process.env.PORT || 8080;
const app = express(); 

// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(express.json()); 
//so we can mak
app.use(cors({origin: "*"}));
// To serve the build files from client side
app.use(express.static(path.join(__dirname, '/build')));
// Add all the routes to our Express server
// exported from routes/index.js
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});
// Serve the html file
app.get('*', (_req, res) => {  
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
// Connect to the database, then start the server.
// This prevents us from having to create a new DB
// connection for every request. 
initializeDbConnection() 
    .then(() => console.log('DATABASE CONNECTED'))
    .then(() => {
        app.listen(PORT, () => {
            console.log(`APP IS LISTENING ON PORT ${PORT}`);
        });
    }); 

