const app=require("./index")

const connectdb=require("./configs/db")




app.listen(7500,async()=>{
    try{
          await connectdb();

    }catch(err){
        return res.status(500).send({message:err.message})
    }
console.log("app is listening on 7500")
})