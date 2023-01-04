const router= require('express').Router();
const {loginHanlder,registerHanlder}= require('../controllers/userController');
//get all users
router.post('/login',loginHanlder);
router.post('/register',registerHanlder);

module.exports=router;