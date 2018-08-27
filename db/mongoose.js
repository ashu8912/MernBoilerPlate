const mongoose=require('mongoose');
const DB_URL=require('../config/DB_URL');
mongoose.Promise=global.Promise;
mongoose.connect(DB_URL,{useNewUrlParser:true});
module.exports=mongoose;