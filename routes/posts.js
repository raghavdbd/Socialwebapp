const express = require('express')
const router = express.Router();
const postscontroller=require('../controller/post_controller');
router.get('/post',postscontroller.posts);
module.exports=router;