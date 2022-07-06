import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache'); // Set mustache as view engine
server.set ('views', path.join(__dirname, 'views')); // Set view folder path
server.engine('mustache', mustache()); // Set engine

server.use(express.static(path.join(__dirname, '../public'))); // Set public folder path

// Routes
server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404');
})

server.listen(process.env.PORT);