import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import router from './route/mahasiswaRoute.js';

//? Express Initial
const  app = express()

//? Dotenv Initial
dotenv.config()
const PORT = process.env.PORT

//? BodyParser Initial
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//* Router 
app.use("/", router);

app.listen(PORT, () => {
    console.log('server berjalan di http://localhost:3000')
})