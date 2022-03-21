const express=require("express");

const Publication=require("../models/publication.model")

const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const publications=await Publication.create(req.body)
        return res.status(201).send(publications)

    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports=router