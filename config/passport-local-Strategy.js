const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;


const User=require('../model/user');
passport.use(new LocalStrategy({
usernamefield:"email" 
},
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) {
            console.log('Invalid password')
            return done(null, false); }
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
module.exports=passport;
