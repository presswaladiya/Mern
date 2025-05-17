const express=require("express");
const app=express();
app.use(express.json());

const insuser=require("./ins");
const deluser=require("./del");
const uptuser=require("./upt");
 const viewuser=require("./view");

app.use('/',insuser);
app.use('/',deluser);
app.use('/',uptuser);
app.use('/',viewuser);

app.listen(3000,()=>console.log("Port is: http://localhost:3000"))

