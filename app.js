const express = require ('express');
const app = express();
var path = require('path');
const session = require('express-session');
 
//this is mongoose connection file 
const passport = require('./config/passportConfig');
require('./config/db');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));


// Middleware to parse JSON request bodies
app.use(express.json());
app.use(passport.initialize());

app.use(express.urlencoded({ extended: true }));  // Parses application/x-www-form-urlencoded data




require('dotenv').config()
const PORT = process.env.PORT
 
const routes = require('./route/user')
const taskRoute = require('./route/task')

app.use('/',routes)
app.use('/task',taskRoute)




app.listen(PORT,()=>{
console.log("server is running on 4000")
}) 