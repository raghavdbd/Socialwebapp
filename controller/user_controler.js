const User=require('../model/user');

module.exports.profile=function(req,res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}
module.exports.signup=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
  return   res.render('user_sign_up',{
        title:"User|sign-up"
    })
}
module.exports.signin=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
 return   res.render('user_sign_in',{
        title:"Codial:Sign-in"
    })
}
module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');

    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error in creating user");
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                     console.log("error in creating user");
                    return;
                }
                return res.redirect('/users/sign-in')
            })
        }else{
        // if user already exist
            return res.redirect('back');
        }

    })
};
module.exports.createSession=function(req,res){
    return res.redirect('/');
}
module.exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/')
} 