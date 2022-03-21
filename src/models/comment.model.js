const mongoose=require("mongoose");


const commentschema=mongoose.Schema({
  body:{type:String,required:true},
  userID:{type:String,required:true}

},{
    timestamp:true
})

const Comment=mongoose.model("books", commentschema);

module.exports=Comment
