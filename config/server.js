var express=require("express");
var app=express();
var appData = require('../data.json');
var seller = appData.seller;
var goods=appData.goods;
var ratings=appData.ratings;

app.get("/api/seller",function(req,res){
  res.json({
    errno: 0,
    data: seller
  });
});
app.get("/api/goods",function(req,res){
  res.json({
    errno: 0,
    data: goods
  });
});
app.get("/api/ratings",function(req,res){
  res.json({
    errno: 0,
    data: ratings
  });
});
app.listen(3000);
