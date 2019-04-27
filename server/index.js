// innen jon az Express

// mongodb://user:<PASSWORD>@prf-example01-shard-00-00-

const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const mongo = require('mongodb');
const Transaction = require('mongoose-transactions');


//const MongoClient = require('mongodb').MongoClient;

const dbUrl = "mongodb+srv://dbUser:dbUserPassword@prf-project-qgfas.mongodb.net/test?retryWrites=true";
const transaction = new Transaction();

//require('./user.model');


app.use('/', require('./routes'));
app.use('/proba', require('./routes'));

// PORT export PORT = 5000//
const port = process.env.PORT || 3000;
app.listen(port, () =>  console.log(`the server is listening on post ${port}...`));


//const MongoClient = new MongoClient(uri, { useNewUrlParser: true });
/*
MongoClient.connect(uri, {useNewUrlParser: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
  });
});

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/
//console.log(module);


//var db = app.set('dbUrl', dbUrl);

//const userModel = mongoose.model('user');
//mongoose.connect(dbUrl);

/*
mongoose.connection.on('connected', function() {
    var dbo = db.db("test");
    dbo.createCollection("user", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    console.log('db connected');
    })
});


mongoose.connection.on('connected', function(err, db) {
    if (err) throw err;
    var dbo = db.db('testdb');
    console.log("Tesdb created");
    var myObj = { username: "Sanyi", password: "Asdfasd", age: '15'};
    dbo.collection("user").insertOne(myObj, function(err, res){
        if (err) throw err;
        console.log('1 doc inserted');
        db.close();
        console.log("Tesdb closed");
    });    
});

//const user = "user"

//userModel.insertOne('asd','fasd');


//const id = transaction.insert('userModel', object){}

mongoose.connection.on('error', function() {
    console.log('db connection error');
});


passport.serializeUser(function(user, done) {
    if(!user) return done("serializalasi hiba", user);
    return done(null, user);
});

passport.deserializeUser(function(user, done) {
    if(!user) return done("serializalasi hiba", user);
    return done(null, user);
});

passport.use('local', 
    new localStrategy(function(username, password, done) {
        if(username === 'user' && password === '12345') {
            return done(null, username);
        } else {
            return done("Wrong username/password", null);
        }
    }));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(expressSession({secret: '12354456462almajjimnhgiknb,'}));
app.use(passport.initialize());
app.use(passport.session());
*/