const Express=require('express');
const {getNews}=require('../controller/news-controller');
const Route=Express.Router();
Route.route('/').get((req,res)=>res.status(200).send("Hello"));
Route.route("/News").get(getNews);

module.exports=Route;