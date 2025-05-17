// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Welcome to the Node.js Tutorial<h1>');
//     // if(req.url==='/about'  && req.method==='GET'){
//     //     res.end('This is about page');
//     // }
// });


// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
// this is demo
const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send('welcome to homeeeeeeeeeee page');
})
app.get('/about',(req,res)=>{
    res.send('welcome to about page');
})
app.get('/contact',(req,res)=>{
    res.send('welcome to contact page');
})

app.get('/user/:no1/:no2',(req,res)=>{
    res.send(`No1: ${req.params.no1} No2: ${req.params.no2} ans is: ${parseInt(req.params.no1)+parseInt(req.params.no2)}`);
})

app.listen(3000,()=>{
    console.log("server is start... at http://localhost:3000");
})


