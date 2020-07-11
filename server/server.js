const express = require('express');
const app = express();
const db = require('./models/index');
const User = db.user;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'abcdefg123456',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false,
              maxAge: 60000
            }
    })
);


passport.use(new LocalStrategy(
    {usernameField: 'email'},
    function(email, password, done) {
        User.findOne({ where: {email: email} })
        .then(user => {
            if(!user) {
                bcrypt.hash(password, saltRounds, function(err, hash) {
                    User.create({email: email, password: hash})
                    .then(createdUser => {
                        console.log(createdUser);
                        return done(null, createdUser);
                    });
                });
            } else {
                bcrypt.compare(password, user.dataValues.password, function(err, result) {
                    if(result) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                }); 
            }
        });
    }
));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});



app.post('/login', passport.authenticate('local', function(err, user, info){
    if (err) { return next(err); }
    if (!user) { return res.json({message: "Username/Password incorrect"}); }
    req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json(user);
      });
    })
);

app.get('/logout', (req, res, next) => {
    req.logout();
    res.json({
        message: "Successfully logged out"
    });
});

app.get('/ping', (req, res, next) => {
    res.send("Hello world");
})

app.listen(3001, () => console.log("Server started on port 3001"));