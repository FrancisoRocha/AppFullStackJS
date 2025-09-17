import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

const app = express();
dotenv.config()

conectarDB();

app.use('/', (res, req) => {
    res.send('Hola Mundo');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running 🚀 in ${PORT}`)
})
