const express = require('express');
const app = express();
const router = express.Router();
const userController=require('../controller/userController')

router.get('/get-users',userController.getUsers)
router.get('/get-users/:userById',userController.getUserById)
router.post('/add-user',userController.addUser)
router.post('/delete-user',userController.deleteUser)

module.exports = router
