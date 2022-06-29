const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error in connecting db"));


db.once('open',function(){
    console.log("connected to database :mongodb")

})

module.exports=db;