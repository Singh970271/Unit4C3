const mongoose=require("mongoose");


const connectdb=()=>{
    mongoose.connect("mongodb://localhost:27017/smallbooks")
}


module.exports=connectdb