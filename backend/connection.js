
const mongoose = require('mongoose');

const dbName = "mernwssnov"
const url = `mongodb+srv://alzoya:logintomongodb@cluster0.adhmbyx.mongodb.net/${dbName}?retryWrites=true&w=majority`

 mongoose.connect(url) 
 .then((result) => { 
   
    console.log('database connected');
    
 }).catch((err) => {
    console.log(err);
    
 });
 module.exports = mongoose;
 