// this module help in setting different routes and modules
// express is created only once ony instance is passed
const express = require('express')
const router = express.Router();
// noe we acesses function which we want to acesses
const homecontroller=require('../controller/home_controller')
router.get('/',homecontroller.home);
router.use('/users',require('./user'));
router.use('/post',require('./posts'))
module.exports=router;
