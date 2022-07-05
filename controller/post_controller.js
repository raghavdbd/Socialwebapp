const Posts=require('../model/post')
// craeting controller for posts
module.exports.create=function(req,res){
    // we create a post
    Posts.create({
        // storing content
        content:req.body.content,
        // storing user who created post
        user:req.user._id
    },function(err,posts){
        if(err){
            console.log('error in craeting posts');
            return;
        }
        return res.redirect('back');
    }

    )

} 