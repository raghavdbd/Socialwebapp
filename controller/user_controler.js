const User=require('../model/user');

module.exports.profile=function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            // if(err){
            //     console.log('error in finding user')
            // }
            if(user){
                return res.render('user_profile',{
                    title:"User profile",
                    user:user
                })


            }
                return res.redirect('/');
            
        })
    }else{
        return res.redirect('/users/sign-in');
    }
   
}
module.exports.signup=function(req,res){
    res.render('user_sign_up',{
        title:"User|sign-up"
    })
}
module.exports.signin=function(req,res){
    res.render('user_sign_in',{
        title:"User:Sign-in"
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
}
module.exports.createSession=function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error in creating user");
            return;

        }
        if(user){
            // handle password not match
            if(req.body.password!=user.password){
                return res.redirect('back');

            }
            res.cookie('user_id',user.id);
return res.redirect('/users/profile');
            
        }else{
            return res.redirect('back');
        }
    })

}
