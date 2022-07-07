const mongoose= require('mongoose');
// creating schema for db
const CommentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    // we user as a field because we need to connect post with user
    user:{
        type:mongoose.Schema.Types.ObjectId,

        ref:'User'
    },
    comments:{
        type:mongoose.Schema.Types.ObjectId,

        ref:'Post'
    }



},{
    timestamps:true
});
const Comment=mongoose.model('Comment',CommentSchema);
module.exports=Comment; 
