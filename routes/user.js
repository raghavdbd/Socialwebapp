const express = require('express')
const router = express.Router();
const usercontroller=require('../controller/user_controler');


router.get('/profile',usercontroller.profile);
module.exports=router;