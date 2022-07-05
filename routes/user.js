const express = require('express')
const router = express.Router();
const passport=require('passport');
const usercontroller=require('../controller/user_controler');


router.get('/profile',passport.checkAuthentication,usercontroller.profile);
router.get('/sign-up',usercontroller.signup);
router.get('/sign-in',usercontroller.signin);
router.post('/create',usercontroller.create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'}
),usercontroller.createSession);
router.get('/sign-out',usercontroller.destroySession);
module.exports=router;