const express = require('express')
const cookieparser= require('cookie-parser');
const app = express()
// 
const port = 8000;
// initialize cokie parser

// we are initializing express-ejs-layouts
const expresslayouts=require('express-ejs-layouts');
// now we setting up mongodb
const db=require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
// we are telling app to use it
app.use(express.static('./assets'));
app.use(expresslayouts);
// for extracting style and script
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
app.use('/',require('./routes'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port, function(err) {
  console.log(`Example app listening on port ${port}`)
})