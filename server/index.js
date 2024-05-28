import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import AuthRoutes from './routes/AuthRoutes.js'
import db from './config/db.js';
import morgan from 'morgan';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
dotenv.config();

db();

const app = express();

// app.use(cors())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());


//routes
app.use('/api/v2/auth',AuthRoutes)
app.use('/api/v2/category',categoryRoutes)
app.use('/api/v2/product',productRoutes)


app.get('/',(req,res)=>{
    res.send('welcome to the browser')
})


const PORT = process.env.PORT  || 8000;
app.listen(PORT,()=>{
    console.log(`your server is running on http://localhost:${PORT}`)
})