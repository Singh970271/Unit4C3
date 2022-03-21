const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    age:{type:String,required:true},
    email:{type:String,required:true},
    profileImages:{type:String,}
},{
    timestamps:true
})
// user model
const User=mongoose.model("user",userSchema);

module.exports=User