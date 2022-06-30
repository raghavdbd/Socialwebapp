module.exports.home=function(req,res){
//    if we want to render ejs file
res.cookie('user_id',25);
     res.render('home',{
        title:"home"
     })
}


