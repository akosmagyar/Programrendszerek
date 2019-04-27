
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
//const userModel = mongoose.model('./user.model');

const Joi = require('@hapi/joi');


const BeerCtrl = require('./controllers/beer.contoller'); //classok
const UserCtrl = require('./controllers/user.contoller');

//modellek
const User = require('./models/user.model');
const Beer = require('./models/beer.model');

export default function setRoutes(app) {
    const router = express.Router();
    
    const beerCtrl = new BeerCtrl();
    const userCtrl = new UserCtrl();

    //Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);

    //Beers
    router.route('/beers').get(beerCtrl.getAll);
    router.route('/beers/count').get(beerCtrl.count);
    router.route('/beer').post(beerCtrl.insert);
    router.route('/beer/:id').get(beerCtrl.get);
    router.route('/beer/:id').put(beerCtrl.update);
    router.route('/beer/:id').delete(beerCtrl.delete);

    //alkalmazzuk a route-okat a /api prefix-szel
    app.use('/api', router);
}
/*

router.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

router.get('/', (req,res) => {
    res.send('Hello world again!!');
});

router.get('/api/courses', (req,res) => {
    res.send(courses);
});

router.get('/api/courses/:id', (req,res) => { //id paraméter
    let course = courses.find( c => c.id === parseInt(req.params.id)); //string lenne, kell kasztolni
    if (!course) return res.status(404).send('Nem található az adott id');
    res.send(course);
});

router.post('/api/courses', (req,res) => {
    const { error } = validateCourse(req.body); 
    if (error) return res.status(400).send(result.error.details[0].message);       
    
    /*
    if(!req.body.name || req.body.name.length < 3){
        //400 a Bad Request
        res.status(400).send('Név megadása kötelező');
        return;
          } */
/*
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// /api/courses/1

router.get('/api/posts/:year/:month', (req, res) => {  
    res.send(req.query);
});

router.put('/api/courses/:id', (req, res) => { //keresse meg a kurzust, ha nem találja 404
    const course = courses.find( c => c.id === parseInt(req.params.id)); //string lenne, kell kasztolni
    if (!course)  return res.status(404).send('Nem található az adott id')     
    
    //validáció - 400 ha bad request    
    const { error } = validateCourse(req.body); // result.error - object destructor, const result = validateCourse(req.body); helyett
    if (error) return res.status(400).send(result.error.details[0].message);        
    
    //update rész
    course.name = req.body.name; //ha lenne több akkor ugyanitt
    res.send(course);
});

router.delete('/api/courses/:id', (req, res) => {
    //megkeresni, ha nincs 404
    const course = courses.find( c => c.id === parseInt(req.params.id)); //string lenne, kell kasztolni
    if (!course) return res.status(404).send('Nem található az adott id');

    //törlés
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    
    //visszaadni a kurzusokat
    res.send(course);
})


function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }; 

    return Joi.validate(course, schema);
};


/*
router.post('/register', function(req, res) {
    if(!req.body.username || !req.body.password) {
        return res.status(404).send({
            message: "username or password missing"
            });
    } else {
        var user = new userModel({
            //_id: new mongoose.Types.ObjectId(),
            username: req.body.username, 
            password: req.body.password
        });
        //
        //user.save(function(error) {
        //    if(error) return res.status(500).send("db error");
        //    return res.status(200).send("registration success");
       // })
        
       user
        .save()
        .then(result => {
           console.log(result);
       })
       .catch(err => console.log(err));
    }
});

router.get('/', function(req, res) {
    console.log("Query parameterek", req.query);
    console.log(req.session.passport.user);
    if(req.isAuthenticated()) {
        return res.status(200).send("Hello World");
    } else {
        return res.status(403).send("You are not welcome here");
    }
});

router.get('/users', function(req, res) {
    if(req.isAuthenticated() && req.session.passport.user.username === "admin") {
        userModel.find({}, function(err, users) {
            return res.status(200).send(users);
        })
    } else {
        return res.status(403).send("Unauthorized access");
    }
})

router.post('/logout', function(req, res) {
    if(req.isAuthenticated()) {
        req.logout();
        res.status(200).send("You have been logged out");
    } else {
        res.status(403).send("You have to log in first");
    }
});

router.post('/login', function (req, res) {
    if (req.body.username && req.body.password) {
        passport.authenticate('local', function (error, username) {
            if (error) {
                return res.status(403).send(error);
            } else {
                req.logIn(username, function (error) {
                    if (error) return res.status(500).send(error);
                    return res.status(200).send("login successful");
                })
            }
        })(req, res);
    } else {
        return res.status(403).send("username and password required");
    }
})

router.route('/book').get(function (req, res) {
    return res.status(404).send("No books yet");
}).post(function (req, res) {
    return res.status(200).send("new book stored");
}).put(function (req, res) {
    return res.status(200).send("book updated");
}).delete(function (req, res) {
    return res.status(200).send("book deleted");
})
*/

module.exports = router;
