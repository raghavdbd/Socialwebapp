const express = require('express')
const router = express.Router();
const postscontroller=require('../controller/post_controller');
router.post('/create',postscontroller.create);
module.exports=router;