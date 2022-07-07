

const Post=require('../model/post')
module.exports.home=function(req,res){
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
    Post.find({}).populate('user').exec(function(err,posts){
        return  res.render('home',{
            title:'codial|home',
            posts:posts

    })

    })
}