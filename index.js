const express = require('express')
const app = express()
const port = 8000;
// we are initializing express-ejs-layouts
const expresslayouts=require('express-ejs-layouts');
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