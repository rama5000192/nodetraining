const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

async function main(){
    console.log('Connecting to MongoDB')
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to MongoDB')
    const app = express()
    app.use(express.json())
    app.use('/src/api/products',require('./src/api/products/products.routes'))
    app.listen(3000, () => console.log('Server started'))
}
main()