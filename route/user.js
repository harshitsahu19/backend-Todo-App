const express = require ('express');
const router = express.Router();
const verifyToken = require ('../controller/user/verifyToken')

const createUser = require ('../controller/user/register')
const getUserById = require ('../controller/user/getUser')
const login = require("../controller/user/login")
const logout = require ("../controller/user/logout")
const home = require ("../controller/user/getHome")

router.get('/',(req,res)=>{res.render('index');})
router.post('/register',createUser.create);
router.post('/getUser',verifyToken,getUserById.getUser)
router.post('/login',login.login) 

router.get('/home',verifyToken,home.getHome)

router.get('/logout',logout.logout)

module.exports = router

