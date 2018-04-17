const express = require("express");


var app = express();

app.get("/",(req,res)=>{
  res.status(404).send({error:"page not found",name:"just a test"});
})

app.get("/users",(req,res)=>{
  res.status(200).send([{name:"Cam",age:21},{name:"Bob",age:25},{name:"Joe",age:20}]);
})

app.listen(3000);

module.exports.app = app;
