const Posts=require('../model/post');
const Comments=require('../model/comment');
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
module.exports.destroy=function(req,res){
    Posts.findById(req.params.id,function(err,post){
        // .id converting object id into String
        // post.user is id of user who create the post and req.user.id is id of user who want delete the post
        if(post.user==req.user.id){
            // remove post
            post.remove();
            // delete all comments with associated post
            Comments.deleteMany({post:req.params.id},function(err){
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    })
} 