const express=require("express");


const Book=require("../models/user.model");

const router=express.Router();


router.post("/",async(req,res)=>{
    try{
        const books=await Book.create(req.body);
        return res.status(200).send(books)

    }catch(err){
        return res.status.send({message:err.message})
    }
})

module.exports=router;