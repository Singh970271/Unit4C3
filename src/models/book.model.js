const mongoose=require("mongoose");


const bookschema=mongoose.Schema({
  like:{type:Number,required:true},
  coverImage:{type:String,required:true},
  content:{type:String,required:true},
  userID:{type:String,required:true},
  publicationID:{type:String, required:true}

},{
    timestamp:true
})

const Book=mongoose.model("books",bookschema);

module.exports=Book

