console.log("Hi, world")

const express=require('express');
const app = express();

/* 

VERBS IN HTTP
GET - POST - PATCH - PUT - DELETE 

*/

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido, este es tu hola mundo en Express.js");


});

app.listen(3000, () =>{
    console.log("Server is running");
});










let yei=0;
var zzz= 0;
//variable