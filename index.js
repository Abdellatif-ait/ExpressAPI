const express = require('express');
const connectDB= require('./src/config/dbConfig')
const bodyParser=require('body-parser')
const product= require('./src/api/router/product');
const user= require('./src/api/router/user');
const morgan = require('morgan');
const cors= require('cors')
require('dotenv').config();

const app = express();

// here's an middleware to accept the urlencoded body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//middleware for logging the requests
app.use(morgan('dev'))


app.use(cors({
    origin: '*'
}))

//Calling DB connection

connectDB();

//main route
app.get('/',(req,res)=>{
    res.json({message:'HI WTM!'})
})

//Call router
app.use('/product',product)
app.use('/user',user)

// if the route is not found
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

//call server
app.listen(process.env.PORT||3000,()=>{
    console.log('welcome to GDG,WTM workshop')
})