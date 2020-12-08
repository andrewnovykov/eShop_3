import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connecDB from './config/db.js'
//import products from './data/products.js'

import productRoutes from './routes/productRoutes.js'


dotenv.config()

connecDB()

const app = express()

app.get('/', (req, res)=> {
    res.send('API is runing')
})

app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 5000

app.listen( PORT, console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow.bold ))