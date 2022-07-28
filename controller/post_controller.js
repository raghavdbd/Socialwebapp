const Posts=require('../model/post');
const Comments=require('../model/comment');
// craeting controller for posts
module.exports.create= async function(req,res){
    // we create a post
    try{
    
    await Posts.create({
         // storing content
         content:req.body.content,
         // storing user who created post
         user:req.user._id
     });
         return res.redirect('back');

    }catch(err){
  console.log('error',err) ;
  return     
  
    }

    
}


module.exports.destroy= async function(req,res){
    try{
  let post= await  Posts.findById(req.params.id)
        // .id converting object id into String
        // post.user is id of user who create the post and req.user.id is id of user who want delete the post
        if(post.user==req.user.id){
            // remove post
            post.remove();
            // delete all comments with associated post
       await Comments.deleteMany({post:req.params.id})
                return res.redirect('back');
            
        }else{
            return res.redirect('back');
        }
    }catch(err){
        console.log('error',err) ;
        return     
        
          }
    
} 