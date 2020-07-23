const express = require('express');
const app = express();
const db = require('./models/index');
const User = db.user;
const ExerciseLog = db.exerciselog;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
let firstName = "";
let lastName = "";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'abcdefg123456',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false,
              maxAge: 3600000
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
                    User.create({firstName: firstName, lastName: lastName, email: email, password: hash})
                    .then(createdUser => {
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

app.use(cors());

//call this middleware function to user firstname and lastname from req.body
//which is the post request after form is submitted
let getFirstAndLastName = function(req, res, next) {
    firstName = req.body.firstName;
    lastName = req.body.lastName;
    next();
}

app.post('/login', getFirstAndLastName, function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.status(401).json({message: 'invalid username/password'}); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json({
              first: user.firstName,
              last: user.lastName,
              id: user.id
            });
        });
    })(req, res, next);
});


app.get('/logout', (req, res, next) => {
    req.logout();
    res.json({
        message: "Successfully logged out"
    });
});

app.post('/exercise/log', (req, res, next) => {
    req.body.log.unshift({date: req.body.date});
    ExerciseLog.create({userId: req.body.userId, log: req.body.log})
    .then(createdLog => {
        console.log(createdLog);
    })
    console.log(req.body);
    res.send("request received");
});

app.get('/exercise/:id/log', (req, res, next) => {
    ExerciseLog.findAll({
        where: {
            userId: req.params.id
        }
    })
    .then((exerciseLogs) => {
        //exerciseLogs is an array loop through array and send back logs
        const returnedLogs = exerciseLogs.map((exercise) => {
            return exercise.log;
        })
        res.send(returnedLogs);
    })
});

app.get('/ping', (req, res, next) => {
    res.send("Hello world");
})

app.listen(process.env.PORT || 3001);