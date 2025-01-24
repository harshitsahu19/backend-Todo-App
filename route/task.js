const express = require ('express');
const router = express.Router();

const isLoggedIn =require ('../controller/user/verifyToken')

const task = require ('../controller/task/createTask')
const edit = require ('../controller/task/edit')
const deleteTask = require ('../controller/task/deleteTask')




router.post('/create',isLoggedIn,task.create)

router.post('/edit/:taskId', isLoggedIn,edit.editTask);

router.post('/delete-task/:taskId', isLoggedIn,deleteTask.deletetask);
 


module.exports = router