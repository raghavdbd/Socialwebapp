const passport=require('passport')
const express = require('express')
const router = express.Router();

const postscontroller=require('../controller/post_controller');
router.post('/create',postscontroller.create);
router.get('/destroy/:id',passport.checkAuthentication,postscontroller.destroy)
module.exports=router;