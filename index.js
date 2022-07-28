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
// we require all passport library
const session=require('express-session');
const passport=require('passport');
const LocalStrategy=require('./config/passport-local-Strategy')
const MongoStore=require('connect-mongo');
const flash = require('connect-flash');
const customMware=require('./config/middleware');

app.use(express.urlencoded());
app.use(cookieparser());
// we are telling app to use it
app.use(express.static('./assets'));
app.use(expresslayouts);
// for extracting style and script
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
  name : "Codial" , 
  resave : false , 
  secret : "blah something" , 
  saveUninitialized : false , 
  cookie : {
      maxAge : (1000 * 120 * 60 ) 
  },
  store: MongoStore.create({
               mongoUrl: "mongodb://localhost/my_database "
      })
})) ; 
// app.use(session({
//   name:'codial',
//   secret: 'keyboard cat',
  
//   saveUninitialized: false,
//   resave: false,
//   cookie: 
//   {
//     maxAge:1000*60*100
//   }
// //   },
    
// //      store:new MongoStore({
// //       mongooseConnection:db,
// //       autoRemove:'disabled'
// //   },
// //   function(err){
// //       console.log(err || 'connect mongo-db setup')
  
// // })
  
// }))
app.use(passport.initialize() );
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMware.setflash)
app.use('/',require('./routes'));
app.listen(port, function(err) {
  console.log(`Example app listening on port ${port}`)
})