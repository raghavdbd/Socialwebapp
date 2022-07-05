const mongoose= require('mongoose');
// creating schema for db
const PostSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    // we user as a field because we need to connect post with user
    user:{
        type:mongoose.Schema.Types.ObjectId,

        ref:'User'
    }



},{
    timestamps:true
});
const Post=mongoose.model('Post',PostSchema);
module.exports=Post; 