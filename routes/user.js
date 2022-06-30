const express = require('express')
const router = express.Router();
const usercontroller=require('../controller/user_controler');


router.get('/profile',usercontroller.profile);
router.get('/sign-up',usercontroller.signup);
router.get('/sign-in',usercontroller.signin);
router.post('/create',usercontroller.create);
module.exports=router;