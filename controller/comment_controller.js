const Comment =require('../model/comment');
const Post = require('../model/post');


// craeting controller for posts
module.exports.create=function(req,res){
    // first we have to find post 
    Post.findById(req.body.post,function(err,post){
        if(post){
            Comment.create({
                // storing content
                content:req.body.content,
                post:req.body.post,
                // storing user who created post
                user:req.user._id
            },function(err,comment){
                if(err){
                    console.log('error in craeting comments');
                    return;
                }
                // we are updating here this is modb function
                post.comments.push(comment);
                post.save();
                res.redirect('/')
            })
        }


    })

    // we create a omment



    
} 

module.exports.destroy = function(req, res){
    Comment.findById(req.params.id, function(err, comment){
        if (comment.user == req.user.id){



            let postId = comment.post;

            comment.remove();

            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    })};
    
