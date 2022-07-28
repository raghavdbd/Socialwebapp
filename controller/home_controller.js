

const Post=require('../model/post');
const User=require('../model/user');
module.exports.home= async function(req,res){
    // console.log(req.cookie);
    // res.cookie(('user_id',25));
  
    // Post.find({},function(err,posts){
    //   return  res.render('home',{
    //         title:'codial|home',
    //         posts:posts

    // })

    // })
    // to populaate user we to do this
    // in exex we write call back function 
    //  as
    //
    try{
        let posts= await Post.find({})
    .populate('user')
    //as we have to populate comments and user
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })

      let user= await  User.find({});
           
    
            
      return  res.render('home',{
        title:'codial|home',
        posts:posts,
        all_users:user
})
       

    }catch(err){
        console.log('Error',err)
         return ;
    }
  
    
}