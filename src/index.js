const express=require("express");

const usercontroller=require("./controllers/user.controllers");
const bookcontroller=require("./controllers/book.controllers");
const publicationcontroller=require("./controllers/publication.controller");
const commentcontroller=require("./controllers/comment.controller")

const app=express();
module.exports=app;
 
app.use(express.json());


app.use("/users",usercontroller);
app.use("/books",bookcontroller);
app.use("/publications",publicationcontroller)
app.use("/comments",commentcontroller)