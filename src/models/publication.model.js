const mongoose=require("mongoose");

const publicationchema=mongoose.Schema({
   name:{type:String,required:true},
   bookID:{type:String,required:true}

  },{
      timestamp:true
  })
  
  const Publication=mongoose.model("publication",publicationchema);
  
  module.exports=Publication;

