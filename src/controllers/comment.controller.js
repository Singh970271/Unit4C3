const express=require("express");

const Comment=require("../models/comment.model");

const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const comments=await Comment.create(req.body)
        return res.status(201).send(comments)

    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports=router