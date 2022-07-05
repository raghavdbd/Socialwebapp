const passport=require('passport');
const LocalStrategy=require('passport-local');


const User=require('../model/user');
passport.use(new LocalStrategy({
usernameField:"email" 
},
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log("err");
           return done(err); }
        
        if (!user || user.password != password) {
            console.log('Invalid password')
            return done(null, false);
           }
        return done(null, user);
      });
    }
  ))
//   searilizing the user to decide which key kept in cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
})
// deserializing the user from the key in cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding user');
            return done(err);
        }
        return done(null,user)
    })
})
// check if user is Authenticated
// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
  // if the user is signed in, then pass on the request to the next function(controller's action)
  if (req.isAuthenticated()){
    console.log("abc");
      return next();
    
  }
  console.log("aaaa");

  // if the user is not signed in
  return res.redirect('/users/sign-in');
}
 
passport.setAuthenticatedUser = function(req, res, next){
  if (req.isAuthenticated()){
      // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
      res.locals.user = req.user;
  }

  next();
}



module.exports = passport;